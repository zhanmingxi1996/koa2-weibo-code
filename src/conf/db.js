/**
 * @description 存储配置
 * @author 张小希
 */

const { isProd } = require('../utils/env')

// 开发环境中的redis配置
let REDIS_CONF = {
  port: 6379, // 端口号
  host: '127.0.0.1'
}

if (isProd) {
  REDIS_CONF = {
    // 生产环境中的redis配置
    port: 6379, // 端口号
    host: '127.0.0.1'
  }
}

module.exports = {
  REDIS_CONF
}

