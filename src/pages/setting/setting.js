import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

export default class Setting extends Component {

  config = {
    navigationBarTitleText: '设置'
  }

  render () {
    return (
      <View>设置</View>
    )
  }
}