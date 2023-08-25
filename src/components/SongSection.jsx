import React, { Component, useEffect, useRef, useState } from "react";
import Head from "./Head";
import './songsection.css'

export default function SongSection({ arrsongs, row, index ,collectingData }) {
  let cardref = useRef(null);
  function next(){
    cardref.current.scrollLeft+=1120;
  }
  function prev(){
    cardref.current.scrollLeft-=1120;
  }
  function getdata(e){

   collectingData(e.target.parentNode.parentNode)
   
  }
  return (
    <>
      <section className="songsSec" id="songSec">
        <Head category={arrsongs[0].category} />
        <div className="Trending musiclist">
          <ul className={`row ${row}`} ref={cardref}>
            {arrsongs.map((element, index) => {
              return (
                <li className="music-item" onClick={getdata}>
                  <a>
                    <img src={element.cover} />
                  </a>
                  <p>{element.SongName}</p>
                </li>
              );
            })}
          </ul>
          <div className="sectionbuttons">
            <button className="btprev" onClick={prev}>
              <box-icon name="chevron-left" type="solid"></box-icon>
            </button>
            <button className="btnext" onClick={next}>
              <box-icon type="solid" name="chevron-right"></box-icon>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
