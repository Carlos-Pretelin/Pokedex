import { SET_FAVORITE, SET_LOADING, SET_POKEMON } from "../actions/types"

const initialState = {
    pokemon: [],
    loading: false,
}

export const pokemonReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_POKEMON:
            return {...state, pokemon: action.payload };
        case SET_LOADING:
            return{...state, loading: action.payload };
        case SET_FAVORITE:
            const newPokemonList = [...state.pokemon];
            const currentPokemonIndex = newPokemonList.findIndex((pokemon)=>{
                return pokemon.id === action.payload.pokemonId
            });
            if(currentPokemonIndex < 0){
                return state;
            }
            newPokemonList[currentPokemonIndex].favorite=!newPokemonList[currentPokemonIndex].favorite;
            return {...state, pokemon: newPokemonList}
        default:
            return state;    
    }
}