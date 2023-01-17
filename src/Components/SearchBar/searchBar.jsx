import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MusicTable from '../MusicTable/musicTable';


const SearchBar = (props) => {

    const [allResults, setAllResults] =useState([]);
    const [filteredData, setFilteredData] = useState(allResults);

    const handleChange = (props) => {

    }

    useEffect(() => {
        axios('http://127.0.0.1:8000/api/music/')
        .then(response => {
        console.log(response.data)
        setAllResults(response.data);
        setFilteredData(response.data);
        })
        .catch(error => {
        console.log('Error getting fake data: '+error);
        })
        }, []); 
        
    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];
        console.log(value);
        result = allResults.filter((data) => {
        return data.title.search(value) !== -1;
        });
        setFilteredData(result);
        }
    
    return ( 
        <div className = 'search-bar'>
            <label>Search:</label>
            <input type='text' onChange={(event) => handleSearch(event)} />
        </div>
        
     );
};
 
export default SearchBar;