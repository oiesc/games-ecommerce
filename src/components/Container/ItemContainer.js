import CartIcon from '../../assets/cart-icon.svg';
import { Card, Image, Nome, Preco, Button } from './Container.style';
import React from 'react';

const ItemContainer = ({ game, addItemCart }) => {

    const { price, name, image } = game;
    return (
        <Card>
            <Image>
                {/*pegar imagens no assets a partir do endereço informado pelo JSON*/}
                <img src={require('../../assets/' + image).default} alt={name} />
            </Image>
            <Nome> {name} </Nome>
            <Preco> R$ {price} </Preco>
            <Button onClick={() => addItemCart(game)}>
                <img src={CartIcon} alt="Colocar no carrinho" />
                Colocar no carrinho
            </Button>
        </Card>
    )
}

export default ItemContainer
