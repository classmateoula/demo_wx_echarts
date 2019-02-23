import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.scss'
import TabBar from '../../components/tabbar/tabbar'
import { AtList, AtListItem } from 'taro-ui'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { 
    console.log(1);
  }

  componentDidMount () {
    console.log(22);
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor () {
    // super(...argument)
    this.state = {
      current: 0,
      imgList: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548584733&di=fdd0c9605395eaea8711bf0c77d9989a&imgtype=jpg&er=1&src=http%3A%2F%2Fent.k618.cn%2Fylzx%2F201701%2FW020170128377742629889.jpeg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547990003537&di=d6d25d425b30ae5028bd120e749c5011&imgtype=0&src=http%3A%2F%2Fgameonline.yesky.com%2Fimagelist%2F2009%2F107%2F260zjt0600xl.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547990053258&di=4cd5fc27f71dacf844bc7145ec2fb8ff&imgtype=0&src=http%3A%2F%2Fi8.hexun.com%2F2019-01-01%2F195729326.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547990148883&di=bd8bdb2601b1068b48a2547ec7814a08&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D2908107939%2C2655158131%26fm%3D214%26gp%3D0.jpg'
      ],
      commandList: [
        {
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547990148883&di=bd8bdb2601b1068b48a2547ec7814a08&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D2908107939%2C2655158131%26fm%3D214%26gp%3D0.jpg',
          title: '台球规则',
          note: '这是关于台球的规则的描述'
        },
        {
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547990148883&di=bd8bdb2601b1068b48a2547ec7814a08&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D2908107939%2C2655158131%26fm%3D214%26gp%3D0.jpg',
          title: '台球规则',
          note: '这是关于台球的规则的描述'
        },
        {
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547990148883&di=bd8bdb2601b1068b48a2547ec7814a08&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D2908107939%2C2655158131%26fm%3D214%26gp%3D0.jpg',
          title: '台球规则',
          note: '这是关于台球的规则的描述'
        },
        {
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547990148883&di=bd8bdb2601b1068b48a2547ec7814a08&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D2908107939%2C2655158131%26fm%3D214%26gp%3D0.jpg',
          title: '台球规则',
          note: '这是关于台球的规则的描述'
        }
      ]
    }
  }
  

  render () {
    return (
      <View className='index'>
        <Swiper
          indicatorColor='#fff'
          indicatorActiveColor='#007acc'
          circular
          indicatorDots
          autoplay
          className='banner-box'
        >
          {
            this.state.imgList.map((item)=>{
              return (
                <SwiperItem taroKey={item}>
                  <Image className='at-article__img' src={item}/>
                </SwiperItem>
              )
            })
          }
        </Swiper>
        <View className='at-article__h2'>推荐规则</View>
        <AtList>
        {
          this.state.commandList.map((value, key) => {
            return (
              <AtListItem
                key={key}
                title={value.title}
                note={value.note}
                thumb={value.img}
              />
            )
          })
        }
        </AtList>
        <TabBar current={this.state.current}/>
      </View>
    )
  }
}

