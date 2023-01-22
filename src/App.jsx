import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Search from './components/search.jsx'
import Pokedex from './components/pokedex.jsx'


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

  const handleSubmit = () => {
    console.log('hi')
  };

  return (
    <div className="App">
      
      <Pokedex pokemon={pokemon} pokemonSearch={pokemonSearch}/>
    </div>
  )
}

export default App