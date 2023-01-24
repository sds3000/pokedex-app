import React, { useState } from "react";

const Search = (props) => {
    const [query, setQuery] = useState("")

    const recordQuery = (event) => {
        setQuery(event.target.value)
    };

    let submitQuery = event => {
        event.preventDefault();
        props.pokemonSearch(query) //runs pokemonSearch
        
    };

    // if(props.pokemon.forms[0]){
    //     return (
    //         <img src={props.pokemon.forms}></img>
            
    //     )
    // }else {
        
    // }
    return (
    <div>
        
        <form onSubmit={submitQuery} id="search">
            <input
                
                placeholder="Pokemon name"
                value={query}// something else should go here
                onChange={recordQuery}
            ></input>
        </form>

    </div>

    )
    
}

export default Search