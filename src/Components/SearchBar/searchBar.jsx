import React, {  useState } from 'react';

const SearchBar = ({setSongs, songs} ) => {

    const [searchCriteria, setSearchCriteria] =useState('')


    const handleSearch = (event) => {
        event.preventDefault();
        let results = songs.filter((el)=> {
            
            if (el.genre.toLowerCase().includes(searchCriteria) || el.title.toLowerCase().includes(searchCriteria) ||
            el.artist.toLowerCase().includes(searchCriteria) || el.album.toLowerCase().includes(searchCriteria) || 
            el.release_date.includes(searchCriteria)){
                return true;
            }
    })
    setSongs(results)
      } 

    return ( 
            <form onSubmit={(event) => handleSearch(event)}>
                <input type='text' 
                placeholder= 'Search ' 
                value={searchCriteria.toLowerCase()} 
                onChange = {(event) => setSearchCriteria(event.target.value)}/>
                <button type = 'submit'>Search</button>
            </form>
    
     );
}
 
export default SearchBar;


