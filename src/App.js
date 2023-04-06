import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect[() => {
    getAllSongs();
  }, []]

  async function getAllSongs(){
    let response = await axios.get();
    setSongs(response.data);
  }

  return (
    <div>
      <h3>Hello World!</h3>
    </div>
  );
}

export default App;
