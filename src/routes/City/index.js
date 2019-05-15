import React, {Component} from 'react';
import echarts from 'echarts';
import data from '../../assets/四川省';

class Index extends Component {

  constructor(props) {
    super(props);

    this.state = {
      refreach:false,
    };
  }

  echartsInstance = null;

  renderEchars = (mapData=data) => {
    echarts.registerMap("SC", mapData);

    this.echartsInstance.setOption({
      series: [
        {
          name: '四川',
          type: 'map',
          mapType: "SC", // 自定义扩展图表类型
          selectedMode:"multiple",
          label:{
            show:true,
            position:"inside",
          },
          data:[],
        }
      ]
    },true);
  }

  componentDidMount() {
    let {renderEchars,state,cityMapData} = this;
    let that = this;

    this.echartsInstance = echarts.init(document.getElementById("main"));
    this.echartsInstance.on('click', function (params) {
      console.info(params);
      cityMapData = require(`../../assets/${params.name}`);
      renderEchars(cityMapData);
      that.setState({
        refreach: !state.refreach
      });
    });

    renderEchars();
  }

  render() {
    console.info("hehe");
    return (
      <div id={`main`} style={{height:"100%",width:"100%"}}>

      </div>
    );
  }
}

export default Index;
