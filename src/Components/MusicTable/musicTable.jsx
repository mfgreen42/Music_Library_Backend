import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MusicTable = (props) => {

    const [songs, setSongs] = useState([]);

    useEffect( () => {
      getAllSongs()
    }, []);
  
  
  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data);
    setSongs(response.data)
  }
  

    return ( 
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                   {songs.map((song)=> {
                    return(
                        <tr>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                        </tr>
                    )
                   })}
                </tbody>
            </table>
            <button onClick={() => getAllSongs()}>Get All Songs</button>

        </div>
     );
}
 
export default MusicTable;