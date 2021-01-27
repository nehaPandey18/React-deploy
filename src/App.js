import React,{useState} from 'react';

import Search from './search/component/search';
import Main from './main/component/main';
import Published from './published/component/published';

import './app.css';

const App =()=>{
  const [isNewPost,setIsNewPost]=useState(false);
  const [isPublished,setIsPublished]=useState(false);
  function handleNewPost(){
   setIsNewPost(true);
   setIsPublished(false);
  };
  function handlePublished(){
  setIsPublished(true);
  setIsNewPost(false);
  };
return(
  <div className="click">
  <Search/>
  <button type="submit" onClick={()=>handleNewPost()}>NEW POST</button>
  <button type="submit" onClick={()=>handlePublished()}>PUBLISHED</button>
{isNewPost ?<Main/>:''}
{isPublished  ?<Published/>:''}

  </div>
)}

export default App;
