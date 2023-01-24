import { useState } from 'react'
import './App.css'
import Pokedex from './components/pokedex.jsx'
import Team from './components/team'


function App() {
  
  const [pokemon, setPokemon] = useState({})
  const [team, setTeam] = useState([])
  fetch("http://localhost:4000/", {
        method: "GET"
    }).then(res => res.json())
    .then(data => {
        setTeam(data);
        return data
    })
  const pokemonSearch = (name) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response => response.json())
    .then((data) => {
      setPokemon(data)
        return data
      })
  };

  return (
    <div className="App">
      <Team pokemon={pokemon} team={team}/>
      <Pokedex pokemon={pokemon} pokemonSearch={pokemonSearch}/>
    </div>
  )
}

export default App