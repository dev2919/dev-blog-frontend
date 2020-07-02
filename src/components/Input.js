import React from 'react';
import { Input, Card,Button } from 'antd';
import { withRouter } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import blogs from './Blogs'
const { TextArea } = Input;




class InputBlog extends React.Component {
  state = {
    value: '',
    title:'',
    article:'',
    loading: false,
    redirect:false
  };

  onChangeTitle = ({ target: { value } }) => {
    this.setState({ title:value });
    console.log(value);

  };
  onChangeArticle = ({ target: { value } }) => {
    this.setState({article:value});
    console.log(value);
    
  };

  onSubmit = async (event) => {
    const {title,article} = this.state
    event.preventDefault();
    this.setState({loading:true,redirect:true })
    const response = await axios.post('http://localhost:3012/blog',{
      title,
      article
    })
   setTimeout(() => {
    this.setState({loading:false});
    this.props.history.push("/")
  }, 1000);

    
  }

  render() {
    const { value ,loading} = this.state;


    return (
      
      <>
        <Card title="Create Your Blog " bordered={false} style={{ width: 500 }}>
        <TextArea onChange={this.onChangeTitle} placeholder="Autosize height based on content lines" autoSize />
        <div style={{ margin: '24px 0' }} />
        <TextArea
          onChange={this.onChangeArticle} 
          placeholder="Autosize height with minimum and maximum number of lines"
          autoSize={{ minRows: 2, maxRows: 6 }}
        />
        <div style={{ margin: '24px 0' }} />
        <Button loading={loading} onClick={this.onSubmit} type="primary" block>
        Submit
        </Button>
        </Card>
      </>
    );
  }
}

export default withRouter(InputBlog);
