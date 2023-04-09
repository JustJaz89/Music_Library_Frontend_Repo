import React, {useState} from 'react';
import axios from 'axios';


const SearchBar = (props) => {

    const [search, setSearch] = useState("");

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get('http://127.0.0.1:5000/api/songs')
            .then(response => {
                props.handleSearchResults(response.data);
            })
            .catch(error => console.log(error));
    };

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Search</label>
            <input type="text" value={search} onChange={handleInputChange} />
            <button type="submit">Search</button>
        </form>
    );
}
 
export default SearchBar;

// <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} />