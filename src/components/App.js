import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  
  function handleNewType(type) {
    setFilters({type: type})
    console.log(filters.type)
  }
  function handleFindPetsClick() {
    if (filters.type === "all") {
      fetch("http://localhost:3001/pets")
      .then(r=>r.json())
      .then(pets=>setPets(pets))
    } else {
      fetch(`http://localhost:3001/pets?type=${filters.type}`)
      .then(r=>r.json())
      .then(pets=>setPets(pets))
    }
    
  }
  function handleAdoption(id) {
    console.log("yay! I'm adopted!")
  }
  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={handleNewType} onFindPetsClick={handleFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={handleAdoption} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
