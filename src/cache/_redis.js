/**
 * @description 连接redis的方法 get set
 */

 const redis = require('redis')
 const { REDIS_CONF } = require('../conf/db')

 // 创建客户端
 const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)
 // 监听redis连接错误
 redisClient.on('error', err => {
   console.log('redis error', err)
 })

 /**
  * set 的操作
  * @param {string} key 键
  * @param {string} val 值
  * @param {number} timeout 过期时间，单位是秒
  */
function set(key, val, timeout = 60 * 60) {
  if (typeof val === 'object') {
    val = JSON.stringify(val)
  }
  // 设置键值对
  redisClient.set(key, val)
  // 设置过期时间
  redisClient.expire(key, timeout)
}

 /**
  * get 的操作
  * @param {string} key 键
  */
function get(key) {

}

 module.exports = {
   set
 }