import React from "react";
import Search from "./search";

/* 
    Stores teams in database
        - (possibly can add blurb on why you want that pokemon in the team)
        - possibly can show best ev params
    Add Pokemon from search to team 
        - add button 
        - make function
        - bind function to button
    show's pokemon items
    shows pokemon curr EXP
    shows pokemon known moves
        - can enter pokemon's known moves

    remove pokemon from team *need to add a id={props.pokemon} to each <td></td>
        - make button 
        - make function 
            - how to grab DOM node? 
                - 
            - fetch request
            - 
        */

const Team = (props) => {
    const deletePoke = () => {
        let tr = this.parentNode; // this is the delete button
        let table = tr.parentNode;
        fetch("./delete", {
            method: "DELETE",
            body: JSON.stringify({name: props.pokemon}),// sets the body of the request to pokemon name
            headers: {"Content-Type": "application/json"}
        })
        table.removeChild(tr)
    }

    // display "No Pokemon Are Currently In Your Party"
    return (
        <div>
            <table id="team">
                <tr>
                    <th>LVL</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Total</th>
                    <th>HP</th>
                    <th>ATK</th>
                    <th>DEF</th>
                    <th>SP.ATK</th>
                    <th>SP.DEF</th>
                    <th>SPD</th>
                    <th><div>Next Evolution</div><div>LVL</div></th>
                    
                </tr>
                
                    {fetch("/", {
                        method: "GET"
                    }).then(res => res.json()).then(data => {
                        for(let i =0; i < data.length; i++){
                            return(
                                <tr>
                                    <td>{data[i].lvl}</td>
                                    <td>{data[i].name}</td>
                                    <td>{data[i].type}</td>
                                    <td>{data[i].total}</td>
                                    <td>{data[i].hp}</td>
                                    <td>{data[i].attack}</td>
                                    <td>{data[i].defense}</td>
                                    <td>{data[i].special_defense}</td>
                                    <td>{data[i].special_attack}</td>
                                    <button onClick={deletePoke}>Remove</button>
                                    <button onClick={}>edit</button>
                                </tr>
                            )
                        }
                    })}
                
            </table>
        </div>
    )
}

export default Team;