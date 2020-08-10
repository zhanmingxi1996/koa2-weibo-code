/**
 * @description 数据格式化
 */
const { DEFAULT_PICTURE } = require('../conf/constant')

/**
* 用户默认头像
* @param {Object} obj 用户默认头像
*/
function _formatUserPicture(obj) {
  if (obj.picture == null) { 
    obj.picture = DEFAULT_PICTURE
  }
  return obj
}

/**
 * 格式化用户信息
 * @param {Array|Object} list 用户列表或者单个用户对象
 * 参数有可能有两种类型，因为sequelize查询可能返回有两种类型
 */
function formatUser(list) {
  if (list == null) {
    return
  }

  if (list instanceof Array) {
    // 当参数是数组的时候--用户列表
    return list.map(_formatUserPicture)
  }

  // 当参数是单个对象的时候
  let result = list
  result = _formatUserPicture(result)
  return result
}

module.exports = {
  formatUser
}