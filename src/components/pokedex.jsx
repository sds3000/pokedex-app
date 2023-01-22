import React from "react";
import Search from './search.jsx'
import Moves from "./moves.jsx";

const Pokedex = (props) => {
    if(props.pokemon.height){
        return(
            <div>
                <Search onSubmit={props.pokemonSearch} pokemonSearch={props.pokemonSearch} pokemon={props.pokemon}/>

                <table>
                    <tr>
                        <th>No. </th>
                        <th>Type</th>
                        <th>Height</th>
                        <th>Weight</th>
                        
                    </tr>
                    
                    <tr>
                            <td>{props.pokemon.id}</td>
                        <td>
                            {props.pokemon.types.map(type => {
                                
                                return <div>{type.type.name}</div>// get images from internet and make an if statement
                            })}
                        
                        </td>
                        <td>{props.pokemon.height}</td>
                        <td>{props.pokemon.weight}</td>
                    </tr>
                </table>
                <h3>Moves</h3>
                <table>
                    <tr>
                        <th>Method</th>
                        <th>name</th>

                    </tr>
                    
                    {props.pokemon.moves.map(move => {
                        console.log(move)
                        return <Moves pokemon={props.pokemon} move={move}/>

                    })}
                    
                </table>
            </div>

        )
    }else{
        return (
            <div>
                <Search onSubmit={props.pokemonSearch} pokemonSearch={props.pokemonSearch} pokemon={props.pokemon}/>
                <table>
                    <tr>
                        <th>Type</th>
                        <th>Height</th>
                        <th>Weight</th>
                        <th>Egg Steps</th>
                    </tr>
                    <tr>

                    </tr>
                </table>
            </div>
        )

    }
}

export default Pokedex