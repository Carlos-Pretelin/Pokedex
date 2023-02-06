import { SET_LOADING, SET_POKEMON } from "../actions/types"

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
        default:
            return state;    
    }
}