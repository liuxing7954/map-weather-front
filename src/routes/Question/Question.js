import React from 'react';
import {Card, Col, Empty, Icon, message, Modal, Input, Row, Comment, Divider} from 'antd';
import style from './Question.less';
import {connect} from 'dva';

const {TextArea} = Input;
@connect(({login, question, loading}) => ({
  login,
  question,
  submitting: loading.effects['question/login'] || false,
}))
export default class Question extends React.Component {
  state = {
    questionVisi: false,
    answerVisi: false,
    content: '',
  };

  constructor(props) {
    super(props);
    const {login, history} = props;
    if (!login.isLogin) {
      message.error("尚未登陆", 1);
      history.push({
        pathname: `/`, query: {}
      });
    }
  }


  componentDidMount() {
    this.fetchQuestion();
  }

  fetchQuestion = () => {
    const {dispatch, login} = this.props;
    const {teacherData} = login;
    dispatch({
      type: 'question/fetchQuestion',
      payload: {
        teacherId: teacherData.id,
      },
    })
  };

  addQuestion = () => {
    const {dispatch, login} = this.props;
    const {questionVisi, content} = this.state;
    const {teacherData} = login;
    dispatch({
      type: 'question/addQuestion',
      payload: {
        teacherId: teacherData.id,
        title: '',
        content: encodeURIComponent(content),
      },
      callback: (res) => {
        if (res.error_code === 0) {
          this.fetchQuestion();
          message.success("提问成功", 1);
          this.setState({content: '', questionVisi: false});
        } else {
          message.error(res.msg, 1)
        }
      }
    })
  };
  deleteQuestion = (id) => {
    const {dispatch, login} = this.props;
    dispatch({
      type: 'question/delQuestion',
      payload: {
        questionId: id,
      },
      callback: (res) => {
        if (res.error_code === 0) {
          this.fetchQuestion();
          message.success("删除成功", 1);
        } else {
          message.error(res.msg, 1)
        }
      }
    })
  };
  detailQuestionAnswer = (id) => {
    this.setState({answerVisi: true});
    const {dispatch, login} = this.props;
    const {content} = this.state;
    const {teacherData} = login;
    dispatch({
      type: 'question/queryAnswer',
      payload: {
        questionId: id,
      },
      callback: (res) => {
        if (res.error_code === 0) {
          message.success("查询成功", 1);
        } else {
          message.error(res.msg, 1)
        }
      }
    })
  };

  renderQuestion = (list) => {
    let questionArr = [];
    for (let i = 0; i < list.length; i++) {
      let item = list[i];
      questionArr.push(
        <Card
          style={{width: '100%', marginBottom: 10}}
          title={item.title}
          actions={[<span onClick={() => this.deleteQuestion(item.id)}>删除</span>,
            <span onClick={() => this.detailQuestionAnswer(item.id)}>查看回答</span>]}
        >
          <span>{item.content}</span>
        </Card>
      );
    }
    if (questionArr.length === 0) {
      questionArr.push(
        <Empty description="你从来没有提问过..."/>
      );
    }
    return questionArr;
  };

  renderAnswer = (list) => {
    let answerArr = [];
    for (let i = 0; i < list.length; i++) {
      let item = list[i];
      answerArr.push(
        <Card
          style={{width: '100%', marginBottom: 10}}
        >
          <span>{item.student.nickName}:{item.content}</span>
        </Card>
      );
    }
    if (answerArr.length === 0) {
      answerArr.push(
        <Empty description="还没有人回答......"/>
      );
    }
    return answerArr;
  };

  render() {
    const {question, login} = this.props;
    const {questionVisi, content, answerVisi} = this.state;
    const {teacherData} = login;
    const {data} = question;
    console.log(question);

    let questionArr = this.renderQuestion(data.questionList);
    let answerArr = this.renderAnswer(data.answerList);
    return (
      <div className={style.container}>
        <div className={style.loginWarp}>
          <Row type="flex" justify="space-between" align="middle">
            <Col span={8}>
              <h2 style={{display: "inline-block"}}>您好，{teacherData.nickName}</h2>
            </Col>
            <Col span={1}>
              <Icon type="plus" style={{color: '#1890ff'}} onClick={() => {
                this.setState({questionVisi: true})
              }}/>
            </Col>
          </Row>
          {questionArr}
        </div>
        <Modal
          title="输入问题"
          visible={questionVisi}
          onOk={this.addQuestion}
          onCancel={() => {
            this.setState({questionVisi: false})
          }}
        >
          <TextArea rows={4} value={content} onChange={(e) => {
            this.setState({content: e.target.value})
          }}/>
        </Modal>

        <Modal
          title="回答列表"
          visible={answerVisi}
          onOk={() => {
            this.setState({answerVisi: false})
          }}
          onCancel={() => {
            this.setState({answerVisi: false})
          }}
        >
          {answerArr}
        </Modal>
      </div>

    );
  }
}
