import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../store/Carrinho';
import { Cards } from './Container.style';
import ItemContainer from './ItemContainer';
import { setDetalhe } from '../../store/Carrinho/detalhes';

const Container = () => {

    const dispatch = useDispatch();

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
        const { id, price, } = game
        dispatch(setDetalhe({ id, price, qtde: 1, partialPrice: price }))
    }

    // efetiva adição do item ao carrinho
    function confirmAddItem(game) {
        dispatch(addItem(game))
        addDetalhe(game)
    }

    // exibir os produtos
    return (
        <Cards>
            {games.map(game => {
                return (
                    <ItemContainer key={game.id} game={game} addItemCart={addItemCart} />
                )
            })}
        </Cards>
    )
}

export default Container
