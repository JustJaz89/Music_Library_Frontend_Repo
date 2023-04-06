// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import React, { useState } from 'react';


function App() {

  const [songs, setSongs] = useState([{id: 1, title: "Mental", album: "Instrumentals", artist: "JustJazBeats", Genre: "R&B", ReleaseDate: "01-01-2023", RunningTime: "260"}]);

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

  return (
    <div>
      <h1>Music Library</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Album</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Running Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mental</td>
            <td>Instrumentals</td>
            <td>JustJazBeats</td>
            <td>R&B</td>
            <td>01-01-2023</td>
            <td>260</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
