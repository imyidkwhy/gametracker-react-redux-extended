import * as actionTypes from './actionTypes'

const defaultState = [
   
]

const gamesReducer = (state = defaultState, action) =>{
    switch(action.type){
      case  actionTypes.ADD_GAME:
        return [...state, action.payload]
            case actionTypes.DELETE_GAME:
                return state.filter((game) => game.id !== action.payload) 
                case actionTypes.ADD_FAVORITE:
                    return state.map(game => 
                      game.id === action.payload 
                        ? { ...game, isFavorite: !game.isFavorite } 
                        : game
                    );
                    case actionTypes.DELETE_ALL_GAMES: 
                      return []
            default:
               return state
    }
}
export default gamesReducer