import CartIcon from '../../assets/cart-icon.svg';
import { Card, Image, Nome, Preco, Button } from './Container.style';
import React from 'react';
import { useSelector } from 'react-redux';

const ItemContainer = ({ game, addItemCart }) => {

    const { id, price, name, image } = game;

    const carrinho = useSelector((state) => state.carrinho);

    // verificar itens para mudar botão
    function verifyCart(game) {
        let aux = true;
        // se existir itens no carrinho, verificar se o item já está adicionado
        if (carrinho.length > 0) {
            carrinho.map(item => {
                if (item.id === game)
                    return aux = false; // se existir o item, troca o botão de adicionar
                return null;
            })
        }
        return aux;
    }

    return (
        <Card>
            <Image>
                {/*pegar imagens no assets a partir do endereço informado pelo JSON*/}
                <img src={require('../../assets/' + image).default} alt={name} />
            </Image>
            <Nome> {name} </Nome>
            <Preco> R$ {price.toFixed(2)} </Preco>
            {verifyCart(id) ?
                <Button onClick={() => addItemCart(game)}>
                    <img src={CartIcon} alt="Colocar no carrinho" />
                    Colocar no carrinho
                </Button>
                : <Button itemadd>
                    Jogo colocado no carrinho!
                </Button>
            }
        </Card>
    )
}

export default ItemContainer
