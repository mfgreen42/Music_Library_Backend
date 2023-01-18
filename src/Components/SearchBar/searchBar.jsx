import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SearchBar = ({event}) => {

    
    return ( 
        <div className = 'search-bar'>
            <label>Search:</label>
            <input type='text' onChange={(event) => onChange(event.target.value)} />
        </div>
        
     );
};
 
export default SearchBar;


