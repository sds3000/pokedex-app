import React, {useState} from "react";
import Poke from "./poke";
const Team = (props) => {

    return (
        <div>
            <table id="team">
                <tr>
                    <th>LVL</th>
                    <th>Name</th>
                    <th>move1</th>
                    <th>move2</th>
                    <th>move3</th>
                    <th>move4</th>
                </tr>
                {props.team.map(poke => {
                    return <Poke handleDel={props.handleDel} poke={poke} key={poke.pokemon_id}/> 
                })}
            </table>
        </div>
    )
}
    // display "No Pokemon Are Currently In Your Party"
export default Team;