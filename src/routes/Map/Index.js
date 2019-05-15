import React, {Component} from 'react';
import sichuan from '../../assets/四川省';
import echarts from "echarts";
import $ from 'jquery';
import {Col, DatePicker, message, Row, Select, Spin} from 'antd';
import {connect} from "dva";
import moment from "moment";
import CityNames from "./CityNames";

const Option = Select.Option;
const dateFormatter = 'YYYY-MM-DD';

const curGeoJson = {};
const cityMap = {
  '四川省': sichuan
};
const geoCoordMap = {
  "成都": ["104.06", "30.67"],
  "金堂": ["104.32", "30.88"],
  "双流": ["104.94", "30.57"],
  "蒲江": ["103.29", "30.2"],
  "郫县": ["103.86", "30.8"],
  "新都": ["104.13", "30.82"],
  "来易": ["102.15", "26.9"],
  "盐边": ["101.56", "26.9"],
  "温江": ["103.81", "30.97"],
  "灌县": ["103.61", "31.04"],
  "彭县": ["103.94", "30.99"],
  "什邡": ["104.16", "31.13"],
  "广汉": ["104.25", "30.99"],
  "新津": ["103.78", "30.42"],
  "邛崃": ["103.47", "30.42"],
  "大邑": ["103.53", "30.58"],
  "崇庆": ["103.69", "30.63"],
  "绵阳": ["104.73", "31.48"],
  "江油": ["104.7", "31.8"],
  "青川": ["105.21", "32.59"],
  "平武": ["104.52", "32.42"],
  "光元": ["105.86", "32.44"],
  "旺苍": ["106.33", "32.25"],
  "剑阁": ["105.45", "32.03"],
  "梓潼": ["105.16", "31.64"],
  "三台": ["105.06", "31.1"],
  "盐亭": ["105.35", "31.23"],
  "射洪": ["105.31", "30.9"],
  "遂宁": ["105.58", "30.52"],
  "蓬溪": ["105.74", "30.78"],
  "中江": ["104.68", "31.06"],
  "德阳": ["104.37", "31.13"],
  "绵竹": ["104.19", "31.32"],
  "安县": ["104.41", "31.64"],
  "北川": ["104.44", "31.89"],
  "内江": ["105.04", "29.59"],
  "乐至": ["105.02", "30.3"],
  "安岳": ["105.3", "30.12"],
  "威远": ["104.7", "29.57"],
  "资中": ["104.85", "29.81"],
  "资阳": ["104.6", "30.19"],
  "简阳": ["104.53", "30.38"],
  "隆昌": ["105.25", "29.64"],
  "宜宾": ["104.56", "29.77"],
  "富顺": ["104.97", "29.24"],
  "南溪": ["104.96", "28.87"],
  "江安": ["105.06", "28.71"],
  "纳溪": ["105.38", "28.77"],
  "泸县": ["105.46", "28.96"],
  "合江": ["105.78", "28.79"],
  "泸州": ["105.39", "28.91"],
  "古蔺": ["105.79", "28.03"],
  "叙水": ["105.44", "28.19"],
  "长宁": ["104.91", "28.6"],
  "兴文": ["105.06", "28.36"],
  "琪县": ["104.81", "28.38"],
  "高县": ["104.52", "28.4"],
  "筠连": ["104.53", "28.16"],
  "屏由": ["104.15", "28.68"],
  "乐由": ["103.73", "29.59"],
  "夹江": ["103.59", "29.75"],
  "洪雅": ["103.38", "29.95"],
  "丹棱": ["103.53", "30.04"],
  "青神": ["103.81", "29.86"],
  "眉由": ["103.81", "30.05"],
  "彭由": ["103.83", "30.22"],
  "井研": ["104.06", "29.67"],
  "仁寿": ["104.09", "30"],
  "犍为": ["103.93", "29.21"],
  "沐川": ["103.98", "28.96"],
  "娥眉": ["103.5", "29.62"],
  "马边": ["103.53", "28.87"],
  "峨边": ["103.25", "29.23"],
  "金口": ["103.13", "29.24"],
  "涪陵": ["107.36", "29.7"],
  "垫江": ["107.34", "30.36"],
  "丰都": ["107.7", "29.89"],
  "石柱": ["108.13", "29.98"],
  "秀山": ["108.97", "28.47"],
  "西阳": ["108.75", "28.85"],
  "黔江": ["108.81", "29.53"],
  "彭水": ["108.19", "29.29"],
  "武隆": ["108.72", "29.29"],
  "南川": ["107.13", "29.15"],
  "万县": ["108.35", "30.83"],
  "开县": ["108.39", "31.23"],
  "城口": ["108.67", "31.98"],
  "巫溪": ["109.6", "31.42"],
  "巫山": ["109.86", "31.1"],
  "奉节": ["109.52", "31.06"],
  "云阳": ["108.89", "30.99"],
  "忠县": ["108.03", "30.33"],
  "梁平": ["107.78", "30.66"],
  "南允": ["106.06", "30.8"],
  "苍溪": ["105.96", "31.75"],
  "阆中": ["105.97", "31.75"],
  "仪陇": ["106.38", "31.52"],
  "南部": ["106.03", "31.34"],
  "西允": ["105.84", "31.01"],
  "营山": ["106.57", "31.07"],
  "蓬安": ["106.44", "31.04"],
  "广安": ["106.61", "30.48"],
  "岳池": ["106.43", "30.55"],
  "武胜": ["106.3", "30.38"],
  "华云": ["106.74", "30.41"],
  "达县": ["107.49", "31.23"],
  "万源": ["108.06", "32.07"],
  "宜汉": ["107.71", "31.39"],
  "开江": ["107.87", "31.1"],
  "邻水": ["106.91", "30.36"],
  "大竹": ["107.21", "30.75"],
  "渠县": ["106.94", "30.85"],
  "南江": ["106.83", "32.36"],
  "巴中": ["106.73", "31.86"],
  "平昌": ["107.11", "31.59"],
  "通江": ["108.24", "31.95"],
  "百沙": ["108.18", "32"],
  "雅安": ["102.97", "29.97"],
  "芦山": ["102.91", "30.17"],
  "名山": ["103.06", "30.09"],
  "荣经": ["102.81", "29.79"],
  "汉源": ["102.66", "29.4"],
  "石棉": ["102.38", "29.21"],
  "天全": ["102.78", "30.09"],
  "宝兴": ["102.84", "30.36"],
  "马尔康": ["102.22", "31.92"],
  "红原": ["102.55", "31.79"],
  "阿坝": ["101.72", "31.93"],
  "若尔盖": ["102.94", "33.62"],
  "黑水": ["102.95", "32.06"],
  "松潘": ["103.61", "32.64"],
  "南坪": ["104.19", "33.23"],
  "汶川": ["103.61", "31.46"],
  "理县": ["103.16", "31.42"],
  "小金": ["102.34", "30.97"],
  "金川": ["102.03", "31.48"],
  "壤塘": ["100.97", "32.3"],
  "茂汶": ["103.89", "31.67"],
  "康定": ["101.95", "30.04"],
  "炉霍": ["100.65", "31.38"],
  "甘孜": ["99.96", "31.64"],
  "新龙": ["100.28", "30.96"],
  "白玉": ["98.83", "32.23"],
  "德格": ["98.57", "31.81"],
  "石渠": ["98.06", "33.01"],
  "色达": ["100.35", "32.3"],
  "泸定": ["102.25", "29.92"],
  "丹巴": ["101.87", "30.85"],
  "九龙": ["101.53", "29.01"],
  "雅江": ["101", "30.03"],
  "道孚": ["101.14", "30.99"],
  "理塘": ["100.28", "30.03"],
  "乡城": ["99.78", "28.93"],
  "稻城": ["100.31", "29.04"],
  "巴塘": ["99", "30"],
  "得荣": ["99.25", "28.71"],
  "西昌": ["102.29", "27.92"],
  "昭觉": ["102.83", "28.03"],
  "甘洛": ["102.74", "28.96"],
  "雷波": ["103.62", "28.21"],
  "宁南": ["102.76", "27.07"],
  "会东": ["102.55", "26.74"],
  "会理": ["102.21", "26.67"],
  "德昌": ["102.15", "27.4"],
  "美姑": ["103.14", "28.33"],
  "金阳": ["103.22", "27.73"],
  "布拖": ["102.8", "27.7"],
  "普格": ["102.52", "27.38"],
  "喜德": ["102.42", "28.33"],
  "越西": ["102.49", "28.66"],
  "盐源": ["101.51", "27.42"],
  "冕宁": ["102.15", "28.58"],
  "木里": ["101.25", "27.9"]
};
const levelColorMap = {
  '1': 'rgba(241, 109, 115, .8)',
  '2': 'rgba(255, 235, 59, .7)',
  '3': 'rgba(147, 235, 248, 1)'
};
const defaultOpt = {
  mapName: 'sichuan', // 地图展示
  goDown: false, // 是否下钻
  bgColor: '#404a59', // 画布背景色
  activeArea: [], // 区域高亮,同echarts配置项
  data: [],
  // 下钻回调(点击的地图名、实例对象option、实例对象)
  callback: function (name, option, instance) {
  }
};

