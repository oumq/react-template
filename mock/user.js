let Mock = require('mockjs')

module.exports = {
  'POST /user/login': {
    code: 200,
    msg: '登陆成功',
    data: {
      access_token: Mock.mock('@guid'),
      user_info: {
        user_id: Mock.mock('@id'),
        user_name: Mock.mock('@first'),
        user_sex: '男',
        user_age: 23,
        user_email: Mock.mock('@email'),
        user_phone: '15659980000'
      },
      role: 'guest',
      authRoutes: [
        {
          id: '1',
          name: 'dashboard',
        },
        {
          id: '2',
          name: 'components',
          children: [
            {
              id: '3',
              name: 'icon',
            },
          ],
        }
      ]
    }
  }
}
