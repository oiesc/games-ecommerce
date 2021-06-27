import { configureStore, combineReducers } from '@reduxjs/toolkit'
import games from './Games'
import carrinho from './Carrinho'

// redux
const reducer = combineReducers({
    games: games,
    carrinho: carrinho,
});

const store = configureStore({
    reducer,
})

export default store