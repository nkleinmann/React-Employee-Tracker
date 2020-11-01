import React from 'react';
import TextField from '@material-ui/core/TextField';

function Search(props) {
    return (
        <TextField className="searchBox" color="secondary" variant="outlined" label="Search Here" type="search" name="search" onChange={props.handleInputChange} />
    )
}

export default Search;


// <input className="searchBar" type="text" placeholder="Search for last name..." type="search" handleInputChange={this.handleInputChange}></input>