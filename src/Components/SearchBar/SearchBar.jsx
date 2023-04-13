import React from 'react';


const SearchBar = (props) => {

    // const [search, setSearch] = useState("");

    // const handleInputChange = (event) => {
    //     setSearch(event.target.value);
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     axios.get('http://127.0.0.1:5000/api/songs')
    //         .then(response => {
    //             props.handleSearchResults(response.data);
    //         })
    //         .catch(error => console.log(error));
    // };

    return ( 
        // <form onSubmit={handleSubmit}>
        //     <label></label>
        //     <input type="text" id="inputSearch" placeholder="Search.." value={search} onChange={handleInputChange} />
        //     <button type="submit" className="btn btn-primary">Search</button>
        // </form>
        <div>
        <input
            type="text"
            placeholder="Search"
            onChange={(event) => props.filterSongs(event)}
        />
        </div>
    );
}
 
export default SearchBar;

// <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} />