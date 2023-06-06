import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Pokemons from './containers/Pokemons'
import AppNavigator from './components/AppNavigator'
import PokemonDetails from './containers/PokemonDetails'


export default function App() {
  return (
    <Router>
      <AppNavigator />
      <Routes>
        <Route path="/" element={<Pokemons />} /> 
        <Route path="/pokemon/:id" component={PokemonDetails} />
      </Routes>
    </Router>
  )
}
