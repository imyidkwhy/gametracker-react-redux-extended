import * as actionTypes from './actionTypes'
export const addGame = (newGame) =>({
    type: actionTypes.ADD_GAME,
    payload: newGame 
})
export const deleteGame = (id) =>({
        type: actionTypes.DELETE_GAME,
        payload: id
})

export const addFavorite = (id) =>({
    type: actionTypes.ADD_FAVORITE,
    payload: id
})

export const deleteAllgames = () =>({
    type: actionTypes.DELETE_ALL_GAMES,
    
})