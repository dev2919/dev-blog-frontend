import React from 'react';
import { Layout, Menu } from 'antd';
import "./App.css"
import 'antd/dist/antd.css';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UsergroupAddOutlined,
  FileAddOutlined
} from '@ant-design/icons';
import InputBlog from './Input';
import Blogs from './Blogs'
import Blog from './Blog'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

const { Header, Sider, Content } = Layout;

// function App() {
//   return (
//     <div className="App">
//       <InputBlog></InputBlog>
//     </div>
//   );
// }

class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Router>
      <Layout style={{height: "100vh"}}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UsergroupAddOutlined />}>
                <Link to="/">
                  Blogs
                </Link>  
              </Menu.Item>

            <Menu.Item key="2" icon={<FileAddOutlined />}>
          <Link to="/create">
              Create Blog
          </Link>  
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              Your Blogs
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
        {/* <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1" icon={<UsergroupAddOutlined />}>
                <Link to="/">
                  Blogs
                </Link>  
              </Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header> */}
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              overflow:"scroll",
            }}
          >
           

           <Switch>
          <Route exact path="/">
          <Blogs/>
          </Route>
          <Route path="/create">
          {/* <Login /> */}
          <InputBlog/>
          </Route>
          <Route path="/blog/:id">
          <Blog />
          </Route>
          </Switch>

          </Content>
        </Layout>
      </Layout>
      </Router>
    );
  }
}

export default App;
