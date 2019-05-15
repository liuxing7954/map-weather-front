import {login} from "../services/example"

export default {

  namespace: 'login',

  state: {
    teacherData: {},
    isLogin: false,
  },

  subscriptions: {
    setup({dispatch, history}) {  // eslint-disable-line
    },
  },

  effects: {
    * login({payload, callback}, {call, put}) {  // eslint-disable-line
      let response = {};
      if (payload.username === 'admin' && payload.password === 'bd**123') {
        response = {
          "error_code": 0,
          "msg": "成功",
          "data": {"id": 1, "username": "admin", "pass": "bd**123", "nickName": "帅哥季"}
        };
      } else {
        response = {"error_code": -100, "msg": "登录错误", "data": null};
      }
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
      state.teacherData = action.payload.data;
      if (action.payload.error_code === 0)
        state.isLogin = true;
      return {...state};
    },
  },

};
