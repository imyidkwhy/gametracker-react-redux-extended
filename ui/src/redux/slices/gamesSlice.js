import { createSlice, nanoid } from '@reduxjs/toolkit';

 
const initialState = [];

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
      addGame: (state, action) => {
        state.push(action.payload);
      },
      deleteGame:(state, action) =>{
      const index = state.findIndex((book) => book.id === action.payload)
      if(index !== -1){
        state.splice(index, 1)
      }
      },
      addFavorite: (state, action) => {
        const game = state.find(game => game.id === action.payload);
        if (game) {
          game.isFavorite = !game.isFavorite;
        }
      },
      clearAllGames: () =>{
        return []
      }
}})

export const {addGame, deleteGame, addFavorite, clearAllGames} =  gamesSlice.actions
export default gamesSlice.reducer

