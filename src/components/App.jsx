import React, { useEffect } from 'react'
import { Col, Spin } from "antd";
import { connect, useDispatch, useSelector } from 'react-redux';
import Searcher from './Searcher'
import PokemonList from './PokemonList';
import { getPokemon } from '../api';
import { getPokemonWithDetails, setLoading } from "../actions"
import logo from "../static/logo.svg"
//css
import "../styles/App.scss"




const App = () => {
  const pokemon = useSelector((state) => state.get('pokemon')).toJS();
  const loading = useSelector((state) => state.get('loading'));
  const dispatch = useDispatch();

  useEffect( ()=>{
    const fetchPokemon = async () => {
      dispatch(setLoading(true));
      const pokemonRes = await getPokemon();
      
        
      dispatch(getPokemonWithDetails(pokemonRes))
      dispatch(setLoading(false));
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
      { loading 
      ?(<Col offset={12}>
        <Spin spinning size='large' />
      </Col> )
      :(<PokemonList pokemon={pokemon} />)
      }
      
      
      
      

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