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

let MYSQL_CONF = {
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: '3306',
  database: 'koa2_weibo_db'
}

if (isProd) {
  REDIS_CONF = {
    // 生产环境中的redis配置
    port: 6379, // 端口号
    host: '127.0.0.1'
  }

  MYSQL_CONF = {
    // 线上的mysql配置，暂时以本地的配置编写
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'koa2_weibo_db'
  }
}


module.exports = {
  REDIS_CONF,
  MYSQL_CONF
}

