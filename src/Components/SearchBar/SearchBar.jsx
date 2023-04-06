const SearchBar = (props) => {
    return (
        <form>
            <label>Title</label>
            <input type="text" /> <br></br>
            <label>Artist</label>
            <input type="text" /> <br></br>
            <label>Album</label>
            <input type="text" /> <br></br>
            <label>Genre</label>
            <input type="text" /><br></br>
            <label>Release Date</label>
            <input type="date" />
        </form>
    );
};
 
export default SearchBar;