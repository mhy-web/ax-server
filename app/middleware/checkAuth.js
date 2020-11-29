'use strict';

module.exports = options => {
  return async function(ctx, next) {
    const token = ctx.helpers.getHeader(ctx.header, 'authentication');
    ctx.token = token;
    await next();
  };
};
