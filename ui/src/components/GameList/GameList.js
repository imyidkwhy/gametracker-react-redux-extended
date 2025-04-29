import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";
import { useSelector } from 'react-redux'
import './GameList.css'
import { useDispatch } from 'react-redux'
import { deleteGame, addFavorite, deleteAllgames } from '../../redux/games/actionCreators'
import { selectTitleFilter } from "../../redux/slices/filterSlice";
const GameList = () =>{
    const games = useSelector((state) => state.games)
    const titleFilter = useSelector(selectTitleFilter)
    const dispatch = useDispatch()
    const handleDeleteGame = (id) =>{
        dispatch(deleteGame(id))
        
    }
    const handleAddFavorite = (id) =>{
        dispatch(addFavorite(id))
    }
    const handleDeleteAllGames = (id) =>{
        dispatch(deleteAllgames(id))
    }
    const filteredGames = games.filter((game) => {
        const matchesTitle = game.title
            .toLowerCase()
            .includes(titleFilter.toLowerCase());
         return matchesTitle
    });

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
                        <div className='game-info'> {++i}. {game.title}  <strong>{game.price}$</strong></div>
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