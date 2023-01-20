import React, { useState } from "react";

const Search = (props) => {
    const [query, setQuery] = useState("")

    const recordQuery = (event) => {
        setQuery(event.target.value)
    };

    let submitQuery = event => {
        event.preventDefault();
        props.onSubmit(query)
        console.log(query)
    };

    return (
        <form onSubmit={submitQuery} id="search">
            <input
                type="text"
                placeholder="Pokemon name"
                value={query}// something else should go here
                onChange={recordQuery}
            ></input>
        </form>
    );
}

export default Search