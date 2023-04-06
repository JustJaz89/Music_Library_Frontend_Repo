import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MusicTable() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const getMusic = async () => {
      const response = await axios.get('http://127.0.0.1:5000/api/songs');
      setSongs(response.data);
    };

    getMusic();
  }, []);

  return (
    <div>
      <h1>Music Library</h1>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            {song.title} - {song.artist} - {song.album} - {song.genre} - {song.release_date} - {song.running_time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicTable;
