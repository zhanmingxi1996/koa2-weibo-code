/**
 * @description sequelize 同步数据库
 */

const seq = require('./seq')

// 测试连接
seq.authenticate().then(() => {
  console.log('ok')
}).catch(() => {
  console.log('err')
})

// 执行同步
seq.sync(
  {
    force: true // 设置，如果数据库已经有同名表，就覆盖
  }
).then(() => {
  console.log('syne ok')
  process.exit() // 同步完成后调用，清除线程
})