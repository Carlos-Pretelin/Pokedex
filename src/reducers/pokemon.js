import { SET_FAVORITE, SET_LOADING, SET_POKEMON } from "../actions/types"
import { fromJS, setIn, getIn} from 'immutable';


const initialState = fromJS({
    pokemon: [],
    loading: false,
})

export const pokemonReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_POKEMON:
            //return {...state, pokemon: action.payload };
            return state.setIn(['pokemon'], fromJS(action.payload));
        case SET_LOADING:
            return{...state, loading: action.payload };
        case SET_FAVORITE:
            //const newPokemonList = [...state.pokemon];
            const currentPokemonIndex = state.get('pokemon').findIndex((pokemon)=>{
                return pokemon.get('id') === action.payload.pokemonId
            });
            if(currentPokemonIndex < 0){
                return state;
            }
            const isFavorite = state.getIn(['pokemon', currentPokemonIndex, 'favorite']);

            return state.setIn(['pokemon', currentPokemonIndex, 'favorite'], !isFavorite);
        case SET_LOADING:
            return state.setIn(['loading'], action.payload);
            
        default:
            return state;    
    }
}