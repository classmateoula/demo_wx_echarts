import Taro, { Component } from '@tarojs/taro'
import { AtGrid } from 'taro-ui'
import { View, Text, Image } from '@tarojs/components'
import TabBar from '../../components/tabbar/tabbar'
import './user.scss'

export default class User extends Component {

  config = {
    navigationBarTitleText: '我'
  }

  componentWillMount () {
    this.setState({
      list: [
        {
          image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
          value: '个人信息',
          navUrl: '/pages/user/items'
        },{
          image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
          value: '好友',
          navUrl: '/pages/friend/friend'
        },{
          image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
          value: '最近参与',
          navUrl: '/pages/partake/partake'
        },{
          image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
          value: '我的规划',
          navUrl: '/pages/rule/rule'
        },{
          image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
          value: '零钱管理',
          navUrl: '/pages/money/money'
        },{
          image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
          value: '功能设置',
          navUrl: '/pages/setting/setting'
        }
      ],
      userInfo: {
        img: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
        name: '迪迦',
        money: 100,
        bg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547990148883&di=bd8bdb2601b1068b48a2547ec7814a08&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D2908107939%2C2655158131%26fm%3D214%26gp%3D0.jpg'
      },
    })
  }

  constructor () {
    super(...arguments)
    this.state = {
      list: null,
      userInfo: null,
      pocketAnimation: null,
      pocketAnimationTop: 0,
      userAni: null
    }
  }
  changePocket () {
    let animationTop = Taro.createAnimation({
      duration: 1000,
      timingFunction: "ease",
      delay: 0,
      transformOrigin: "50% 50%"
    })
    let animationBg = Taro.createAnimation({
      duration: 1000,
      timingFunction: "ease",
      delay: 0,
      transformOrigin: "50% 50%"
    })
    let top = this.state.pocketAnimationTop == 0 ? -30 : 0
    let bg = this.state.pocketAnimationTop == 0
      ? -100// 'linearinear-gradient(to top, #ff0000 40%,#fff);'
      : 0
    animationTop.translateY(top).step()
    animationBg.translateY(bg).step()
    this.setState({
      pocketAnimation: animationTop.export(),
      pocketAnimationTop: top,
      userAni: animationBg.export()
    })
  }
  setGrid (e) {
    Taro.navigateTo({
      url: e.navUrl
    })
  }

  render () {
    return (
      <View className='user'>
        <View className='user-box'>
          <Image src={this.state.userInfo.bg} className='user-bg'></Image>
          <View className='user-img-box'>
            <Image src={this.state.userInfo.img} className='user-img'></Image>
            <View className='user-img-head' animation={this.state.userAni}></View>
          </View>
          <View className='user-body'>
            <View className='user-head'></View>
            <View className='user-pocket'>
              <View 
                className='bg-king user-pocket-item'
                onClick={this.changePocket}
                animation={this.state.pocketAnimation}
              >
                <View className='at-article__h2'>{this.state.userInfo.name}</View>
                <View className='at-article__p'>￥{this.state.userInfo.money}</View>
              </View>
            </View>
          </View>
        </View>
        <AtGrid
          data={this.state.list}
          onClick={this.setGrid.bind(this)}
        />
        <TabBar current={3}/>
      </View>
    )
  }
}

