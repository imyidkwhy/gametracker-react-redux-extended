import { useDispatch } from 'react-redux';
import './Filter.css'
import { setTitleFilter, selectTitleFilter, resetFilter } from '../../redux/slices/filterSlice';
import { useSelector } from 'react-redux';
const Filter = () => {
    const dispatch = useDispatch()
    const titleFilter = useSelector(selectTitleFilter)

    const handleTitleFilterChange = (e) =>{
        dispatch(setTitleFilter(e.target.value))
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
            <button onClick={handleResetFilter}>Reset</button>
        </div>
        </div>
     );
}
 
export default Filter 