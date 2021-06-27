import { configureStore, combineReducers } from '@reduxjs/toolkit'
import games from './Games'

// redux
const reducer = combineReducers({
    games: games,
});

const store = configureStore({
    reducer,
})

export default store