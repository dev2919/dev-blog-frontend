import React, {useState,useEffect} from 'react';
import { Skeleton, Switch, Card, Avatar,Row, Col, Badge, Button } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined,MinusOutlined, PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useParams } from 'react-router-dom'


const { Meta } = Card;

const Blog = ({ props }) => {

  let { id } = useParams();
  const [loading,setLoading] = useState(true);
  const [response,setResponse] = useState([]);

  useEffect( async () => {
    const response = await axios.get('http://api.happpy.ga/blogs');
    setResponse(response.data)
    
    console.log(id);

    setTimeout(() => {
      setLoading(false) 
    }, 2000);
  }, [])

  return (
    <>
     <Row gutter={[16, 16]}>
          {response.map(item => {
            if(id==item._id)
            return (
              <Col span={12} >
              <Card style={{ maxWidth: "70vw", marginTop: 16 }} loading={loading}>
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={item.title}
                description={item.article}
              />
            </Card>
            </Col>
            )
          }
          )}
     </Row> 
     </>
  )
}

export default Blog


// export default class App extends React.Component {
//   state = {
//     loading: true,
//     response:[],
//   };

//   componentDidMount = async () =>{
//     const response = await axios.get('http://localhost:3012/blogs');
//     this.setState({
//       response:response.data
//     })
//     console.log(this.props.match.params.id);

//     setTimeout(() => {
//       this.setState({ loading: false }); 
//     }, 2000);
//     console.log(response.data);
     

//   }

//   onChange = checked => {
//     this.setState({ loading: !checked });
//   };



//   render() {
//     const { loading } = this.state;
//     return (
//       <>
//       {/* <Row gutter={[16, 16]}>
//       {this.state.response.map(item => {
//         if(this.state.query.get("id")==item._id)
//         return (
//           <Col span={12} >
//           <Card style={{ maxWidth: "70vw", marginTop: 16 }} loading={loading}>
//           <Meta
//             avatar={
//               <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
//             }
//             title={item.title}
//             description={item.article}
//           />
//         </Card>
//         </Col>
//         )
//       }
//       )}
//       </Row> */}

//       </>
//     );
//   }
// }