@connect(({map, loading}) => ({
  map,
  fetchWeathering: loading.effects['map/fetchWeather'] || false,
}))
class Index extends Component {
  state = {
    currentCity: '',
    currentDate: moment('2018-01-01', dateFormatter),
    currentMapType: 'temperatureleverl',
  };

  constructor(props) {
    super(props);
    this.init();
  }

  init = () => {
    let that = this;
    echarts.extendsMap = function (id, opt) {
      // 实例
      let chart = this.init(document.getElementById(id));
      if (opt) opt = this.util.extend(defaultOpt, opt);
      // 层级索引
      let name = [opt.mapName];
      let idx = 0;
      let pos = {
        leftPlus: 115,
        leftCur: 150,
        left: 198,
        top: 50
      };
      let line = [
        [0, 0],
        [8, 11],
        [0, 22]
      ];
      // style
      let style = {
        font: '18px "Microsoft YaHei", sans-serif',
        textColor: '#eee',
        lineColor: 'rgba(147, 235, 248, .8)'
      };

      let handleEvents = {
        /**
         * i 实例对象
         * o option
         * n 地图名
         **/
        resetOption: function (i, o, n) {
          let breadcrumb = this.createBreadcrumb(n);
          let j = name.indexOf(n);
          let l = o.graphic.length;
          if (j < 0) {
            o.graphic.push(breadcrumb);
            o.graphic[0].children[0].shape.x2 = 145;
            o.graphic[0].children[1].shape.x2 = 145;
            if (o.graphic.length > 2) {
              let cityData = [];
              let cityJson;
              for (let x = 0; x < opt.data.length; x++) {
                if (n === opt.data[x].city) {
                  $([opt.data[x]]).each(function (index, data) {
                    cityJson = {
                      city: data.city,
                      name: data.name,
                      value: data.value,
                      crew: data.crew,
                      company: data.company,
                      position: data.position,
                      region: data.region
                    };
                    cityData.push(cityJson)
                  })
                }
              }

              if (cityData != null) {
                o.series[0].data = handleEvents.initSeriesData(cityData);
              } else {
                o.series[0].data = [];
              }


            }
            name.push(n);
            idx++;
          } else {
            o.graphic.splice(j + 2, l);
            if (o.graphic.length <= 2) {
              o.graphic[0].children[0].shape.x2 = 60;
              o.graphic[0].children[1].shape.x2 = 60;
              o.series[0].data = handleEvents.initSeriesData(opt.data);
            }
            ;
            name.splice(j + 1, l);
            idx = j;
            pos.leftCur -= pos.leftPlus * (l - j - 1);
          }
          ;

          o.geo.map = n;
          o.geo.zoom = 0.4;
          i.clear();
          i.setOption(o);
          this.zoomAnimation();
          opt.callback(n, o, i);
        },

        /**
         * name 地图名
         **/
        createBreadcrumb: function (name) {
          let cityToPinyin = {
            '四川省': 'sichuan'
          };
          let breadcrumb = {
            type: 'group',
            id: name,
            left: pos.leftCur + pos.leftPlus,
            top: pos.top + 3,
            children: [{
              type: 'polyline',
              left: -90,
              top: -5,
              shape: {
                points: line
              },
              style: {
                stroke: '#fff',
                key: name
                // lineWidth: 2,
              },
              onclick: function () {
                let name = this.style.key;
                handleEvents.resetOption(chart, option, name);
              }
            }, {
              type: 'text',
              left: -68,
              top: 'middle',
              style: {
                text: name,
                textAlign: 'center',
                fill: style.textColor,
                font: style.font
              },
              onclick: function () {
                let name = this.style.text;
                handleEvents.resetOption(chart, option, name);
              }
            }, {
              type: 'text',
              left: -68,
              top: 10,
              style: {

                name: name,
                text: cityToPinyin[name] ? cityToPinyin[name].toUpperCase() : '',
                textAlign: 'center',
                fill: style.textColor,
                font: '12px "Microsoft YaHei", sans-serif',
              },
              onclick: function () {
                // console.log(this.style);
                let name = this.style.name;
                handleEvents.resetOption(chart, option, name);
              }
            }]
          }

          pos.leftCur += pos.leftPlus;

          return breadcrumb;
        },

        // 设置effectscatter
        initSeriesData: function (data) {
          let temp = [];
          for (let i = 0; i < data.length; i++) {
            let geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
              temp.push(geoCoord.concat(data[i].value));
            }
          }
          ;
          return temp;
        },
        zoomAnimation: function () {
          let count = null;
          let zoom = function (per) {
            if (!count) count = per;
            count = count + per;
            // console.log(per,count);
            chart.setOption({
              geo: {
                zoom: count
              }
            });
            if (count < 1) window.requestAnimationFrame(function () {
              zoom(0.2);
            });
          };
          window.requestAnimationFrame(function () {
            zoom(0.2);
          });
        }
      };

      let option = {
        backgroundColor: opt.bgColor,
        tooltip: {
          show: true,
          trigger:'item',
          formatter:function(params, ticket, callback){
            console.log(params);
            // return '简称：'+params.data.name+'<br/>'+'机组：'+params.data.crew+'万千瓦'+'<br/>'+'公司名称：'+params.data.company+'<br/>'+'所属大区：'+params.data.region+'<br/>'+'所在位置：'+params.data.position
            let data =params.data;
            return `<p>名称:${data.name}</p><p>天气:${data.weatherinfo}</p><p>气温:${data.mint}°C到${data.maxt}°C</p><p>风力:${data.windforce}级</p><p>风向:${data.winddirection}</p><p>降雨量:${data.waterforce}ml</p>`;
          }
        },
        visualMap: {
          min: 0,
          max: 40,
          splitNumber: 4,
          inRange: {
            color: ['#d94e5d', '#eac736', '#50a3ba'].reverse()
          },
          textStyle: {
            color: '#fff'
          }
        },
        graphic: [{
          type: 'group',
          left: pos.left,
          top: pos.top - 4,
          children: [{
            type: 'line',
            left: 0,
            top: -20,
            shape: {
              x1: 0,
              y1: 0,
              x2: 60,
              y2: 0
            },
            style: {
              stroke: style.lineColor,
            }
          }, {
            type: 'line',
            left: 0,
            top: 20,
            shape: {
              x1: 0,
              y1: 0,
              x2: 60,
              y2: 0
            },
            style: {
              stroke: style.lineColor,
            }
          }]
        },
          {
            id: name[idx],
            type: 'group',
            left: pos.left + 2,
            top: pos.top,
            children: [{
              type: 'polyline',
              left: 90,
              top: -12,
              shape: {
                points: line
              },
              style: {
                stroke: 'transparent',
                key: name[0]
              },
              onclick: function () {
                let name = this.style.key;
                handleEvents.resetOption(chart, option, name);
              }
            }, {
              type: 'text',
              left: 0,
              top: 'middle',
              style: {
                text: '四川省',
                textAlign: 'center',
                fill: style.textColor,
                font: style.font
              },
              onclick: function () {
                handleEvents.resetOption(chart, option, '四川省');
              }
            }, {
              type: 'text',
              left: 0,
              top: 10,
              style: {
                text: 'sichuan',
                textAlign: 'center',
                fill: style.textColor,
                font: '12px "Microsoft YaHei", sans-serif',
              },
              onclick: function () {
                handleEvents.resetOption(chart, option, '四川省');
              }
            }]
          }],
        geo: {
          map: opt.mapName,
          roam:
            true,
          zoom:
            1,
          label:
            {
              normal: {
                show: true,
                textStyle:
                  {
                    color: '#fff'
                  }
              }
              ,
              emphasis: {
                textStyle: {
                  color: '#fff'
                }
              }
            }
          ,
          itemStyle: {
            normal: {
              areaColor: '#323c48',
              borderColor:
                '#111'
            }
            ,
            emphasis: {
              areaColor: '#2a333d'
            }
          }
          ,
          regions: opt.activeArea.map(function (item) {
            if (typeof item !== 'string') {
              return {
                name: item.name,
                itemStyle: {
                  normal: {
                    areaColor: item.areaColor || '#389BB7'
                  }
                },
                label: {
                  normal: {
                    show: item.showLabel,
                    textStyle: {
                      color: '#fff'
                    }
                  }
                }
              }
            } else {
              return {
                name: item,
                itemStyle: {
                  normal: {
                    borderColor: '#91e6ff',
                    areaColor: '#389BB7'
                  }
                }
              }
            }
          })
        },
        series: [{
          type: 'heatmap',
          coordinateSystem: 'geo',
          data: handleEvents.initSeriesData(opt.data)
        }]
      };

      chart.setOption(option);
      // 添加事件
      chart.on('click', function (params) {
        // console.log('click', params);
        params.name = params.name || "四川省";
        let _self = this;
        try {
          echarts.registerMap(params.name, require(`../../assets/${params.name}`));
          handleEvents.resetOption(_self, option, params.name);
          if (params.name !== '四川省')
            that.setState({
                currentCity: that.getPinyinFormChineseName(params.name)
              },
              that.fetchWeather
            );
        } catch (e) {
          // that.fetchWeather();
        }
      });
      return chart;
    };
  };

  componentDidMount() {
    echarts.registerMap('四川省', sichuan);
    this.myChart = echarts.extendsMap('main', {
      mapName: '四川省', // 地图名
      text: '帅哥季',
      goDown: true, // 是否下钻
      // 下钻回调
      callback: function (name, option, instance) {
        // console.log("title", name, option, instance);
      },
    });
    window.addEventListener('resize', this.onWindowResize)
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize)
  }

  onWindowResize = ()=>{
    console.log('窗口发生变化,重新绘制');
    this.myChart.resize();
  };

  fetchWeather = () => {
    const {currentCity, currentDate, currentMapType} = this.state;
    const {dispatch} = this.props;
    if (currentCity !== '') {
      dispatch({
        type: "map/fetchWeather",
        payload: {
          cityname: currentCity,
          date: currentDate.format(dateFormatter)
        },
        callback: (res) => {
          if (res.error_code === 0) {
            message.success("获取数据成功", 1);
            this.refreshChart();
          } else {
            message.error("网络错误", 1)
          }
        }
      });
    }
  };

  refreshChart = () => {
    const {map} = this.props;
    const {dataList} = map;
    const {currentCity, currentDate, currentMapType} = this.state;
    let seriesData = [];
    let max = 0;
    for (let i = 0; i < dataList.length; i++) {
      let item = dataList[i];
      let obj = geoCoordMap[item.name];
      if (obj instanceof Array) {
        if (currentMapType === 'temperatureleverl') {
          obj = obj.concat(item.maxt);
          max = item.maxt > max ? item.maxt : max;
        } else if (currentMapType === 'windlevel') {
          obj = obj.concat(item.windforce);
          max = item.windforce > max ? item.windforce : max;
        } else if (currentMapType === 'waterlevel') {
          obj = obj.concat(item.waterforce);
          max = item.waterforce > max ? item.waterforce : max;
        }
        seriesData.push({
          name: item.name,
          value: obj,
          maxt: item.maxt,
          mint: item.mint,
          weatherinfo: item.weatherinfo,
          windforce: item.windforce,
          winddirection: item.winddirection,
          waterforce: item.waterforce,
        });
      }
    }
    let visualMap = {
      min: 0,
      max: max,
      splitNumber: max / (max / 4),
      inRange: {
        color: ['#d94e5d', '#eac736', '#50a3ba'].reverse()
      },
      textStyle: {
        color: '#fff'
      }
    };
    console.log('热力图数据', seriesData);
    this.myChart.setOption({
      visualMap: visualMap,
      series: [{
        type: 'heatmap',
        coordinateSystem: 'geo',
        data: seriesData
      },{
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: seriesData
      },]
    });
  };

  getPinyinFormChineseName = (name) => {
    let cityNamePinyin = CityNames[name];
    cityNamePinyin = cityNamePinyin || CityNames[name.substring(0, name.length - 1)];
    return cityNamePinyin;
  };

  changeHeatMap = (value) => {
    this.setState({currentMapType: value}, this.fetchWeather);
  };

  changeDate = (date, dateString) => {
    this.setState({currentDate: moment(date)}, this.fetchWeather);
  };

  render() {
    const {currentDate} = this.state;
    const {fetchWeathering} = this.props;
    return (
      <div style={{height: "100%", width: "100%"}}>
        <Spin spinning={fetchWeathering}>
          <Row type="flex" justify="space-between" style={{backgroundColor: '#404a59',height:"40px"}}>
            <Col>
              <Select defaultValue="temperatureleverl" style={{width: 120}} onChange={this.changeHeatMap}>
                <Option value="temperatureleverl">温度热力图</Option>
                <Option value="windlevel">风力热力图</Option>
                <Option value="waterlevel">降雨量热力图</Option>
              </Select>
            </Col>
            <Col>
              <DatePicker defaultValue={currentDate} onChange={this.changeDate}/>
            </Col>
          </Row>
        </Spin>

        <div id={`main`} style={{height: "calc(100% - 40px)"}}/>
      </div>
    );
  }
}

export default Index;
