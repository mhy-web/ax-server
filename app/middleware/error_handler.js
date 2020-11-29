module.exports = () => {
  return async function errorHandler(ctx, next) {
    try {
      await next();
    } catch (err) {
      // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
      console.log('---invalid_param----\n', err);
      const status = err.status || 500;
      console.log('error---\n', err);
      if (err.status === 401) {
        ctx.status = 200;
        ctx.body = {
          code: 401,
          msg: 'authorization token error'
        };
        return;
      }
      if (err.code === 'invalid_param') {
        ctx.status = 200;
        ctx.body = {
          code: 20001,
          msg: err.message
        };
      }
      ctx.app.emit('error', err, ctx);
      // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
      const error = status === 500 && ctx.app.config.env === 'prod'
        ? 'Internal Server Error'
        : err.message;

      // 从 error 对象上读出各个属性，设置到响应中
      ctx.body = { error };
      if (status === 422) {
        ctx.body.detail = err.errors;
      }
      ctx.status = status;
    }
  };
};
