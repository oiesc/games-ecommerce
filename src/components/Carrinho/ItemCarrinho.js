import React from 'react';
import { Card, Image, Nome, Preco, Remove } from './Carrinho.style';

const ItemCarrinho = ({ item, removeItemCart }) => {
    const { name, id, image, price } = item;
    return (
        <Card>
            <Image>
                {/*pegar imagens no assets a partir do endereço informado pelo JSON*/}
                <img src={require('../../assets/' + image).default} alt={name} />
            </Image>
            <Nome> {name} </Nome>
            <Preco> R$ {price} </Preco>
            <Remove onClick={() => removeItemCart(id)}>Remover Item</Remove>
        </Card>
    )
}

export default ItemCarrinho
