import formPostRequest from '../utils/formPostRequest';

export function login(param) {
  return formPostRequest('/api/teacher/login', param);
}

export function queryQuestion(param) {
  return formPostRequest('/api/question/listQuestion', param);
}

export function addQuestion(param) {
  return formPostRequest('/api/question/question', param);
}

export function delQuestion(param) {
  return formPostRequest('/api/question/delQuestion', param);
}

export function queryAnswer(param) {
  return formPostRequest('/api/question/listAnswer', param);
}

export function queryWeatherInfo(param) {
  return formPostRequest('/api/getWeatherInfo', param);
}
