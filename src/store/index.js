import { configureStore, combineReducers } from '@reduxjs/toolkit'
import games from './Games'
import carrinho from './Carrinho'
import detalhes from './Carrinho/detalhes';

// redux
const reducer = combineReducers({
    games: games,
    carrinho: carrinho,
    detalhes: detalhes,
});

const store = configureStore({
    reducer,
})

export default store