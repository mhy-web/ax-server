const isDev = process.env.NODE_ENV === 'development';
const localEnv = require('../env');

module.exports = {
  // mongodb:// [username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
  getMongoUrl: () => {
    const env = isDev ? localEnv.mongodb.dev : localEnv.mongodb.prod;
    return `mongodb://${env.user}:${env.pwd}@${env.host}:${env.port}/${env.db}?authSource=admin`;
  }
};
