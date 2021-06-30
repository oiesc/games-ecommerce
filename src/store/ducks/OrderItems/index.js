const { createSlice, } = require('@reduxjs/toolkit');

const gamesSlice = createSlice({

    name: 'games',
    initialState: { handleOrder: 1 },

    reducers: {
        handleOrder: (state, action) => {
            state.handleOrder = action.payload
        }
    }
})

export const { handleOrder } = gamesSlice.actions

export default gamesSlice.reducer