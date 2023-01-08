import axios from "axios";
import React, { useState } from 'react';


const SearchBar = (props) => {
    async function getAllSongs(){
        const response = await axios.get('http://127.0.0.1:8000/api/music/');
        console.log(response.data);
        setSongs(response.data)
    }
    return ( 
        
        <button onClick={() => getAllSongs()}>Get All Songs</button>
     );
}
 
export default SearchBar;