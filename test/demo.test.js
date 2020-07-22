/**
 * @description test demo
 * @author 张小希
 */

function sum(a, b) {
  return a + b;
}

 test('test demo 1', () => {
  const res = sum(10, 20)
  expect(res).toBe(30)
   // 非常的语义化这里，“expect-期待 res 的结果，toBe-是 30”
 })
 