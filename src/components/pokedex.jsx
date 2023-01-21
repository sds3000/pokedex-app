import React from "react";
import Search from './search.jsx'

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
                        <div>
                            {props.pokemon.types.map(type => {
                                
                                return <td>{type.type.name}</td>// get images from internet and make an if statement
                            })}
                        
                        </div>
                        <td>{props.pokemon.height}</td>
                        <td>{props.pokemon.weight}</td>
                    </tr>
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