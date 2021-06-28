import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../store/Carrinho';
import { Title, Cards, Ordem } from './Container.style';
import ItemContainer from './ItemContainer';
import { setDetalhe } from '../../store/Carrinho/detalhes';

const Container = () => {

    const dispatch = useDispatch();

    // pegar os games no redux
    const games = useSelector((state) => state.games);
    const carrinho = useSelector((state) => state.carrinho);

    // organizar itens ordenados
    const [order, setOrder] = useState(1);
    const [sorted, setSorted] = useState(games);

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

    function ordenarItens(value) {
        switch (value) {
            case 1:
                const order1 = games.slice().sort((a, b) =>
                    + (a.name > b.name) ||
                    + (a.name === b.name) - 1
                )
                return setSorted(order1)
            case 2:
                const order2 = games.slice().sort((a, b) =>
                    + (a.price > b.price) ||
                    + (a.price === b.price) - 1
                )
                return setSorted(order2)
            case 3:
                const order3 = games.slice().sort((a, b) =>
                    + (a.price < b.price) ||
                    + (a.price === b.price) - 1
                )
                return setSorted(order3)
            case 4:
                const order4 = games.slice().sort((a, b) =>
                    + (a.score < b.score) ||
                    + (a.score === b.score) - 1
                )
                return setSorted(order4)
            default:
                return null
        }
    }

    // mudar ordem dos itens
    useEffect(() => {
        ordenarItens(Number(order))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [order])

    // exibir os produtos
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Title><p>Jogos Disponíveis</p></Title>

                <Ordem>
                    <div>
                        <select onChange={e => setOrder(e.target.value)}>
                            <option value="1">Ordem Alfabética</option>
                            <option value="2">Menores Preços</option>
                            <option value="3">Maiores Preços</option>
                            <option value="4">Mais Popular</option>
                        </select>
                    </div>
                </Ordem>
            </div>
            <Cards>
                {sorted.map(game => {
                    return (
                        <ItemContainer key={game.id} game={game} addItemCart={addItemCart} />
                    )
                })}
            </Cards>
        </>
    )
}
export default Container