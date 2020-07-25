/**
 * @description sequelize 实例
 */

const Sequelize = require('sequelize')
const { MYSQL_CONF } = require('../conf/db')
const { isProd, isTest } = require('../utils/env')

const { host, user, password, database } = MYSQL_CONF

const conf = {
  host: host,
  dialect: 'mysql'
}

if (isTest) {
  conf.logging = () => {}
}

if (isProd) {
  // 如果是线上环境，则使用连接池配置
  conf.pool = {
    max: 5, // 连接池最大连接数量
    min: 0, // 最小连接数量
    idle: 10000 // 如果一个连接池 10秒 之内没有被使用，就释放
  }
}

const seq = new Sequelize(database, user, password, conf)

module.exports = seq

// 测试连接
// seq.authenticate().then(() => {
//   console.log('ok')
// }).catch(() => {
//   console.log('err')
// })