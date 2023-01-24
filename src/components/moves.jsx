import React, {useState} from "react";

const Moves = (props) => {
    const [move, setMove] = useState({})
    // const moveStats = (name) => {
    //     fetch(`https://pokeapi.co/api/v2/move/${name}`).then(response => response.json())
    //     .then(data => {
    //             setMove(data)
                
    //             return data
    //     })
    // }
    
    return(
        <tr>
            <td><div>{props.move.version_group_details[0].move_learn_method.name}</div></td>
            <td>{props.move.move.name}</td>
            {/* <td move={moveStats(props.move.move.name)}>{move}</td> */}
        </tr>
    )
    
}


export default Moves