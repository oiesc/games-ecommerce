import gamesMock from '../../mocks/products.json';
const { createSlice, } = require('@reduxjs/toolkit');

const gamesSlice = createSlice({

    // importar o products.json e colocar no hook
    name: 'games',
    initialState: gamesMock,

    reducers: {

    }
})

// eslint-disable-next-line no-empty-pattern
export const { } = gamesSlice.actions

export default gamesSlice.reducer

// caso o json esteja em um endereço web, usar outra alternativa (redux saga)