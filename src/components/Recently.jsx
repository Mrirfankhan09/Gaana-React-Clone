import React, { useEffect, useRef, useState } from 'react';
import './recently.css';
import Head from './Head';

const RecentlyPlayed = ({ Songs }) => {
  const [recentlyArray, setRecentlyArray] = useState(Songs);
  const cardRef = useRef(null);
  const wrapUpRef = useRef([]);
  // useEffect(()=>{
  //   console.dir(cardRef.current)

  // },[])


  useEffect(() => {
    wrapUpRef.current.forEach((element, index) => {
      element.style.left = `${1122 * index}px`;
    });
    // cardRef.current.scrollLeft=0.5;
 
    // console.dir(cardRef.current.style)
  }, []);
  

  function handleNext() {
    // console.dir(cardRef);
    // console.log(cardRef.current.style)
    if (cardRef.current) {
      cardRef.current.scrollLeft += 1122;


      console.log("Next button clicked! Current scrollLeft:", cardRef.current.scrollLeft);
    }
  }

  function handlePrev() {
    // console.log(cardRef.current)
    if (cardRef.current) {
      cardRef.current.scrollLeft -= 1122;
 
      console.log("Prev button clicked! Current scrollLeft:", cardRef.current.scrollLeft);
    }
  }

  useEffect(() => {
    generateRecentlyArray();
  }, []);


  const generateRecentlyArray = () => {
    let tempRecentlyArray = [];
    for (let i = 0; i < 12; i++) {
      tempRecentlyArray.push(
        Songs[Math.floor(Math.random() * Songs.length)][
          Math.floor(Math.random() * Songs[i].length)
        ]
      );
    }
    setRecentlyArray(tempRecentlyArray);
  };

  return (
    <div className="Recently">
      <Head category='Recently Played'/>
      <div className="recently-card">
        <ul ref={cardRef} className="card" >
          <div className="wrap-up" ref={(el) => (wrapUpRef.current[0] = el)} >
            {recentlyArray.map((song, index) => (
              <li className="list-card" key={index}>
                <div className="song">
                  <img src={song.cover?song.cover:null} alt="" />
                  <div className="text">
                    <h4 className="title">{song.SongName}</h4>
                    <small className="album">{song.SongName}</small>
                  </div>
                </div>
                <box-icon name="dots-vertical-rounded"></box-icon>
              </li>
            ))}
          </div>
        </ul>
        <div className="buttonstonext">
          <button className="nextbt" id="nextbt" onClick={handlePrev}>
            <box-icon name="chevron-left" type="solid"></box-icon>
          </button>
          <button className="prevbt" id="prevbt" onClick={handleNext}>
            <box-icon type="solid" name="chevron-right"></box-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentlyPlayed;
