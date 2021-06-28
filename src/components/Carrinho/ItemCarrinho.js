import React from 'react';
import { Image, Nome, Preco, Remove, Quantidade } from './Carrinho.style';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const ItemCarrinho = ({ item, removeItemCart, detalhes, handleQtde }) => {

    const { id, name, image, price } = item;
    return (
        <>
            <Image>
                {/*pegar imagens no assets a partir do endereço informado pelo JSON*/}
                <img src={require('../../assets/' + image).default} alt={name} />
            </Image>
            <Nome> {name} </Nome>
            <Preco> R$ {price.toFixed(2)} </Preco>
            <Quantidade>
                <div onClick={() => handleQtde(-1, id)}>-</div>
                <div>
                    {
                        detalhes.map(item => {
                            if (id !== item.id)
                                return null
                            return (item.qtde)
                        })
                    }
                </div>
                <div onClick={() => handleQtde(1, id)}>+</div>
            </Quantidade>
            <Preco>
                {
                    detalhes.map(item => {
                        if (id !== item.id)
                            return null
                        return (item.partialPrice.toFixed(2))
                    })
                }
            </Preco>
            <Remove><div onClick={() => removeItemCart(item)}><DeleteForeverIcon style={{ fontSize: '2em' }} /></div></Remove>
        </>
    )
}

export default ItemCarrinho
