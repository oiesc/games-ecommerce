const { createSlice, current } = require('@reduxjs/toolkit');

const detalhesSlice = createSlice({
    name: 'detalhe',
    initialState: [{ totalItems: 0, subTotalPrice: 0, totalPrice: 0, frete: 0 }],

    reducers: {
        // cada vez que um jogo for adicionado, ele vai pro array
        setDetalhe: (state, action) => {
            const { id } = action.payload
            if (!state[id]) {
                // coloca os valores recebidos no state
                state.push(action.payload)
            }
        },

        // se um jogo for removido, ele é retirado do array
        removeDetalhe: (state, action) => {
            return state.filter(item => item.id !== action.payload.id)
        },

        // calcula frete dependendo do valor ou quantidade de produtos
        calculaFrete: (state) => {
            if (state[0].subTotalPrice > 250)
                state[0].frete = 0;
            else
                state[0].frete = state[0].totalItems * 10 // segundo a regra de negócio, abaixo de 250 reais, cada produto custa 10 reais de frete
        },

        // calcular subvalor total dos produtos
        calculaSubTotal: (state) => {
            // reset
            state[0].subTotalPrice = 0;
            state[0].totalItems = 0;
            // verificar todo o array para atualizar os valores dinamicamente em tempo real
            current(state).map(function (item, i) {
                if (i > 0) { // como a posição 0 do array é reservada, procurar depois dela
                    let x = Math.pow(10, 2 || 2);
                    state[0].totalItems += state[i].qtde // verifica cara array e adicionar todos os itens ao total
                    state[i].partialPrice = state[i].price * state[i].qtde // adicionar o valor do total de itens
                    state[i].partialPrice = (Math.round(state[i].partialPrice * x) / x);
                    state[0].subTotalPrice += state[i].partialPrice // receber novo subtotal
                    state[0].subTotalPrice = (Math.round(state[0].subTotalPrice * x) / x);
                }
                return state
            })
        },

        // calcula valor final
        calculaValorFinal: (state) => {
            let x = Math.pow(10, 2 || 2);
            state[0].totalPrice = state[0].subTotalPrice + state[0].frete
            state[0].totalPrice = (Math.round(state[0].totalPrice * x) / x);
        },

        adicionarItem: (state, action) => {
            // percorrer o array e buscar a posição onde estao os valores de qntidade e preços temporarios
            current(state).map(function (item, i) {
                if (i > 0) { // como a posição 0 do array é reservada, procurar depois dela
                    if (item.id === action.payload) {
                        state[i].qtde += 1 // adicionar + 1 a quantidade de itens
                    }
                }
                return state
            })
        },

        removerItem: (state, action) => {
            current(state).map(function (item, i) {
                if (i > 0) {
                    if (item.id === action.payload) {
                        if (state[i].qtde > 1)
                            state[i].qtde -= 1
                    }
                }
                return state
            })
        },

    }
})

export const { setDetalhe, removeDetalhe, calculaFrete, calculaValorFinal, adicionarItem, removerItem, calculaSubTotal } = detalhesSlice.actions

export default detalhesSlice.reducer