import React from 'react';
import { Skeleton, Switch, Card, Avatar,Row, Col } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined,HeartTwoTone } from '@ant-design/icons';
import axios from 'axios';
import {
  Link,
} from "react-router-dom";
import Likes from './Likes';


const { Meta } = Card;

let lik = null

export default class App extends React.Component {
  state = {
    loading: true,
    response:[],
    likes:[{}],
    refresh:null
  };

  componentDidMount = async () =>{
    const response = await axios.get('http://api.happpy.ga/blogs');
    
    this.setState({
      response:response.data,
    })
    setTimeout(() => {
      this.setState({ loading: false }); 
    }, 2000);
    console.log(response.data);
    
    this.state.response.map(item => {
      this.state.likes.push({
        id:item._id,
        hearts:item.likes
      })
    })

  }

  onLike = (check) => {
    if(typeof(check) == "object"){
      // this.setState({ likes: check });
    }
    console.log("hello");
    
  };

  handleLike = async (e) => {
    console.log("clicks noice");

    if (e.target.tagName === 'DIV') {
      let key = e.target.className
      let obj = this.state.likes.find(o => o.id === key);
      console.log(obj);
      console.log(`http://api.happpy.ga/like/${obj.id}`);
      const response = await axios.patch(`http://api.happpy.ga/like/${obj.id}`,{
      likes:parseInt(obj.hearts)+1
    })  
    
  }
    
  }

  render() {
    const { loading } = this.state;
    console.log(this.state.likes);
    
    return (
      <>
      <Row gutter={[16, 16]}>
      {this.state.response.map(item => {
        return (
          <Col span={12} >
          <Card style={{ maxWidth: "70vw", marginTop: 16 }} loading={loading}
          actions={[
          <Likes key={item._id} refresh={this.onLike} items={this.state.Likes}/>,
            <EditOutlined key="edit" />,
            <div key={item._id}  className={item._id}  onClick={this.handleLike}><HeartTwoTone key={item._id} twoToneColor="#eb2f96"/></div>,
          ]}
          >
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={item.title}
            description={item.article}
          />
          <Link to={`/blog/${item._id}`} >
              Visit
          </Link> 
        </Card>
        </Col>
        )
      }
      )}
      </Row>

      </>
    );
  }
}
