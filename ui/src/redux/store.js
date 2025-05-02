import { configureStore } from '@reduxjs/toolkit'
import gamesSlice from './slices/gamesSlice'
import filterSlice from './slices/filterSlice'

const store = configureStore ({
    reducer:{
        games: gamesSlice,
        filter: filterSlice,

    }
})
export default store




