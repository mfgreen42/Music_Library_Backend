import { useState } from "react";
import axios from "axios";


const AddSongs = (props) => {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [genre, setGenre] = useState("");


    function handleAdd(event){
        event.preventDefault()
        let newEntry = {
            title: title,
            artist: artist,
            album: album,
            release_date: releaseDate,
            genre: genre,
        };
        console.log('new entry', newEntry);
        addSongToTable(newEntry);

          
    }

    async function addSongToTable(addSong) {
        const response = await axios.post('http://127.0.0.1:8000/api/music/', addSong);
        if (response.status === 201) {
            await props.parentAllSongs();
        }
      }


    return ( 
        <form onSubmit={(event) => handleAdd(event)} >
    <h2>Add Music</h2>
    <label>Title</label>
    <input type='text' value={title} onChange={(event) => setTitle(event.target.value)} />
    <label>Artist</label>
    <input type='text' value={artist} onChange={(event) => setArtist(event.target.value)} />
    <label>Album</label>
    <input type='text' value={album} onChange={(event) => setAlbum(event.target.value)} />
    <label>Release Date</label>
    <input type='date' value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)} />
    <label>Genre</label>
    <input type='text' value={genre} onChange={(event) => setGenre(event.target.value)} />
    <button type='submit'>Add Song</button>
</form>

     );
    }
 
export default AddSongs;