import React, { useState } from "react";

const Search = (props) => {
    const [query, setQuery] = useState("")

    const recordQuery = (event) => {
        setQuery(event.target.value)
    };

    console.log(props.pokemon)
    let submitQuery = event => {
        event.preventDefault();
        props.pokemonSearch(query) //runs pokemonSearch
        console.log(query)
    };

    // if(props.pokemon.forms[0]){
    //     return (
    //         <img src={props.pokemon.forms}></img>
            
    //     )
    // }else {
        
    // }
    return (
    <div>
        {/* <img src={props.pokemon.forms[0].url} height={200} width={200}></img> */}
        <form onSubmit={submitQuery} id="search">
            <input
                type="text"
                placeholder="Pokemon name"
                value={query}// something else should go here
                onChange={recordQuery}
            ></input>
        </form>
    </div>

    )
    
}

export default Search