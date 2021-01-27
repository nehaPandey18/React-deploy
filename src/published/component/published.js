import React from 'react';
import ReactDOM from 'react-dom';

import {useSelector} from 'react-redux';
import  './published.css';

const Published =()=>{
const postArr=useSelector(state=>state.arr);
console.log('post', postArr);
const post=postArr.map((element,index)=>{return(<div key={index}  className="style"><h2>TITLE:{element.title}</h2>
<p>TEXT:{element.text}</p></div>)});
return(
<div >
{post}
</div>
)
}
export default Published;
