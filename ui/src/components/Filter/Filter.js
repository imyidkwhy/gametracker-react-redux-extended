import { useDispatch } from 'react-redux';
import './Filter.css'
import { setTitleFilter, selectTitleFilter, resetFilter, setPriceFilter, selectPriceFilter, selectOnlyFavoriteFilter, setOnlyFavoriteFilter } from '../../redux/slices/filterSlice';
import { useSelector } from 'react-redux';
const Filter = () => {
    const dispatch = useDispatch()
    const titleFilter = useSelector(selectTitleFilter)
    const priceFilter = useSelector(selectPriceFilter)
    const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)
    const handleTitleFilterChange = (e) =>{
        dispatch(setTitleFilter(e.target.value))
    }
    const handlePriceFilterChange = (e) =>{
        dispatch(setPriceFilter(e.target.value))
    }
    const handleOnlyFavoriteFilter = (e) =>{
        dispatch(setOnlyFavoriteFilter(e.target.checked))
    }
    const handleResetFilter = () =>{
        dispatch(resetFilter())
    }
    return ( 
        <div className="app-block  filter">
        <div className='filter-row'>

            <div className='filter-group'>
                <input type='text' value={titleFilter} placeholder='filter by text...' onChange={handleTitleFilterChange}/>
           
            </div>
            <div className='filter-group'>
                <input type='text' value={priceFilter} placeholder='filter by price...' onChange={handlePriceFilterChange}/>
           
            </div>
            <div className='filter-group'>
            <label>
                <input type='checkbox' checked={onlyFavoriteFilter} onChange={handleOnlyFavoriteFilter}>              
                </input>
                Only Favorite
            </label>
            </div>
            <button onClick={handleResetFilter}>Reset</button>
        </div>
        </div>
     );
}
 
export default Filter 