import React from 'react';
import { Image, Nome, Preco, Remove, Quantidade } from './Carrinho.style';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const ItemCarrinho = ({ item, removeItemCart, detalhes, handleQtde }) => {

    const { id, name, image, price } = item;
    return (
        <>
            <Image>
                {/*pegar imagens no assets a partir do endereço informado pelo JSON*/}
                <figure><img src={require('../../assets/' + image).default} alt={name} /></figure>
            </Image>
            <Nome> <h1>{name}</h1> </Nome>
            <Preco> <h2>R$ {price.toFixed(2)}</h2> </Preco>
            <Quantidade>
                <button onClick={() => handleQtde(-1, id)}>
                    <RemoveIcon style={{ fontSize: '1.5em' }} />
                </button>
                <div>
                    {
                        detalhes.map(item => {
                            if (id !== item.id)
                                return null
                            return (item.qtde)
                        })
                    }
                </div>
                <button onClick={() => handleQtde(1, id)}>
                    <AddIcon style={{ fontSize: '1.5em' }} />
                </button>
            </Quantidade>
            <Preco> <h2>
                {
                    detalhes.map(item => {
                        if (id !== item.id)
                            return null
                        return (`R$ ${item.partialPrice.toFixed(2)}`)
                    })
                }
            </h2> </Preco>
            <Remove><button onClick={() => removeItemCart(item)}><DeleteForeverIcon style={{ fontSize: '2em' }} /></button></Remove>
        </>
    )
}

export default ItemCarrinho
