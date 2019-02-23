import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import TabBar from '../../components/tabbar/tabbar'
import './room.scss'

export default class Room extends Component {

  config = {
    navigationBarTitleText: '房间',
  }

  componentWillMount () {
  }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor () {
    super(...arguments)
    this.state = {
      roomList: [
        {
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547990148883&di=bd8bdb2601b1068b48a2547ec7814a08&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D2908107939%2C2655158131%26fm%3D214%26gp%3D0.jpg',
          title: '开心台球'
        },{
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547990148883&di=bd8bdb2601b1068b48a2547ec7814a08&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D2908107939%2C2655158131%26fm%3D214%26gp%3D0.jpg',
          title: '哈哈扑克'
        },{
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547990148883&di=bd8bdb2601b1068b48a2547ec7814a08&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D2908107939%2C2655158131%26fm%3D214%26gp%3D0.jpg',
          title: '渣男命名法'
        },{
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547990148883&di=bd8bdb2601b1068b48a2547ec7814a08&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D2908107939%2C2655158131%26fm%3D214%26gp%3D0.jpg',
          title: '峡谷乱斗'
        },{
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547990148883&di=bd8bdb2601b1068b48a2547ec7814a08&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D2908107939%2C2655158131%26fm%3D214%26gp%3D0.jpg',
          title: '安史之乱'
        }
      ]
    }
  }

  handleClick (e) {
    let index = e.currentTarget.dataset.index
    this.$preload({
      title: this.state.roomList[index].title
    })
    Taro.navigateTo({
      url: '/pages/room/items'
    })
  }

  render () {
    return (
      <View className='room'>
        <View className='at-row at-row--wrap'>
        {
          this.state.roomList.map((value, key) => {
            return (
              <View
                key={key}
                data-index={key}
                className='room-list cg-tc'
                onClick={this.handleClick}
              >
                <Image src={value.img} className='room-img'></Image>
                <Text>{value.title}</Text>
              </View>
            )
          })
        }
        </View>
        <TabBar current={2}/>
      </View>
    )
  }
}

