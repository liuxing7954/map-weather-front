import {queryQuestion,addQuestion,queryAnswer,delQuestion} from "../services/example"

export default {

  namespace: 'question',

  state: {
    data: {
      questionList:[],
      answerList:[]
    }
  },

  subscriptions: {
    setup({dispatch, history}) {  // eslint-disable-line
    },
  },

  effects: {
    * fetchQuestion({payload, callback}, {call, put}) {  // eslint-disable-line
      let response = yield call(queryQuestion, payload);
      yield put({
        type: 'save',
        payload: response
      });
      if (callback)
        callback(response);
    },
    * addQuestion({payload, callback}, {call, put}) {  // eslint-disable-line
      let response = yield call(addQuestion, payload);
      if (callback)
        callback(response);
    },
    * delQuestion({payload, callback}, {call, put}) {  // eslint-disable-line
      let response = yield call(delQuestion, payload);
      if (callback)
        callback(response);
    },
    * queryAnswer({payload, callback}, {call, put}) {  // eslint-disable-line
      let response = yield call(queryAnswer, payload);
      yield put({
        type: 'saveAnswer',
        payload: response
      });
      if (callback)
        callback(response);
    },
  },

  reducers: {
    save(state, action) {
      const {data = []} = action.payload;
      state.data.questionList = data;
      return {...state};
    },
    saveAnswer(state, action) {
      const {data = []} = action.payload;
      state.data.answerList = data;
      return {...state};
    },
  },

};
