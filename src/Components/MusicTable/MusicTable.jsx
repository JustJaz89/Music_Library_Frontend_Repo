import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MusicTable() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const getAllSongs = async () => {
      const response = await axios.get('http://127.0.0.1:5000/api/songs');
      setSongs(response.data);
    };

    getAllSongs();
  }, []);

  return (
    // <div>
    //   <h1>Music Library</h1>
    //   <ul>
    //     {songs.map((song) => (
    //       <li key={song.id}>
    //         {song.title} - {song.artist} - {song.album} - {song.genre} - {song.release_date} - {song.running_time}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div>
        <h1>Music Library</h1>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                    <th>Running Time</th>
                </tr>
            </thead>
            <tbody>
                {songs.map((song, index) => (
                    <tr key={song.id}>
                        <td>{index + 1}</td>
                        <td>{song.title}</td>
                        <td>{song.artist}</td>
                        <td>{song.album}</td>
                        <td>{song.genre}</td>
                        <td>{song.release_date}</td>
                        <td>{song.running_time}</td>
                    </tr>
            ))}
            </tbody>
        </table>
    </div>
  );
};

export default MusicTable;
