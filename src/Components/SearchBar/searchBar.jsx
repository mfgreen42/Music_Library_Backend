import React, {  useState } from 'react';

const SearchBar = ({setSongs, songs} ) => {

    const [searchCriteria, setSearchCriteria] =useState('')


    const handleSearch = (event) => {
        event.preventDefault();
        let results = songs.filter((el)=> {
            
            if (el.songs.includes(searchCriteria)){
                return true;
            }
    })
    setSongs(results)
      } 

    return ( 
            <form onSubmit={(event) => handleSearch(event)}>
                <input type='text' 
                placeholder= 'Search ' 
                value={searchCriteria} 
                onChange = {(event) => setSearchCriteria(event.target.value)}/>
                <button type = 'submit'>Search</button>
            </form>
    
     );
}
 
export default SearchBar;


