import React, { useState, useEffect } from 'react';
import MusicTable from './Components/MusicTable/MusicTable';
import AddNewSong from './Components/AddNewSong/AddNewSong';
import SearchBar from './Components/SearchBar/SearchBar';
import axios from 'axios';
import './App.css';


function App() {

  const [songs, setSongs] = useState([])

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs() {
    let response = await axios.get('http://127.0.0.1:5000/api/songs');
    setSongs(response.data);
  }

  // function addNewSong(song) {
  //   let tempSongs = [...songs, song]
  //   setSongs(tempSongs);
  // }

  async function addNewSong(newSong) {
    let response = await axios.post('http://127.0.0.1:5000/api/songs', newSong);
    if(response.status === 201){
      await getAllSongs();
    }
  }

  const filterSongs = (event) => {
    let filterValue = event.target.value;
    if (filterValue === "") {
      getAllSongs();
    } else {
     let filteredSongs = songs.filter(
        (x) =>
          x.title.toLowerCase().includes(filterValue.toLowerCase()) ||
          x.artist.toLowerCase().includes(filterValue.toLowerCase()) ||
          x.album.toLowerCase().includes(filterValue.toLowerCase()) ||
          x.genre.toLowerCase().includes(filterValue.toLowerCase())
      );
      setSongs(filteredSongs);
   }
  };

  return(
    <div className="container-fluid">
      <div className="row">
        <h3 style={{margin: "1em"}}>Music
        <medium className="text-muted">Library</medium></h3>
        <div className="col-sm">
          <div className="border-box">
            <MusicTable parentSongs={songs}/>
          </div>
          <div className="border-box">
            <AddNewSong addNewSongProperty={addNewSong} />
          </div>
        </div>
        <div className="col-">
          <div className="border-box">
            <SearchBar filterSongs={filterSongs}/>
          </div>
        </div>
      </div>     
    </div>
  )
}

export default App;


//   useEffect(() => {
//     const getAllSongs = async () => {
//     const response = await axios.get('http://127.0.0.1:5000/api/songs');
//     setSongs(response.data)
//     }; 

//     getAllSongs();
// }, []);