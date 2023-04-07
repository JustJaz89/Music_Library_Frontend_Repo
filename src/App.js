import React from 'react';
import MusicTable from './Components/MusicTable/MusicTable';
import AddNewSong from './Components/AddNewSong/AddNewSong';


function App() {

  // function addNewSong(song) {
  //   let tempSongs = [song]
  //   setSongs(tempSongs);
  // }

  return(
    <div>
      <MusicTable />
      <AddNewSong />
      {/* <AddNewSong addNewSongProperty={addNewSong} /> */}
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