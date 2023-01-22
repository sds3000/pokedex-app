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
                        <th>Pic</th>
                        <th>Type</th>
                        {/* <th>Height</th>
                        <th>Weight</th> */}
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
                        {/* <td>{props.pokemon.height}</td>
                        <td>{props.pokemon.weight}</td> */}
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
                            <tr>
                                <td>{props.pokemon.stats[0].base_stat}</td>
                                <td>{props.pokemon.stats[1].base_stat}</td>
                                <td>{props.pokemon.stats[2].base_stat}</td>
                                <td>{props.pokemon.stats[3].base_stat}</td>
                                <td>{props.pokemon.stats[4].base_stat}</td>
                                <td>{props.pokemon.stats[5].base_stat}</td>
                                <td>{props.pokemon.stats[0].base_stat+props.pokemon.stats[1].base_stat+props.pokemon.stats[2].base_stat+props.pokemon.stats[3].base_stat+props.pokemon.stats[4].base_stat+props.pokemon.stats[5].base_stat}</td>

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
                        <th>No. </th>
                        <th>Type</th>
                        <th>Height</th>
                        <th>Weight</th>
                        <th>base HP</th>
                        <th>base ATK</th>
                        <th>base DEF</th>
                        <th>base SP.ATK</th>
                        <th>base SP.DEF</th>
                        <th>base SPD</th>
                    </tr>
                    <tr>

                    </tr>
                </table>
            </div>
        )

    }
}

export default Pokedex