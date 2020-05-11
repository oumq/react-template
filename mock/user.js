let Mock = require('mockjs')

module.exports = {
  'POST /user/login': {
    code: 200,
    msg: '登陆成功',
    data: {
      access_token: Mock.mock('@guid')
    }
  }
}
