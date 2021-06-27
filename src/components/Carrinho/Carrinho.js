import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../store/Carrinho';
import ItemCarrinho from './ItemCarrinho';
import { Cards, Title } from './Carrinho.style';

const Carrinho = () => {

    const dispatch = useDispatch();

    // pegar os itens que estao no carrinho
    const carrinho = useSelector(state => state.carrinho);

    // função para remover itens do carrinho
    function removeItemCart(id) {
        dispatch(removeItem(id))
    }

    return (
        <div>
            {carrinho.length === 0 ?
                "nenhum item adicionado ao carrinho"
                :
                <>
                    <Title>
                        <p> Carrinho </p><p> Clique em finalizar compra para efetuar o seu pedido. </p>
                    </Title>
                    <Cards>
                        {carrinho.map(item => <ItemCarrinho key={item.id} item={item} removeItemCart={removeItemCart} />)}
                    </Cards>
                </>
            }
        </div >
    )
}

export default Carrinho
