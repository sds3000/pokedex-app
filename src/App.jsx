import { useState, useEffect } from 'react'
import './App.css'
import Pokedex from './components/pokedex.jsx'
import Team from './components/team'


function App() {
  
  const [pokemon, setPokemon] = useState({})
  const [team, setTeam] = useState([])
  const [addedPoke, setAddedPoke] = useState([])
  const getDB = () => {
    fetch("http://localhost:4000/", {
          method: "GET"
      }).then(res => res.json())
      .then(data => {
          setTeam(data);
          return data
      })
  }
  useEffect(() => {
    getDB()
  }, [addedPoke]);

  const handleDel = () => {
    getDB();
  }
  const pokemonSearch = (name) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response => response.json())
    .then((data) => {
      setPokemon(data)
        return data
      })
    .then(() => getDB())
      
  };

  return (
    <div className="App">
      <Team handleDel={handleDel} pokemon={pokemon} team={team}/>
      <Pokedex setAddedPoke={setAddedPoke} pokemon={pokemon} pokemonSearch={pokemonSearch}/>
    </div>
  )
}

export default App