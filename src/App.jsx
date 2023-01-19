import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Search from './components/search.jsx'


function App() {
  const [count, setCount] = useState(0)
  const pokemon = (name) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
    })

  };

  const handleSubmit = () => {
    console.log('hi')
  };

  return (
    <div className="App">
      <Search onSubmit={pokemon} pokemon={pokemon}/>
    </div>
  )
}

export default App
