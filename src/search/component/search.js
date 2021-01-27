import React from 'react';
import ReactDOM from 'react-dom';
import './search.css';
import { faSearch } from "@fortawesome/free-solid-svg-icons"; 



const Search =()=>{

return(
    <div className="container">
<div className="search">

<label className="search-label" htmlFor="search-input">
         <input type="text" placeholder="search..."/> 
         <i class="fa fa-search search-icon" aria-hidden="true"/>
         <button1>
         <i class="fa fa-window-close cancel-button" aria-hidden="true"/>
         </button1>
         </label>
         </div>
         </div>


)
}
export default Search;
