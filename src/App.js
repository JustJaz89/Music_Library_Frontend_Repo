import React, { useState, useEffect } from 'react';
import MusicTable from './Components/MusicTable/MusicTable';
import AddNewSong from './Components/AddNewSong/AddNewSong';
import axios from 'axios';


function App() {

  const [songs, setSongs] = useState([])

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs() {
    let response = await axios.get('http://127.0.0.1:5000/api/songs');
    setSongs(response.data);
  }

  function addNewSong(song) {
    let tempSongs = [...songs, song]
    setSongs(tempSongs);
  }

  async function createSong(newSong) {
    let response = await axios.post('http://127.0.0.1:5000/api/songs', newSong);
    if(response.status === 201){
      await getAllSongs();
    }
  }

  return(
    <div>
      <MusicTable parentSongs={songs}/>
      <AddNewSong addNewSongProperty={addNewSong} />
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