import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './Components/NavBar/navBar';
import MusicTable from './Components/MusicTable/musicTable';
import SearchBar from './Components/SearchBar/searchBar';
import AddSongs from './Components/AddSongs/AddSongs';

function App() {

  const [songs, setSongs] = useState([]);
  const [search, setSearch] =useState([]);
  const [addSongs, setAddSongs] =useState([]);

  useEffect( () => {
    getAllSongs()
  }, []);


async function getAllSongs(){
  const response = await axios.get('http://127.0.0.1:8000/api/music/');
  console.log(response.data);
  setSongs(response.data)
}

function addSongToTable(addSong) {
  let tempSong = [addSong, ...addSongs];
  setAddSongs(tempSong);
}




  return (
    <div >
      <NavBar/>
      <AddSongs parentAddSong ={addSongToTable}/>
      <SearchBar setSearch={setSearch}/>
      <MusicTable parentSongs={songs}/>
      <button onClick={() => getAllSongs()}>Get All Songs</button>
    </div>
  );
}

export default App;
