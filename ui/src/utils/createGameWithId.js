import {v4 as uuid4} from 'uuid'
const createGameWithId = (game) =>({
    ...game, 
    isFavorite: false,
    id: uuid4()
})
export default createGameWithId