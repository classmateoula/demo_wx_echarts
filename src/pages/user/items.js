import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

export default class Items extends Component {

  config = {
    navigationBarTitleText: '个人详情'
  }

  constructor () {
    super(...arguments)
    this.state = {
      userInfo: null
    }
  }

  render () {
    return (
      <View>{this.state.userInfo}</View>
    )
  }
}