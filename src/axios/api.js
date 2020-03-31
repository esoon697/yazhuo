import {get, post} from './axios'

const api = {
  // getIndex: data => post('/api/index/index', data) 示例

  // 注册
  getAccount: data => post('/common/api/register', data),

  // 登录
  login: data => post('/common/api/login', data),

  // 微信登录获取url
  getCode: data => get('/common/wechat/getCodeUrl', data),

  // 获取用户账号和微信是否绑定
  getBind: data => get('/common/wechat/getIsBindFlag', data),

  // 绑定账号和微信号
  bindAccount: data => get('/common/wechat/bindAccount', data),

  // 导航栏信息目录
 getNavBarInfms: data => post('/info/yzInformation/queryNavigationBarInfms', data),

  // 首页一维数组接口集合
  getInfmByParams: data => post('/info/yzInformation/queryInfmByParams', data),

  // 首页二维数组接口集合
  getInfmAndSubList: data => post('/info/yzInformation/queryInfmAndSubList', data),

  // 首页生态共建列表接口
  getEcologyInfm: data => post('/info/yzInformation/queryEcologyInfm', data),

  // 首页获取专家团队和合作学校的数据
  getTeamAndSchool: data => post('/info/yzInformation/queryEcologyInfmSubList', data)

}

export default api