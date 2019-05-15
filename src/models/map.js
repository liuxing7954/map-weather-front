import {queryWeatherInfo} from "../services/example"

export default {

  namespace: 'map',

  state: {
    dataList:[],
  },

  subscriptions: {
    setup({dispatch, history}) {  // eslint-disable-line
    },
  },

  effects: {
    * fetchWeather({payload, callback}, {call, put}) {
      let response = yield call(queryWeatherInfo,payload);
      yield put({
        type: 'save',
        payload: response
      });
      if (callback)
        callback(response);
    },
  },

  reducers: {
    save(state, action) {
      state.dataList = action.payload.data;
      return {...state};
    },
  },

};
