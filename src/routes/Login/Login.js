import React from 'react';
import {Login} from 'ant-design-pro';
import {Alert, Checkbox, message, Spin} from 'antd';
import style from './Login.less';
import {connect} from 'dva';

const {Tab, UserName, Password, Submit} = Login;

@connect(({login, loading}) => ({
  login,
  submitting: loading.effects['login/login'] || false,
}))
export default class LoginDemo extends React.Component {
  state = {
    notice: '',
    autoLogin: true,
  };
  onSubmit = (err, values) => {
    const {dispatch, history} = this.props;
    console.log('value collected ->', {
      ...values,
      autoLogin: this.state.autoLogin,
    });
    dispatch({
      type: 'login/login',
      payload: {
        username: values.username,
        password: values.password,
      },
      callback: (res) => {
        if (res.error_code === 0) {
          message.success("登录成功", 1);
          history.push({
            pathname: `/map`, query: {}
          });
        } else {
          message.error("账号或密码错误", 1)
        }
      }
    })
  };
  changeAutoLogin = e => {
    this.setState({
      autoLogin: e.target.checked,
    });
  };

  render() {
    const {login, submitting} = this.props;
    return (
      <div className={style.container}>
        <div className={style.loginWarp}>
          <Login
            defaultActiveKey="tab1"
            onTabChange={this.onTabChange}
            onSubmit={this.onSubmit}
          >
            <Tab key="tab1" tab="登陆">
              {this.state.notice && (
                <Alert
                  style={{marginBottom: 24}}
                  message={this.state.notice}
                  type="error"
                  showIcon
                  closable
                />
              )}
              <UserName name="username"/>
              <Password name="password"/>
            </Tab>
            <div>
              <Checkbox checked={this.state.autoLogin} onChange={this.changeAutoLogin}>
                Keep me logged in
              </Checkbox>
            </div>
            <Spin spinning={submitting}>
              <Submit>Login</Submit>
            </Spin>
          </Login>
        </div>
      </div>

    );
  }
}
