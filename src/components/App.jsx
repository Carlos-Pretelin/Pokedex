import React, { useEffect, useState } from 'react'
import { Col } from "antd";
import Searcher from './Searcher'
import PokemonCard from './PokemonCard';
import PokemonList from './PokemonList';
import getPokemon from '../api';

//css
import "../styles/App.scss"
import logo from "../static/logo.svg"



const App = () => {

  const [pokemon, setPokemon] = useState([]);

  useEffect( ()=>{
    const fetchPokemon = async () => {
      const pokemonRes = await getPokemon();
      setPokemon(pokemonRes)
    } 
    fetchPokemon();
  }, [])


  return (
    <div className='App'>
       <Col span={4} offset={10}>
        <img src={logo} alt="Pokedex Logo" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
      <PokemonList pokemon={pokemon} />
      

    </div>
  )
}

export default App