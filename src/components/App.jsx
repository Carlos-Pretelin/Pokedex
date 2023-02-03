import React, { useEffect, useState } from 'react'
import { Col } from "antd";
import { connect, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Searcher from './Searcher'
import PokemonCard from './PokemonCard';
import PokemonList from './PokemonList';
import getPokemon from '../api';
import { setPokemon } from "../actions"

//css
import "../styles/App.scss"
import logo from "../static/logo.svg"



const App = () => {
  const pokemon = useSelector(state => state.pokemon);
  const dispatch = useDispatch();

  useEffect( ()=>{
    const fetchPokemon = async () => {
      const pokemonRes = await getPokemon();
      dispatch(setPokemon(pokemonRes))
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



//  const mapStateToProps = (state) => ({
//    pokemon: state.pokemon,
//  });

//  const mapDispatchToProps = (dispatch) => ({
//    setPokemon: (value) => dispatch(setPokemonActions(value))
//  });

//  export default connect(mapStateToProps, mapDispatchToProps) (App);
export default App;