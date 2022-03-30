import React, {useState, useEffect} from 'react';
import './App.css';
import Player from './component/Player/Player'
const axios = require('axios');
export interface IState {
  songs: songs[],

}

interface songs {
    title: string;
    artist: string;
    img_src: string;
    src: string;
}

function App() {



  const [songs] = useState<IState["songs"]>([
    
    {
      title: "Đế Vương",
      artist: "Đình Dũng",
      img_src: "./images/song-4.jpg",
      src: "./music/de-vuong.mp3"
    },
    {
      title: "Ve-Di-De-Tro-Ve-6-Phan-Manh-Quynh",
      artist: "Phan-Manh-Quynh",
      img_src: "./images/song-1.jpg",
      src: "./music/Ve-Di-De-Tro-Ve-6-Phan-Manh-Quynh.mp3"
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      img_src: "./images/song-2.jpg",
      src: "./music/somebody-new.mp3"
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      img_src: "./images/song-3.jpg",
      src: "./music/on-n-on.mp3"
    },

    {
      title: "Ve-Di-De-Tro-Ve-6-Phan-Manh-Quynh",
      artist: "Phan-Manh-Quynh",
      img_src: "./images/song-1.jpg",
      src: "./music/Ve-Di-De-Tro-Ve-6-Phan-Manh-Quynh.mp3"
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      img_src: "./images/song-2.jpg",
      src: "./music/somebody-new.mp3"
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      img_src: "./images/song-3.jpg",
      src: "./music/on-n-on.mp3"
    },
    {
      title: "Song 4",
      artist: "Artist 4",
      img_src: "./images/song-4.jpg",
      src: "./music/somebody-new.mp3"
    },
    
  ]);
  return (
    <div className="App">
        <Player songs={songs}/>
    </div>
  );
}

export default App;
