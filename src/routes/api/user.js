/**
 * @description user API 路由
 */

const router = require('koa-router')()
const { isExist } = require('../../controller/user')

router.prefix('/api/user')

// 注册路由
router.post('/register', async (ctx, next) => {
  ctx.body = {
    msg: '注册api'
  }
})

// 用户名是否存在
router.post('/isExist', async (ctx, next) => {
  // 使用 ctx.request.body 来获取 post 请求携带的信息
  const { userName } = ctx.request.body
  // controller
  ctx.body = await isExist(userName)
  // ctx.body = XXX() ，以这种模式统一返回格式
})

module.exports = router
