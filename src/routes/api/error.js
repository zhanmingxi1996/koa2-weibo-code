const router = require('koa-router')()

router.get('/error', async (ctx, next) => {
  ctx.body = {
    msg: '这是一个404页面吖！'
  }
})

router.get('*', async (ctx, next) => {
  ctx.body = {
    msg: '404 not found!'
  }
})

module.exports = router
