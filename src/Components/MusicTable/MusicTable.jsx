
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
                    {props.parentSongs.map((song, index) => (
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
