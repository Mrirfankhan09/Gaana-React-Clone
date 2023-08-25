import React, { useState , useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
    const [isDarkMode,setDarkMode]=useState(false);
    const [isMenuVisible,setVisible]=useState(false);
    function toggleDarkMode(){
        setDarkMode((preValue)=>!preValue);
    }
    function togglevisibleMode(){
      console.log("hello");
        setVisible((preValue)=>!preValue);
    }
    useEffect(() => {
      // Update the class of the body tag when the darkMode state changes
      document.body.className = isDarkMode ? "dark-theme" : "";
    }, [isDarkMode]);


  

  return (
    <>
      <nav className="navBar">
        <div className="left">
          <div className="lt">
            <div className="Bar">
              <i className="fa-solid fa-bars"></i>
            </div>
            <div className="logo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Gaana_%28music_streaming_service%29_logo.png/1200px-Gaana_%28music_streaming_service%29_logo.png?20220222152415"
                alt=""
              />
            </div>
            <div></div>
          </div>
          <div className="left rt">
            <div className="search-box">
              <div className="icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <input
                type="text"
                placeholder="Search Artists , Songs , Albums"
                id="inputBox"
                className="input" 
              />
            </div>
            
          </div>
        </div>
        <div className="right">
          <button className="btn1 btn">
            {" "}
            <span className="badge">New</span>Get Add Free
          </button>
          <button className="btn2 btn">Get Gaana Plus</button>
          <div className="dropdown">
             <button className="lng" id="lng" onClick={togglevisibleMode}>
              <svg width="32" height="24" viewBox="0 0 20 16">
                <g fill="none" fill-rule="evenodd">
                  <g transform="translate(-1108 -117) translate(1089 58) translate(19 15) translate(0 43) translate(.5 1.5)">
                    <rect
                      className="svg_box"
                      width="11"
                      height="11"
                      x="7.591"
                      y="3.5"
                      fill="#FFF"
                      stroke="#8E8E93"
                      rx="5.5"
                    ></rect>
                    <rect
                      className="svg_box"
                      width="11"
                      height="11"
                      x=".5"
                      y=".5"
                      fill="#FFF"
                      stroke="#8E8E93"
                      rx="5.5"
                    ></rect>
                    <text fill="#8E8E93" font-size="7" font-weight="500">
                      <tspan x="3.5" y="9">
                        A
                      </tspan>
                    </text>
                    <text fill="#8E8E93" font-size="5" font-weight="500">
                      <tspan x="12" y="11.5">
                        अ
                      </tspan>
                    </text>
                  </g>
                </g>
              </svg>
            </button> 

{
         isMenuVisible &&  ( <div className="lang" id="Menu">
              <h3>Music Languages</h3>
              <ul className="lang-items">
              <li className="langs">
                  Hindi
                  <div>
                    <box-icon name="check"></box-icon>
                  </div>
                </li>
              <li className="langs">
                  Hindi
                  <div>
                    <box-icon name="check"></box-icon>
                  </div>
                </li>
              <li className="langs">
                  Hindi
                  <div>
                    <box-icon name="check"></box-icon>
                  </div>
                </li>
              <li className="langs">
                  Hindi
                  <div>
                    <box-icon name="check"></box-icon>
                  </div>
                </li>
              <li className="langs">
                  Hindi
                  <div>
                    <box-icon name="check"></box-icon>
                  </div>
                </li>
              <li className="langs">
                  Hindi
                  <div>
                    <box-icon name="check"></box-icon>
                  </div>
                </li>
              <li className="langs">
                  Hindi
                  <div>
                    <box-icon name="check"></box-icon>
                  </div>
                </li>
              
                  
             
          
              </ul>
            </div>
)}
          </div>

          <i
          className={`fa-regular ${isDarkMode ? "fa-sun" : "fa-moon"} fa-sm`}
          id="darkMode"
          onClick={toggleDarkMode}
        ></i>
          <div className="loginSignup">
            <a href="">Log In</a>
            <span>/</span>
            <a href="">SignUp</a>
          </div>
        </div>
      </nav>
    </>
  );
}
