'use strict';
const fs = require('fs');
const path = require('path');

// const Controller = require('egg').Controller;
const BaseController = require('../../core/baseController');

function getRange(range) {
  // req.setRequestHeader('range', `bytes=${start}-${end}`)
  if (range) {
    const result = range.match(/\d+/g);
    return {
      start: result[0],
      end: result[1]
    };
  } else {
    throw new Error('range error');
  }
}

class RangeController extends BaseController {
  async rangeFile() {
    const { ctx } = this;
    // const file = 'public/fastPoolTemplate.xlsx';
    const query = ctx.query;
    const { filename } = query;

    const { size } = fs.statSync(path.join(__dirname, '/', filename));
    console.log('size', size);
    const range = ctx.headers['range'] || ctx.headers('Range');
    console.log('range', range);

    if (!range) {
      ctx.set('Accept-Ranges', 'bytes');
      this.ctx.body = fs.readFileSync(path.join(__dirname, '/', filename));
      return;
    }
    const { start, end } = getRange(range);
    if (start >= size || end >= size) {
      ctx.respone.status = 416;
      ctx.body = '';
      return;
    }
    ctx.response.status = 206;
    ctx.set('Accept-Ranges', 'bytes');
    ctx.set('Content-Range', `bytes ${start}-${end || size - 1}/${size}`);
    ctx.body = fs.createReadStream(path.join(__dirname, '/', filename), {start, end});
  }
}

module.exports = RangeController;
