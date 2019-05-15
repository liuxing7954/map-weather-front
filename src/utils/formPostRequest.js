import request from '../utils/request';

export default function formPostRequest(url, param) {

  let formdata = '';
  for (const key of Object.keys(param)) {
    formdata+=`${key}=`;
    formdata+=`${param[key]}&`;
  }
  return request(url,
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formdata
    }
  );
}
