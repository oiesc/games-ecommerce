import { createAction, createReducer } from '@reduxjs/toolkit';

// estado inicial do carrinho
const INITIAL_STATE = [];

// funçao de adicionar itens ao carrinho
export const addItem = createAction('ADD_ITEM');

// função de remover itens do carrinho
export const removeItem = createAction('REMOVE_ITEM');

export default createReducer(INITIAL_STATE, {
    [addItem.type]: (state, action) => [...state, action.payload],
    [removeItem.type]: (state, action) => state.filter(item => item.id !== action.payload),
});