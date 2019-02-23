import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

export default class RoomItems extends Component {

  config = {
    navigationBarTitleText: '房间详情'
  }

  componentWillMount () {
    this.setState({
      title: this.$router.preload.title
    })
  }

  constructor () {
    super(...arguments)
    this.state = {
      title: null
    }
  }

  render () {
    return (
      <View>{this.state.title}</View>
    )
  }
}