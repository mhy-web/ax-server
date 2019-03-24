'use strict';

module.exports = options => {
  return async function proxy(ctx, next) {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('content-type', 'application/json;charset=UTF-8');
    ctx.set('Access-Control-Allow-Headers', 'origin, x-requested-with, content-type, accept');

    if (ctx.method === 'OPTIONS') {
      ctx.set('Access-Control-Allow-Methods', 'GET,HEAD,PUT,POST,DELETE');
      ctx.set('Access-Control-Allow-Credentials', true);
    }
    await next();
  };
};
