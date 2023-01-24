import React from "react";

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
                    const deletePoke = () => {
                        let td = document.getElementById(`${poke.pokemon_id}`)
                        let tr = td.parentNode; // this is the delete button
                        let table = tr.parentNode;
                        fetch("http://localhost:4000/delete", {
                            method: "DELETE",
                            body: JSON.stringify({name: poke.name}),// sets the body of the request to pokemon name
                            headers: {"Content-Type": "application/json"}
                        })
                    }
                    const editPoke = () => {
                        let td=document.querySelector(`#${poke.name}`);
                        let editInput = listItem.querySelector("input[type=text]");
                        let label = listItem.querySelector("label");
                        
                        fetch("http://localhost:4000/editpoke", {
                            method: "PUT",
                            body: JSON.stringify({name: poke.name, move1:poke.move1, edit:editInput.value}), //sets the body of the req
                            headers: {"Content-Type": "application/json"} 
                        }).then(res => res.json()).then((data) => {});
                            let editMode = listItem.classList.contains("editMode")
                            if(editMode){
                                label.innerText=editInput.value;
                            }else{
                                editInput.value=label.innerText;
                            }
                        listItem.classList.toggle("editMode");
                    }


                    return (
                        <tr id={poke.pokemon_id}>
                            <td>{poke.lvl}<input type="text" /></td>
                            <td>{poke.name}<input type="text" /></td>
                            <td>{poke.move1}<input type="text" /></td>
                            <td>{poke.move2}<input type="text" /></td>
                            <td>{poke.move3}<input type="text" /></td>
                            <td>{poke.move4}<input type="text" /></td>
                            <button onClick={deletePoke} id={poke.pokemon_id}>Remove</button>
                            <button onClick={editPoke} id={poke.pokemon_id}>Edit</button>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}
    // display "No Pokemon Are Currently In Your Party"
export default Team;