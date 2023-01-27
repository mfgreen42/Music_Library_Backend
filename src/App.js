import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar/navBar';
import MusicTable from './Components/MusicTable/musicTable';
import SearchBar from './Components/SearchBar/searchBar';
import AddSongs from './Components/AddSongs/AddSongs';
import axios from 'axios';

function App() {

  const [songs, setSongs] = useState([]);
  // debugger
  console.log('setSongs array:', setSongs.data)

  useEffect( () => {
    getAllSongs()
  }, []);


async function getAllSongs(){
  const response = await axios.get('http://127.0.0.1:8000/api/music/');
  console.log('song list', response.data);
  // debugger
  setSongs(response.data)
  console.log('setSongs from async:',setSongs)

}




  return (
    <div >
      <NavBar/>
      <AddSongs parentAllSongs = {getAllSongs}/>
      <SearchBar  songs = {songs} setSongs = {setSongs}/>
      <MusicTable songs = {songs}/>
    </div>
  );
}

export default App;
