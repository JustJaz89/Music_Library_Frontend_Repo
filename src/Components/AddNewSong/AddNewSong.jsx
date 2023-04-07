import React, { useState } from 'react';


const AddNewSong = (props) => {

    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [genre, setGenre] = useState("");
    const [release_date, setReleaseDate] = useState("");
    const [running_time, setRunningTime] = useState(0)

    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            genre: genre,
            release_date: release_date,
            running_time: running_time
        };
        console.log(newSong)
        // props.addNewSongProperty(newSong)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} /> <br></br>
            <label>Artist</label>
            <input type="text" value={artist} onChange={(event) => setArtist(event.target.value)} /> <br></br>
            <label>Album</label>
            <input type="text" value={album} onChange={(event) => setAlbum(event.target.value)} /> <br></br>
            <label>Genre</label>
            <input type="text" value={genre} onChange={(event) => setGenre(event.target.value)} /> <br></br>
            <label>Release Date</label>
            <input type="date" value={release_date} onChange={(event) => setReleaseDate(event.target.value)} /> <br></br>
            <label>Running Time</label>
            <input type="number" value={running_time} onChange={(event) => setRunningTime(parseFloat(event.target.value))} />
            <button type="submit">Add</button>
        </form>
    );
};
 
export default AddNewSong;