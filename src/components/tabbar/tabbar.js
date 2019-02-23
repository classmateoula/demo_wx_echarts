import Taro, { Component } from '@tarojs/taro'
import { AtTabBar, AtIcon } from 'taro-ui'

export default class TabBar extends Component {
  
  componentWillMount () {
    this.setState({
      current: this.props.current
    })
  }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor () {
    super(...arguments)
    this.state = {
      current: null,
      tabList: [
        { title: '首页', text: 8, iconType: 'home' },
        { title: '排行榜', iconType: 'analytics' },
        { title: '房间',iconType: 'eye' },
        { title: '我', dot: true,iconType: 'user' }
      ]
    }
  }

  handleClick (val) {
    if (this.state.current == val)return false
    this.setState({
      current: val
    })
    switch (val) {
      case 0:
        Taro.redirectTo({
          url: '/pages/index/index'
        })
        break;
      case 1:
        Taro.redirectTo({
          url: '/pages/contribution/contribution'
        })
        break;
      case 2:
        Taro.redirectTo({
          url: '/pages/room/room'
        })
        break;
      case 3:
        Taro.redirectTo({
          url: '/pages/user/user'
        })
        break;
      default:
        break;
    }
  }
  render () {
    return (
      <AtTabBar
          fixed
          selectedColor="#007acc"
          tabList={this.state.tabList}
          onClick={this.handleClick.bind(this)}
          current={this.props.current}
      />
    )
  }
}