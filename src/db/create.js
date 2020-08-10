const { User } = require('./model/index')

!(async function () {
  // 创建用户
  const runrun = await User.create({
    userName: 'runrun',
    password: '123',
    nickName: '润润',
    gender: '2'
  })
})()