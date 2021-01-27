import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import {useSelector,useDispatch} from 'react-redux';
import './main.css';


const Main =()=>{
console.log('Main')
const post =useSelector(state=>state.arr);
const [postText,setPostText]=useState();
const [postTitle,setPostTitle]=useState();

const dispatch=useDispatch();
const changeText = e =>{

  setPostText(e.target.value);
}
const changeTitle = e =>{

  setPostTitle(e.target.value);
}
const publishPost=e=>{
  e.preventDefault();


dispatch({type:"PUBLISH",payload:{title:postTitle,text:postText}});
}


return(
<div className="newPost">
<form>
<h1>{}</h1>
<input type="text" placeholder="Title.." name="title" onChange={changeTitle}/>



<input type="text" placeholder="Text.." name="text" onChange={changeText}/>
<br/>


<button2 type="submit" onClick={publishPost}>PUBLISH</button2>


</form>
</div>  
)
}
export default Main;
