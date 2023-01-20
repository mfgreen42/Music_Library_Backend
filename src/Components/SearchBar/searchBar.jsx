import React, {  useState } from 'react';

const SearchBar = (props, ) => {

    const [searchInput, setSearchInput] = useState("");

    const allTheSongs = props.songsToSearch
    debugger
    console.log('allTheSongs:', allTheSongs)

    // const handleChange = (event) => {
    //     event.preventDefault();
    //     debugger
    //     setSearchInput(event.target.value);
    // };

    function searchingSongs() {
        if (searchInput.length >0) {
            let results = allTheSongs.filter(function (e){
                if (e.searchInput === props.songsToSearch){
                    return true;
                }else {
                    return false;
                }
            })
   console.log('results of search:', results)
   return results
    }}

    return ( 
            <form onSubmit={(event) => searchingSongs(event)}>
                {/* <label>Search</label> */}
                <input type='text' placeholder= 'Search ' value={searchInput} onChange = {(event) => setSearchInput(event.target.value)}/>
                <button>Submit Search</button>
            </form>
    
     );
};
 
export default SearchBar;


