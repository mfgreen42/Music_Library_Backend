import React, { useEffect, useState } from 'react';
import MusicTable from '../MusicTable/musicTable';
import axios from 'axios';



const SearchBar = (props) => {

    const [searchResults, setSearchResults] =useState('');

        
    
        async function handleSearch(search) {
            const response = await axios.get('http://127.0.0.1:8000/api/music/?title=${search}' )
            console.log('response from call', response.data)
            setSearchResults(response.data)
    
        }

        handleSearch()
    
    
        

    return ( 
            <form onChange={handleSearch} >
            <input type='text' placeholder= 'Search' />
            </form>
     );
};
 
export default SearchBar;