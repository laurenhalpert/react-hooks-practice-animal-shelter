import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  return (
    <div className="ui cards">PET COMPONENT SHOULD GO HERE
      {pets.map(pet=>{
        return <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet}/>
      })}
   </div>
  )
}

export default PetBrowser;
