import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import TabBar from '../../components/tabbar/tabbar'
import './contribution.scss'
import * as echarts from '../../ec-canvas/echarts'

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  console.log(chart);
  canvas.setChart(chart);

  var option = {
    backgroundColor: "#ffffff",
    color: [
      "#f54545",
      "#ff8547",
      "#ffac38",
      "#91F2DE",
      "#91F2DF",
      "#91F2EE",
      "#91F2EE",
      "#91F2FE"
    ],
    tooltip: {
      trigger: 'item',
      formatter: "{a} {b} : {c}%"
    },
    legend: {
      orient: 'vertical',
      left: 10,
      data: ['渣男命名法', '皓哥', '一号']
    },
    calculable: true,
    series: [
      {
        name: '规则之塔',
        type: 'funnel',
        width: '80%',
        height: '100%',
        left: '10%',
        top: '0',
        sort: 'ascending',
        data: [
          { value: 10, name: '渣男命名法' },
          { value: 20, name: '皓哥' },
          { value: 40, name: '一号' },
          { value: 30, name: '渣渣鹏' },
          { value: 10, name: 'AA坑' },
          { value: 80, name: '刘表' },
          { value: 100, name: '袁大大' }
        ]
      }
    ]
  };

  chart.setOption(option);
  return chart;
}

export default class Contribution extends Component {
  static defaultProps = {
    data: []
  }
  
  config = {
    navigationBarTitleText: '排行榜',
    usingComponents: {
      "ec-canvas": '../../ec-canvas/ec-canvas'
    }
  }

  componentWillMount () { 
    console.log(this);
  }

  componentDidMount () {
    console.log(2);
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor (props) {
    super(props)
    this.state = {
      ec: {
        onInit: initChart
      }
    }
  }

  render () {
    return (
      <View className='contribution'>
        <View className='ec-canvas'>
          <ec-canvas
            id='mychart-dom-area'
            canvas-id='mychart-area'
            ec={this.state.ec}
          ></ec-canvas>
        </View>
        <TabBar current={1}/>
      </View>
    )
  }
}

