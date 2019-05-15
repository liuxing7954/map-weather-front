const qs = require('qs');
const mockjs = require('mockjs');  //导入mock.js的模块

module.exports = {
  'POST /api/teacher/login': (req, res) => {
    console.log(req);
    res.status(200).send({
      timestamp: 1513932555104,
      status: 500,
      error: 'error',
      message: 'error',
      path: '/base/category/list',
    });
  },

  'POST /api/getWeatherInfo': (req, res) => {
    console.log(req);
    res.status(200).send({
      error_code: 0,
      msg: '成功',
      data: [
        {
          id: 3,
          name: '营山',
          pinyin: 'yingshanxian',
          date: 20180101,
          maxt: 28,
          mint: 12,
          weatherinfo: '多云转晴',
          windforce: 2,
          winddirection: '东北风',
          waterforce: 0,
        },
        {
          id: 4,
          name: '蓬安',
          pinyin: 'pengan',
          date: 20180101,
          maxt: 17,
          mint: 13,
          weatherinfo: '小雨',
          windforce: 1,
          winddirection: '西南风',
          waterforce: 125,
        },
      ],
    });
  },
}
