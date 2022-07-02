import React from 'react';
import { Image, Nome, Preco, Remove, Quantidade } from './Carrinho.style';
import Clear from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const ItemCarrinho = ({ item, removeItemCart, detalhes, handleQtde }) => {

    const { id, name, image, price } = item;
    return (
        <>
            <Image>
                {/*pegar imagens no assets a partir do endereço informado pelo JSON*/}
                <figure><img src={require('../../assets/' + image)} alt={name} /></figure>
            </Image>
            <Nome style={{ fontSize: '1.5em' }}> <h1>{name}</h1> </Nome>
            <Preco> <h2 className='mobile'>Total: </h2><h2>R$ {price.toFixed(2)}</h2> </Preco>
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
            <Preco> <h2 className='mobile'>Subtotal: </h2> <h2> 
                {
                    detalhes.map(item => {
                        if (id !== item.id)
                            return null
                        return (`R$ ${item.partialPrice.toFixed(2)}`)
                    })
                }
            </h2> </Preco>
            <Remove><button onClick={() => removeItemCart(item)}><Clear style={{ fontSize: '2em', color: 'red' }} /><p className='mobile'>Remover </p></button></Remove>
        </>
    )
}

export default ItemCarrinho
