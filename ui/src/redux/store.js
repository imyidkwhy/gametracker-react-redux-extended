import { configureStore } from '@reduxjs/toolkit'
import gamesReducer from './games/reducer'
import filterSlice from './slices/filterSlice'

const store = configureStore ({
    reducer:{
        games: gamesReducer,
        filter: filterSlice,
    }
})
export default store