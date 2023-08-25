import React, { useEffect, useRef, useState, useCallback } from "react";
import "./bottom.css";
import { useContext } from "react";
import Songsd from "./context/Songs";

export default function BottomPlayer({
  audio,
  cover,
  songname,
  currentindexsong,
  rowindex,
}) {
  // console.log(rowindex,currentindexsong);
  let progressBar = useRef(null);
  let [value, setvalue] = useState(0);
  let [totaltime, settotaltime] = useState("00:00");
  let [runningtime, setrunningtime] = useState("00:00");
  const [max, setmax] = useState(0);

  function format(time) {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);

    let minutes = min.toString().padStart(2, "0");
    let seconds = sec.toString().padStart(2, "0");

    return `${minutes}:${seconds}`;
  }
  function seconds(time) {
    let min = Math.trunc(time / 60);

    let sec = Math.round((time / 60 - min) * 60);
    return [min, sec];
  }

  const [currentindexsongcpy, setcurrentindexsong] = useState(currentindexsong);
  const [rowindexcpy, setrowindex] = useState(rowindex);
  // console.log(rowindexcpy, currentindexsongcpy);
  let PlayPauseIcon = useRef(null);
  const Songs = useContext(Songsd);
  // console.log(Songs);

  const [AudioMp3, setAudioMp3] = useState(new Audio());
  const [Cover, setCover] = useState(cover);
  const [SongName, setSongName] = useState(songname);
  function changeHandler(event) {
    const newValue = event.target.value;
    setvalue(newValue);
    AudioMp3.currentTime = newValue;
    PlayPauseIcon.current.classList.remove("fa-play");
    PlayPauseIcon.current.classList.add("fa-pause");

    AudioMp3.play();
    console.log(AudioMp3.currentTime);
  }

  useEffect(() => {
    AudioMp3.src = audio;
    setAudioMp3(AudioMp3);
    setCover(cover);
    setSongName(songname);
    PlayPauseIcon.current.classList.add("fa-play");
    PlayPauseIcon.current.classList.remove("fa-pause");
    AudioMp3.onloadedmetadata = () => {
      console.log(AudioMp3.duration);
      setmax(AudioMp3.duration);
      settotaltime(format(AudioMp3.duration)); // Assuming 'format' is a valid function defined elsewhere

      progressBar.max = AudioMp3.duration;
      if (AudioMp3.played) {
        const id = setInterval(() => {
          setvalue(AudioMp3.currentTime);
          setrunningtime(format(AudioMp3.currentTime));
        }, 500);
      }
    };

    AudioMp3.pause();
  }, [audio]);

  function NextSong() {
    // console.log("hello");
    setcurrentindexsong((Prevalue) => Prevalue + 1);
    let obj = Songs[rowindex][currentindexsongcpy];
    // console.log(obj);
    // cover = obj.cover;
    // songname=obj.SongName;
    AudioMp3.src = obj.path;
    setAudioMp3(AudioMp3);
    setCover(obj.cover);
    setSongName(obj.SongName);
    AudioMp3.play();
  }
  function PrevSong() {
    setcurrentindexsong((Prevalue) => Prevalue - 1);
    let obj = Songs[rowindex][currentindexsongcpy];
    // console.log(obj);
    AudioMp3.src = obj.path;
    setAudioMp3(AudioMp3);
    setCover(obj.cover);
    setSongName(obj.SongName);
    AudioMp3.play();
    // console.log(cover);

    // let Details = Songs[rowindex][currentindexsong - 1];
    // currentindexsong = currentindexsong - 1;

    // console.log(Details.SongName);
    // // display(Details.cover, Details.SongName);
    // audio.src = Details.path;
    // audio.play();
  }

  // const playPauseMusic = useCallback(() => {
  //   if (AudioMp3.paused) {
  //     PlayPauseIcon.current.classList.remove("fa-play");
  //     PlayPauseIcon.current.classList.add("fa-pause");
  //     AudioMp3.play().catch((error) => {
  //       console.error("Error playing audio:", error);
  //     });
  //   } else {
  //     PlayPauseIcon.current.classList.add("fa-play");
  //     PlayPauseIcon.current.classList.remove("fa-pause");
  //     AudioMp3.pause();
  //   }
  // }, [AudioMp3]);

  function playPauseMusic() {
    if (AudioMp3.paused) {
      PlayPauseIcon.current.classList.remove("fa-play");
      PlayPauseIcon.current.classList.add("fa-pause");
      AudioMp3.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    } else {
      PlayPauseIcon.current.classList.add("fa-play");
      PlayPauseIcon.current.classList.remove("fa-pause");
      AudioMp3.pause();
    }
  }

  return (
    <>
      <section class="bottom-player">
        <div class="progress">
          <input
            type="range"
            id="progressBar"
            class="progressBr"
            max={max}
            value={value}
            ref={progressBar}
            onChange={changeHandler}
          />
        </div>
        <div class="footerlt">
          <div class="thumbvis">
            <a href="">
              <img src={Cover} alt="" />
            </a>
          </div>
          <div class="txt">
            <strong class="textover">
              <a href="https://a10.gaanacdn.com/gn_img/albums/7rVW1Rbk56/VW1aAnGgWk/size_m.jpg">
                <span class="title">{SongName}</span>
              </a>
            </strong>
            <small class="textovrsmall">
              <a href="https://a10.gaanacdn.com/gn_img/albums/7rVW1Rbk56/VW1aAnGgWk/size_m.jpg">
                <span class="smtitle">{SongName}</span>
              </a>
            </small>
          </div>
        </div>
        <div class="footermid">
          <div class="timeprog">
            <span class="runningtime">{runningtime}</span>/
            <span class="totaltime">{totaltime}</span>
          </div>
          <div class="icon loop">
            <i class="fa-solid fa-repeat"></i>
          </div>
          <div class="backward move" onClick={PrevSong}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAAXNSR0IArs4c6QAAAXBJREFUaEPt1k0rBlEUwPEf5SXJhlAWWMhCouxYyUbZyIayV5KdfAFLyo6VWAiJz+Rt42PoydCkB3duYzxTd9Zn7v3f/zn3nNumhl9bDZkl6Kqylkwn0z8YSOWRyiOVR1U1kEy/G7jBcCbjFRsFE7CN04L/fIbHtrxHjGarPGEsEKAfl1gm/t1TJfQSrjCYHTB27+jTFjHdjSPsfMlGy0JP4x4TTcqn5aDbsYcDdH5T7y0FPYJbzP9yOVsGeg3n6AvoJpVDP+TaXONSzuAEmwGwHyGVQ+e7xzNesFAAuBFaOfRX07O4wGoB8H+HHs9gt3CMngD4yqF/Gi6TWW+eqkv3+ODswiF2/+KFGZui0DG+ktX6QB0mYp5xCNdYrMvbI9+T97Ox3lGHV15e8BzussEUW5rRDT60ppvdw16cYT2gLTYNiT5t7IZl/Jegy7AYskYyHWKpjJhkugyLIWsk0yGWyohJpsuwGLJGMh1iqYyYN4cDOS6O6fj8AAAAAElFTkSuQmCC" />
          </div>
          <div class="play-pause">
            <i
              class="fa-solid fa-play"
              style={{ color: "#ffffff" }}
              ref={PlayPauseIcon}
              onClick={playPauseMusic}
            ></i>
          </div>
          <div class="forward move" onClick={NextSong}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAAXNSR0IArs4c6QAAAWVJREFUaEPt170uREEYh/Hf1i6CXuMOuAdBQSERJS1KhRo3QFRUopZIRBRalYYgGlREJD7iIxNnkyU+Zvds7JxkTnOad848eebN/51TU8GnVkFmGfq/Ti2bzqZ/MZDbI7dHbo//6oFs+sPAJFbw0oT4JfQ11A80sfZTaauRd4ZrDOE8cvNd9DfUtrp3yxemAN2NO0xhLQI8Geg66yYmcPMLfHLQgfUSI9j7ATxJ6MD6hkXM4ekLfLLQdc4jDCK860/y0AH0AbNYLqg7Dn2KnojECCU7GMNGKpEXye0Yj+hNIadjoPcxjPUqmA4jfh4LeEXHe7o+EX8yfVHYPahKemxhHLdVyOl7TBe3v+9OILn2OCyGyUkV7h5hbId78gye/4iSJEx3YRTbMbmXQnqsFiP6KhI4lHXcdBOs7S9t+Zen/SjxX8zQ8a7KVWbT5fzFr86m412Vq8ymy/mLX51Nx7sqV1lJ0+/lQEkuhqqUYQAAAABJRU5ErkJggg==" />
          </div>
          <div class="shuffle">
            <i class="fa-solid fa-shuffle notclicked"></i>
          </div>
        </div>
        <div class="footerrt">
          <div class="volume">
            <input type="range" id="volumeControl" class="volumecntrl" />
            <i class="fa-solid fa-volume-high" id="volumecntrlr"></i>
          </div>
          <div class="AudioRange">Audio:High</div>
          <div class="txt">
            <small class="textovrsmall">
              <a href="https://a10.gaanacdn.com/gn_img/albums/7rVW1Rbk56/VW1aAnGgWk/size_m.jpg">
                <span class="smtitle">UpNext</span>
              </a>
            </small>
            <strong class="textover">
              <a href="https://a10.gaanacdn.com/gn_img/albums/7rVW1Rbk56/VW1aAnGgWk/size_m.jpg">
                <span class="title">{SongName}</span>
              </a>
            </strong>
          </div>
          <div class="arrowup">
            <box-icon name="chevron-up"></box-icon>
          </div>
        </div>
      </section>
    </>
  );
}
