import React, { useState } from 'react';
import MusicTable from '../MusicTable/musicTable';
import axios from 'axios';



const SearchBar = (props) => {

    


    
    return ( 

        <div>
            <div  className = 'search-bar'>
            <input 
                type='search' 
                placeholder= 'Search' 
            />
            </div>
            <div className="search-button">
                <button>Search</button>
            </div>
        </div>

        
     );
};
 
export default SearchBar;