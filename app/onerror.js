module.exports = {
  '404': {
    * html(ctx, err) {
      yield ctx.render('404.html');
    },
    * json(ctx, err) {
      //
    }
  },
  '403': function * (ctx, err) {
    //
  },
  '4xx': {
    * all(ctx, err) {

    }
  }
};
