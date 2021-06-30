import { configureStore, combineReducers } from '@reduxjs/toolkit'
import gamesReducer from './ducks/Games'
import carrinhoReducer from './ducks/Carrinho'
import detalhesReducer from './ducks/Carrinho/detalhes';
import handleOrderReducer from './ducks/OrderItems';

// redux
const reducer = combineReducers({
    games: gamesReducer,
    carrinho: carrinhoReducer,
    detalhes: detalhesReducer,
    handleOrder: handleOrderReducer,
});

const store = configureStore({
    reducer,
})

export default store