/**
 * @description json test
 */

 const server = require('./server')

 test('json 接口返回格式正确', async () => {
   const res = await server.get('/json')
   expect(res.body).toEqual({ // toEqual是对象的比较方法
     title: 'koa2 json'
   })
   // 下面是另一种写法
   expect(res.body.title).toBe('koa2 json') // 值类型比较是toBe
 })
