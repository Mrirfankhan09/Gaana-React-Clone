import React from "react";
import './secNavbar.css'

export default function SecNavbar({content,selected,index,onClickLink}) {


 function clickHandler(e){
  // e.stopPropogation();
  e.preventDefault();
  onClickLink(index);

 }
  return (
    <>

    
          <a href="" className={`link ${selected?'selected':''}`} id={`${selected?"selected":""}`} onClick={clickHandler}>
            <small>{content}</small>
          </a>
  
    </>
  );
}
