import React from "react";
import Search from './search.jsx'
import Moves from "./moves.jsx";

const Pokedex = (props) => {
    let addPoke = function(){ // attach function to post route
        // Create a new list item with the text from the #new-task:
        fetch("http://localhost:4000/poke", {
            method: "POST",
            body: JSON.stringify({name: props.pokemon.name}), //sets the body of the req
            headers: {"Content-Type": "application/json"} 
        })
        .then((res) => res.json())
        .then((data) => { 
            props.setAddedPoke(data)
        });
    }
    if(props.pokemon.height){
        return(
            <div>
                <Search onSubmit={props.pokemonSearch} pokemonSearch={props.pokemonSearch} pokemon={props.pokemon}/>
                <table> {/* displayse searched pokemon */}
                    <tr>
                        <th>No. </th>
                        <th>Pic</th>
                        <th>Type</th>
                        <th>Base STATS</th>
                    </tr>
                    <tr>
                        <td>{props.pokemon.id}</td>
                        <td><img src={`${props.pokemon.sprites.front_default}`}></img></td>
                        <td>
                            {props.pokemon.types.map(type => {
                                return <div>{type.type.name}</div>// get images from internet and make an if statement
                            })}
                        </td>
                        
                        <table>
                            <tr>
                                <th>HP</th>
                                <th>ATK</th>
                                <th>DEF</th>
                                <th>S.ATK</th>
                                <th>S.DEF</th>
                                <th>SPD</th>
                                <th>Total</th>
                            </tr>
                            <tr id={props.pokemon.name}>
                                <td>{props.pokemon.stats[0].base_stat}</td>
                                <td>{props.pokemon.stats[1].base_stat}</td>
                                <td>{props.pokemon.stats[2].base_stat}</td>
                                <td>{props.pokemon.stats[3].base_stat}</td>
                                <td>{props.pokemon.stats[4].base_stat}</td>
                                <td>{props.pokemon.stats[5].base_stat}</td>
                                <td>{props.pokemon.stats[0].base_stat+props.pokemon.stats[1].base_stat+props.pokemon.stats[2].base_stat+props.pokemon.stats[3].base_stat+props.pokemon.stats[4].base_stat+props.pokemon.stats[5].base_stat}</td>
                                <button id={props.pokemon.name} onClick={addPoke}>Add</button>
                            </tr>
                        </table>
                    </tr>
                </table>
                <h3>Moves</h3>
                <table>
                    <tr>
                        <th>Method</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>PP</th>
                        <th>Power</th>
                    </tr>
                    {props.pokemon.moves.map(move => {
                        return <Moves pokemon={props.pokemon} move={move}/>
                    })}
                </table>
            </div>
        )
    }else{
        return (
            <div> {/* displays table before search */}
                <Search onSubmit={props.pokemonSearch} pokemonSearch={props.pokemonSearch} pokemon={props.pokemon}/>
                <table>
                    <tr>
                        <th>No. </th>
                        <th>Pic</th>
                        <th>Type</th>
                        <th>Base STATS</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <table>
                            <tr>
                                <th>HP</th>
                                <th>ATK</th>
                                <th>DEF</th>
                                <th>S.ATK</th>
                                <th>S.DEF</th>
                                <th>SPD</th>
                                <th>Total</th>
                            </tr>
                        </table>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Pokedex