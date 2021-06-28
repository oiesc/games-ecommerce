import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../store/Carrinho';
import { Cards, Ordem } from './Container.style';
import ItemContainer from './ItemContainer';
import { setDetalhe } from '../../store/Carrinho/detalhes';

const Container = () => {

    const dispatch = useDispatch();

    const [order, setOrder] = useState(1);
    // pegar os games no redux
    const games = useSelector((state) => state.games);
    const carrinho = useSelector((state) => state.carrinho);

    // adicionar itens ao carrinho
    function addItemCart(game) {
        let aux = true;
        // se existir itens no carrinho, verificar se o item já está adicionado
        if (carrinho.length > 0) {
            carrinho.map(item => {
                if (item.id === game.id)
                    return aux = false; // se existir o item, desabilitar a opção de adiciona-lo novamente
                return null;
            })
        }
        // confirmar adição de item no carrinho
        if (aux === true)
            confirmAddItem(game);
        return aux;
    }

    // adicionar itens aos detalhes do pedido do produto
    function addDetalhe(game) {
        const { id, price } = game
        dispatch(setDetalhe({ id, price, qtde: 1, partialPrice: price }))
    }

    // efetiva adição do item ao carrinho
    function confirmAddItem(game) {
        dispatch(addItem(game))
        addDetalhe(game)
    }

    // exibir os produtos
    return (
        <>
            <Ordem>
                <div>
                    <select onChange={e => setOrder(e.target.value)}>
                        <option value="1">Ordem Alfabética</option>
                        <option value="2">Menores Preços</option>
                        <option value="3">Maiores Preços</option>
                        <option value="4">Melhor Avaliados</option>
                    </select>
                </div>
            </Ordem>
            <Cards>
                {games.map(game => {
                    return (
                        <ItemContainer key={game.id} game={game} addItemCart={addItemCart} />
                    )
                })}
            </Cards>
        </>
    )
}

export default Container
