import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar/navBar";
import MusicTable from "./Components/MusicTable/musicTable";
import SearchBar from "./Components/SearchBar/searchBar";
import AddSongs from "./Components/AddSongs/AddSongs";
import axios from "axios";
import "./App.css";

function App() {
  const [songs, setSongs] = useState([]);
  // debugger
  console.log("setSongs array:", setSongs.data);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() {
    const response = await axios.get("http://127.0.0.1:8000/api/music/");
    console.log("song list", response.data);
    // debugger
    setSongs(response.data);
    console.log("setSongs from async:", setSongs);
  }

  return (
    <div className="background">
      <div className="container-fluid">
        <NavBar />
        <div className="row">
          <div className="col-md-6">
            <div className="song-holder">
              <AddSongs parentAllSongs={getAllSongs} className = 'card'/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="song-holder">
              <SearchBar songs={songs} setSongs={setSongs} />
              <MusicTable songs={songs} className= 'song-holder' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
