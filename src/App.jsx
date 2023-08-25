import "./App.css";
import BottomPlayer from "./components/BottomPlayer";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Songsd from "./components/context/Songs";
import { useContext, useState } from "react";

// import Songsd from '../context/Songs';





function App() {
  // const context
  const Songsarr = useContext(Songsd);
  const [audio, setaudio] = useState(Songsarr[0][2].path);
  const [songname, setsongname] = useState(Songsarr[0][2].SongName);
  const [cover, setcover] = useState(Songsarr[0][2].cover);
  // let currentindexsong;
  // let rowindex;
  const [rowindex, setrowindex] = useState(0);
  const [currentindexsong, setcurrentindexsong] = useState(2);

  const collectingData = (title) => {
    // console.log();
    title = title.childNodes[1].textContent;
    console.log(title);
    let pathofsong;
    let cover;
    let songName;

    Songsarr.forEach((element, indexofpr) => {
      element.forEach((ele, index) => {
        if (ele.SongName === title) {
          pathofsong = ele.path;
          cover = ele.cover;
          // currentindexsong = index;
          // rowindex = indexofpr;
          setrowindex(indexofpr);
          setcurrentindexsong(index);
        }
      });
    });

    setaudio(pathofsong);
    setcover(cover);
    setsongname(title);
  };

  // let path = Songsarr[0][2].path;

  return (
    <>
      <div className="App">
        <Navbar />
        <Main collectingData={collectingData} />
        <Footer />
        <BottomPlayer
          audio={audio}
          cover={cover}
          songname={songname}
          rowindex={rowindex}
          currentindexsong={currentindexsong}
          setcurrentindexsong={setcurrentindexsong}
          setrowindex={setrowindex}
        />
      </div>
    </>
  );
}

export default App;
