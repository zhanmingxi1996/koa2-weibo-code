/**
 * @description res 的数据模型
 */

/**
 * @description 基础模块
 */
class BaseModel {
  constructor({errno, data, message}) {
    this.errno = errno
    if (data) {
      this.data = data
    }
    if (message) {
      this.message = message
    }
  }
}

/**
 * @description 请求成功的模型
 */
class SuccessModel extends BaseModel {
  constructor(data = {}) {
    super({
      errno: 0,
      data
    })
  }
}

/**
 * @description 失败的数据模型
 */
class ErrorModel extends BaseModel {
  constructor({errno, message}) {
    super({
      errno,
      message
    })
  }
}

module.exports = {
  SuccessModel,
  ErrorModel
}

// 请求成功会返回下面这样一个对象
// {
//   errno: 0,
//   data: {
//     userName: 'xxx'
//   }
// }

// 请求失败会返回下面这样的，因为失败，所以没有data
// {
//   errno: 10001,
//   message: '登录失败'
// }