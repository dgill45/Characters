import React from "react"
import RaceCard from "./RaceCard"
import ClassCard from './ClassCard'

function CharacterSheet(){

   
    return(
        <div>
        <h1>Character Sheet</h1>
            <RaceCard />
            <ClassCard />
        </div>
    )   
}

export default CharacterSheet;