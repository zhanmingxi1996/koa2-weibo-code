const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  ctx.body = 'hello world'
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  // const session = ctx.session
  // if (session.viewNum == null) {
  //   session.viewNum = 0
  // }
  // session.viewNum++

  throw Error()

  ctx.body = {
    title: 'koa2 json',
    // viewNum: session.viewNum
  }
})

router.get('/profile/:userName', async (ctx, next) => {
  const { userName } = ctx.params
  ctx.body = {
    title: 'this is profile page',
    name: `${userName}`
  }
})

router.get('/loadMore/:userName/:pageIndex', async (ctx, next) => {
  const {userName, pageIndex} = ctx.params
  ctx.body = {
    userName,
    pageIndex
  }
})

router.post('/login', async (ctx, next) => {
  const {userName, password} = ctx.request.body
  ctx.body = {
    userName,
    password
  }
})

module.exports = router
