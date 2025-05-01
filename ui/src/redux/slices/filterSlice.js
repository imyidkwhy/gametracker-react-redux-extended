import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    title: '',
    price: '',
    onlyFavorite: false
}


const filterSlice = createSlice({
    name: 'filter', 
    initialState,
    reducers:{
        setTitleFilter: (state, action) => {
        state.title = action.payload
        },
        setPriceFilter: (state, action) => {
        state.price = action.payload
        },
        setOnlyFavoriteFilter: (state, action) => {
            state.onlyFavorite = action.payload
        },
        resetFilter: () => {
         return initialState
        }
    }
})
export const {setTitleFilter, resetFilter, setPriceFilter, setOnlyFavoriteFilter} = filterSlice.actions
export const selectTitleFilter = (state) => state.filter.title
export const selectPriceFilter = (state) => state.filter.price
export const selectOnlyFavoriteFilter = (state) => state.filter.onlyFavorite
export default filterSlice.reducer
