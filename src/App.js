import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar/navBar';
import MusicTable from './MusicTable/musicTable';
import 


function App() {

  const [songs, setSongs] = useState([]);


  useEffect( () => {
    getAllSongs()
  }, []);




  return (
    <div >
      <MusicTable/>
      <NavBar/>
      <SearchBar/>
    </div>
  );
}

export default App;
