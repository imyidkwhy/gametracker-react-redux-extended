import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";
import { useSelector } from 'react-redux'
import './GameList.css'
import { useDispatch } from 'react-redux'
import { selectOnlyFavoriteFilter, selectPriceFilter, selectTitleFilter, setOnlyFavoriteFilter } from "../../redux/slices/filterSlice";
import { deleteGame, addFavorite, clearAllGames } from '../../redux/slices/gamesSlice'
const GameList = () =>{
    const games = useSelector((state) => state.games)
    const titleFilter = useSelector(selectTitleFilter)
    const priceFilter = useSelector(selectPriceFilter)
    const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)
    const dispatch = useDispatch()
    const handleDeleteGame = (id) =>{
        dispatch(deleteGame(id))        
    }
    const handleAddFavorite = (id) =>{
        dispatch(addFavorite(id))
    }
    
    const handleDeleteAllGames = (id) =>{
        dispatch(clearAllGames(id))
    }
    const filteredGames = games.filter((game) => {
        const matchesTitle = game.title
            .toLowerCase()
            .includes(titleFilter.toLowerCase());
            
    const gamePriceString = String(game.price);
    const matchesPrice = gamePriceString
    .includes(priceFilter)
        const matchesFavorite = onlyFavoriteFilter ? game.isFavorite : true
        return matchesTitle && matchesPrice && matchesFavorite
    });
    const highlightMatch = (text, filter ) =>{
        if(!filter) return text
        const regex = new RegExp(`(${filter})`, 'gi')
        return text.split(regex).map((substring, i) =>{
            if(substring.toLowerCase() === filter.toLowerCase()){
                return(
                    <span key={i} className="highlight">{substring}</span>
                )
            }
            return substring
        })
    }
    return (
        <div className="app-block game-list">
        <h2>Game List </h2>
        <div className="delete-all-container">
        {filteredGames.length === 0 ? (
                 ''
            ) : (
                <li className="delete-all-column">  <button onClick={() => handleDeleteAllGames()}>Delete all</button> </li>)}
        </div>
         
            {filteredGames.length === 0 ? (
                <p>no games played</p>
            ) : (
               
                <ul> 
                 
                {filteredGames.map((game, i) => (
                    <li key={game.id}> 
                        <div className='game-info'> {++i}. {highlightMatch(game.title, titleFilter)} <strong> {highlightMatch(game.price, priceFilter)}<span>$</span> </strong></div>
                        <span onClick={() => handleAddFavorite(game.id)}>
                        {
                            game.isFavorite ? (
                                <BsBookmarkStarFill className="star-icon"/>
                            ) : (
                                <BsBookmarkStar className="star-icon"/>
                            )
                         } 
                        </span>
                         
                        <div className='game-actions'> <button  onClick={() => handleDeleteGame(game.id)}> Delete </button>  </div>
                        
                    </li>
                     
                ))}   
                 
                </ul> 
            )}
             
             
        </div>
    )
}
export default GameList