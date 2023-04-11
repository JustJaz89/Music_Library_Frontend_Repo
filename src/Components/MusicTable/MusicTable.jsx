import React, { useState } from 'react';


const MusicTable = (props) => {

    return (
        <div>
            {/* <h1>Music Library</h1> */}
            <table className="table table-striped table-dark">
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
                {props.parentSongs.map((song, index) => {
                    return (
                    <tr key={song.id}>
                        <td>{index + 1}</td>
                        <td>{song.title}</td>
                        <td>{song.artist}</td>
                        <td>{song.album}</td>
                        <td>{song.genre}</td>
                        <td>{song.release_date}</td>
                        <td>{song.running_time}</td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};

function MusicSearch() {
    const [query, setQuery] = useState("");
    const [filteredData, setFilteredData] = useState([]);
  
    function handleSearch(event) {
      const newQuery = event.target.value;
      setQuery(newQuery);
      const newData = query.filter(
        (item) =>
          item.title.includes(newQuery) ||
          item.artist.includes(newQuery) ||
          item.album.includes(newQuery) ||
          item.genre.includes(newQuery) ||
          item.releaseDate.includes(newQuery)
      );
      setFilteredData(newData);
    }
  
    return (
        <div>
          <input type="text" placeholder="Search" onChange={handleSearch} />
          {filteredData.length > 0 ? (
            <MusicTable data={filteredData} />
          ) : (
            <MusicTable data={MusicSearch} />
          )}
        </div>
      );
    }

const data = [
    {
        id: 1,
        title: "",
        artist: "JustJazBeats",
        album: "Instrumentals",
        genre: "R&B",
        releaseDate: "",
        runningTime: "",
    },
]

export default MusicTable;
