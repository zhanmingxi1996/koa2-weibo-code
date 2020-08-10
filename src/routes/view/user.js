/**
 * @description 登录相关的页面路由
 */

const router = require('koa-router')()

router.get('/login', async (ctx, next) => {
  ctx.body = {
    msg: '这是login页面'
  }
})

router.get('/register', async (ctx, next) => {
  ctx.body = {
    msg: '这是register页面'
  }
})

module.exports = router

