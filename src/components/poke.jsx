import React, {useState} from "react"

const Poke = (props) => {
    const poke = props.poke;
    const [isEditing, setIsEditing] = useState(false) // review
    const [move1=poke.move1, setMove1] = useState("")
    const [move2=poke.move2, setMove2] = useState("")
    const [move3=poke.move3, setMove3] = useState("")
    const [move4=poke.move4, setMove4] = useState("")
    const [name=poke.name, setName] = useState("")
    const [lvl=poke.lvl, setLvl] = useState()
    
    const deletePoke = (name) => {
        fetch("http://localhost:4000/delete", {
            method: "DELETE",
            body: JSON.stringify({name}),// sets the body of the request to pokemon name
            headers: {"Content-Type": "application"}
        })
        .then(() => props.handleDel())
    } //userecoil, pass callback from app
    let handleMove1 = (event) => {
        setMove1(event.target.value)
    }
    let handleMove2 = (event) => {
        setMove2(event.target.value)
        console.log(move2)
    }
    let handleMove3 = (event) => {
        setMove3(event.target.value)
    }
    let handleMove4 = (event) => {
        setMove4(event.target.value)
    }
    let handleChange = (event) => {
        setLvl(event.target.value)
    }
    const submitPoke = () => {
        fetch("http://localhost:4000/editpoke", {
            method: "PUT",
            body: JSON.stringify({name: poke.name, move1:move1, move2:move2, move3:move3, move4:move4, lvl:lvl}), //sets the body of the req
            headers: {"Content-Type": "application/json"} 
        }).then(res => res.json()).then((data) => {});
        setIsEditing(false)
    }

    const editPoke = () => {// state is editing in template add .editmode
        
        // if(editMode){
        //     label.innerText=editInput.value;
        // }else{
        //     editInput.value=label.innerText;
        // }
        setIsEditing(true)
    }
    return (
        <tr id={poke.pokemon_id}>
            <td className={isEditing? "editMode":null}><label>{lvl}</label><input type="text" onChange={handleChange} /></td>
            <td className={isEditing? "editMode":null}><label>{poke.name}</label></td>
            <td className={isEditing? "editMode":null}><label>{move1}</label><input type="text" onChange={handleMove1}/></td>
            <td className={isEditing? "editMode":null}><label>{move2}</label><input type="text" onChange={handleMove2}/></td>
            <td className={isEditing? "editMode":null}><label>{move3}</label><input type="text" onChange={handleMove3}/></td>
            <td className={isEditing? "editMode":null}><label>{move4}</label><input type="text" onChange={handleMove4}/></td>
            <button onClick={() => deletePoke(poke.name)} id={poke.pokemon_id}>Remove</button>
            <button onClick={isEditing? submitPoke:editPoke} id={poke.pokemon_id}>{isEditing? "Submit":"Edit"}</button>
            
        </tr>
    )
    
}

export default Poke;