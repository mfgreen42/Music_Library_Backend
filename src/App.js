import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar/navBar';
import MusicTable from './Components/MusicTable/musicTable';
import SearchBar from './Components/SearchBar/searchBar';
import AddSongs from './Components/AddSongs/AddSongs';

function App() {






  return (
    <div >
      <NavBar/>
      <AddSongs/>
      <SearchBar />
      <MusicTable />
    </div>
  );
}

export default App;
