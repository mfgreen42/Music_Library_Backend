import React, { useState } from 'react';
import MusicTable from '../MusicTable/musicTable';
import axios from 'axios';



const SearchBar = (props) => {

    


    
    return ( 
            <form  className = 'search-bar'>
            <input 
                type='text' 
                placeholder= 'Search'
                onChange={(event) => props.setSearch(event.target.value)}
            />
                <button className="search-button">Search</button>
            </form>
     );
};
 
export default SearchBar;