import React from "react";

const Moves = (props) => {
    
    
    console.log(props.move.version_group_details[0].move_learn_method.name)

    return(
        <tr>
            <td><div>{props.move.version_group_details[0].move_learn_method.name}</div></td>
            <td>{props.move.move.name}</td>
        </tr>
    )
    
}


export default Moves