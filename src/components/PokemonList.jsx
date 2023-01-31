import React from 'react'
import PokemonCard from './PokemonCard'
//css
import "../styles/PokemonLsit.scss"

const PokemonList = ({pokemon}) => {
  return (
    <div className='PokemonList'>
        {pokemon.map( (item) =>(
            <PokemonCard name={item.name} key={item.id} img={item.sprites.back_default}/>
        ))}
    </div>
  )
}

PokemonList.defaultProps = {
    pokemon: Array(12).fill(""),
}

export default PokemonList