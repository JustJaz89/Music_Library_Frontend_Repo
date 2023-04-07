import React, { useState, useEffect } from 'react';
import MusicTable from './Components/MusicTable/MusicTable';
import AddNewSong from './Components/AddNewSong/AddNewSong';
import axios from 'axios';


function App() {

  const [songs, setSongs] = useState([])

  function addNewSong(song) {
    let tempSongs = [...songs, song]
    setSongs(tempSongs);
  }

  useEffect(() => {
    const getAllSongs = async () => {
    const response = await axios.get('http://127.0.0.1:5000/api/songs');
    setSongs(response.data)
    }; 

    getAllSongs();
}, []);

  return(
    <div>
      <MusicTable parentSongs={songs}/>
      <AddNewSong addNewSongProperty={addNewSong} />
    </div>
  )
}

export default App;
  // useEffect[() => {
  //   getAllSongs();
  // }, []]

  // async function getAllSongs(){
  //   let response = await axios.get('http://127.0.0.1:5000/api/songs');
  //   setSongs(response.data);
  // }

  // async function getAllSongs(){
  //   try{
  //     let response = await axios.get('http://127.0.0.1:5000/api/songs');
  //     console.log(response.data);
  //   } catch (ex) {
  //     console.log('Error in API call!');
  //     }
  // }