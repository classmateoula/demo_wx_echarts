import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import 'taro-ui/dist/style/index.scss'
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',// 首页
      'pages/room/room',// 游戏房间页
      'pages/user/user',// 用户功能页
      'pages/contribution/contribution',// 排行榜列表页
      'pages/user/items',// 用户详情页
      'pages/friend/friend',// 好友页面
      'pages/setting/setting',// 设置页面
      'pages/partake/partake',// 参与页面
      'pages/money/money',// 零钱管理
      'pages/rule/rule',// 我的规则
      'pages/room/items',// 房间详情
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
