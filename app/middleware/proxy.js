'use strict';

module.exports = options => {
  return async function proxy(ctx, next) {
    // ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Origin', ctx.header.origin);
    ctx.set('Access-Control-Allow-Headers', 'origin, x-requested-with, content-type, accept');
    ctx.set('Access-Control-Allow-Methods', 'GET,HEAD,PUT,POST,DELETE');
    ctx.set('Access-Control-Allow-Credentials', true);
    ctx.set('content-type', 'application/json;charset=UTF-8');

    if (ctx.method === 'OPTIONS') {
      ctx.status = 204;
      return;
    }
    await next();
  };
};
