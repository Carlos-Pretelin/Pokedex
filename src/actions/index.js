import { getPokemonDetails } from "../api";
import { SET_FAVORITE, SET_LOADING, SET_POKEMON } from "./types";


export const setPokemon = (payload) => ({
    type: SET_POKEMON,
    payload,
});

export const setLoading = (payload)=>({
    type: SET_LOADING,
    payload,
})

export const setFavorite = (payload)=>  ({
    type: SET_FAVORITE,
    payload,
})


export const getPokemonWithDetails = (pokemon = []) => async (dispatch) => {
       const pokemonDetails = await Promise.all(pokemon.map( pokemon => getPokemonDetails(pokemon)))
        
       dispatch(setPokemon(pokemonDetails))


}