const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-generic-session')
const redisStore = require('koa-redis')

const { REDIS_CONF } = require('./conf/db.js')
const { isProd } = require('../utils/env')

// 导入路由
const index = require('./routes/index')
const users = require('./routes/users')
const errorRouter = require('./routes/api/error')

// error handler
let onerrorConf = {}
if (isProd) {
  onerrorConf = {
    redirect: '/error'
  }
}
onerror(app, onerrorConf)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

// session
app.keys = ['ZXX_1996#$'] // 加密秘钥
app.use(session({
  key: 'weibo.sid', // cookie name 默认是‘koa.sid’
  prefix: 'weibo:sess:', // redis key 的前缀，默认是‘koa:sess:’
  cookie: {
    path: '/', // 这样配置在网站的所有地方，都可以访问
    httpOnly: true, // 设置只有后端，才能修改这里的cookie
    maxAge: 24 * 60 * 60 * 1000 // cookie过期时间,单位是毫秒
  },
  ttl: 24 * 60 * 60 * 1000, // redis中的key-value过期时间，单位是毫秒
  store: redisStore({
    all: `${REDIS_CONF.host}:${REDIS_CONF.port}`
  }) // 存储cookie的仓库，我们刚刚引入的koa-redis生成的
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(errorRouter.routes(), errorRouter.allowedMethods)

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

module.exports = app
