import { useState } from 'react'
import './App.css'
import Pokedex from './components/pokedex.jsx'
import Team from './components/team'


function App() {
  
  const [pokemon, setPokemon] = useState({})
  
  
  const pokemonSearch = (name) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response => response.json())
    .then((data) => {
      setPokemon(data)
        return data
      })
      
      console.log(pokemon)
  };

  return (
    <div className="App">
      <Team pokemon={pokemon}/>
      <Pokedex pokemon={pokemon} pokemonSearch={pokemonSearch}/>
    </div>
  )
}

export default App