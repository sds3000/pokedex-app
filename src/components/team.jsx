import React from "react";
import Search from "./search";

/* shows pokemon's stats
        - lvl   
        - name
        - type
        - total points - adds up all other values
        - atk
        - spd 
        - defense 
        - special atk
        - special def
        - total HP
    Stores teams in database
        - (possibly can add blurb on why you want that pokemon in the team)
        - possibly can show best ev params
    Add Pokemon from search to team
    show's pokemon items
    shows pokemon curr EXP
    shows pokemon known moves
        - can enter pokemon's known moves
        */

const Team = (props) => {

    return (
        <div>
            <Search />
            <table>
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
                <tr>
                    {/* show pokemon's saved moves from DB */}
                </tr>
            </table>
        </div>
    )
}

export default Team;