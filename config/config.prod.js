const path = require('path');

/*
  日志按照文件大小切割
  我们需要把 egg-web.log 按照2g大小进行切割
 */
module.exports = appInfo => {
  return {
    logrotator: {
      filesRotateBySize: [
        path.join(appInfo.root, 'logs', appInfo.name, 'egg-web.log')
      ],
      maxFileSize: 2 * 1024 * 1024 * 1024
    }
  };
};
