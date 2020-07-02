import React,{useEffect,useState} from 'react';
import axios from 'axios';


const Likes = (props) => {
  console.log(props.refresh);

  useEffect(async () => {
    const response = await axios.get('http://localhost:3012/blogs');
  }, [])

  const [likes,setLikes] = useState(props.items);

  const handleLikes = () =>{
    let key = props.key
    // likes.find(o =>{ if(o.id === key){
    //   likes.hearts=likes.hearts+1;
    // }});

    console.log(likes);
    props.refresh(likes)
  }
  
  
  return (
    <p onClick={handleLikes}>10</p>
  )
}

export default Likes
