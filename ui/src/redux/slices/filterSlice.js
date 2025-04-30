import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    title: '',
    price: ''
}

const name = 'name '


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
        resetFilter: (state) => {
         return initialState
        }
    }
})
export const {setTitleFilter, resetFilter, setPriceFilter} = filterSlice.actions
export const selectTitleFilter = (state) => state.filter.title
export const selectPriceFilter = (state) => state.filter.price
export default filterSlice.reducer
