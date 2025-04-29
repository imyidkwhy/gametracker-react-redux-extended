import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux'
import { addGame, deleteGame } from '../../redux/games/actionCreators'
import gamesData from '../../data/games.json'
import './GameForm.css'
import createGameWithId from '../../utils/createGameWithId';
const GameForm = () =>{
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const dispatch = useDispatch()
    const handleAddRandomGame = () =>{
        const randomIndex = Math.floor(Math.random() * gamesData.length)
        const randomGameWithId = createGameWithId(gamesData[randomIndex])
        dispatch(addGame(randomGameWithId))
    }
    const sendForm = (e) =>{
        e.preventDefault()
        const game =  createGameWithId({title, price})
        dispatch(addGame(game))
        if(title && price){
            setTitle('')
            setPrice('')

           
 
            
        }
        dispatch(deleteGame(game))
        if(title && price !== 0){
            return [0]
        }

    }
    return(
        <div className="app-block game-form">
            <h2>
                Add a new game  
            </h2>
            <form  onSubmit={sendForm}>
                <div>
                    <label htmlFor='title'>Title:</label>
                    <input type='text' id='title' value={title } onChange={(e) => setTitle(e.target.value)}/>
                 </div>
                 <div>
                    <label htmlFor='price'>price:</label>
                    <input type='text' id='price' value={price} onChange={(e) => setPrice(e.target.value)}/>
                 </div>
                 <button type='submit'>Add Game</button>
                 <button type='button' onClick={handleAddRandomGame}>Random Game</button>
            </form>
        </div>
    )
}
export default GameForm