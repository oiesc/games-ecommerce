import React, { } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../store/Carrinho';
import { Cards } from './Container.style';
import ItemContainer from './ItemContainer';

const Container = () => {

    const dispatch = useDispatch();

    // pegar os games no redux
    const games = useSelector((state) => state.games);

    // adicionar itens ao carrinho
    function addItemCart(game) {
        console.log(game.id)
        dispatch(addItem(game))
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
