import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../store/ducks/Carrinho';
import ItemCarrinho from './ItemCarrinho';
import CheckIcon from '@material-ui/icons/Check';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import { useHistory } from 'react-router-dom';
import {
    Button,
    Cards,
    Card,
    Title,
    Detalhes,
    Image,
    Nome,
    Preco,
    Remove,
    Quantidade,
} from './Carrinho.style';
import {
    removeDetalhe,
    calculaFrete,
    calculaValorFinal,
    calculaSubTotal,
    adicionarItem,
    removerItem
} from '../../store/ducks/Carrinho/detalhes';

const Carrinho = () => {

    // redrecionar 
    const history = useHistory();

    const dispatch = useDispatch();

    // pegar os itens que estao no carrinho
    const carrinho = useSelector(state => state.carrinho);

    // exibir detalhes da compra
    const detalhes = useSelector(state => state.detalhes);

    // como os valores totais estão na posição zero, só retornamos esses valores para impressão
    const { subTotalPrice, totalPrice, frete } = detalhes[0]

    // função para remover itens do carrinho
    function removeItemCart(game) {
        dispatch(removeItem(game)) // remove o item da página
        dispatch(removeDetalhe(game)) // remove os dados do carrinho
        dispatch(calculaSubTotal()) // refaz os calculos do subtotal
        dispatch(calculaFrete()) // refaz os calculso do frete
        dispatch(calculaValorFinal()) // refaz o calculo final
    }

    // função para aumentar/diminuir quantidade
    function handleQtde(type, id) {
        if (type === 1)
            dispatch(adicionarItem(id))
        else
            dispatch(removerItem(id))
        dispatch(calculaSubTotal())
        dispatch(calculaFrete())
        dispatch(calculaValorFinal())
    }

    // função para atualizar valores ao abrir a página de carrinho
    useEffect(() => {
        dispatch(calculaSubTotal())
        dispatch(calculaFrete())
        dispatch(calculaValorFinal())
    }, [dispatch])

    return (
        <article>
            {carrinho.length === 0 ?
                <section style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '2em',
                    textAlign: 'center',
                    flexWrap: 'wrap',
                }}>
                    <section style={{ width: '100%' }}><ShoppingCartIcon style={{
                        fontSize: '5em',
                        color: '#6441A5',
                    }} />
                    </section>
                    <section style={{
                        margin: '50px 0',
                        width: '100%',
                        color: '#f05a28',
                    }}> Você ainda não colocou nenhum jogo no carrinho </section>
                    <section style={{
                        width: '100%',
                        color: '#6441A5',
                    }}><SentimentDissatisfiedIcon style={{ fontSize: '1.5em' }} /></section>
                </section>
                :
                <>
                    <Cards>
                        <Title>
                            <h1> Carrinho de compras</h1>
                        </Title>
                        <Card>
                            <Image header style={{ border: 'none', fontSize: '0.8em' }}>PRODUTO</Image>
                            <Nome header style={{ borderTop: 'none', height: '100%' }}></Nome>
                            <Preco header style={{ borderTop: 'none', fontSize: '0.8em' }}>PREÇO UNITÁRIO</Preco>
                            <Quantidade header style={{ borderTop: 'none', fontSize: '0.8em' }}>QUANTIDADE</Quantidade>
                            <Preco header style={{ borderTop: 'none', fontSize: '0.8em' }}>SUBTOTAL</Preco>
                            <Remove header style={{ borderTop: 'none', fontSize: '0.8em' }}>REMOVER</Remove>
                            {carrinho.map(item => <ItemCarrinho key={item.id} item={item} removeItemCart={removeItemCart} detalhes={detalhes} handleQtde={handleQtde} />)}
                        </Card>
                        <Detalhes>
                            {<div>
                                <div>SubTotal: <div>R$ {subTotalPrice.toFixed(2)}</div></div>
                                <div>Frete: <div>R$ {frete.toFixed(2)}</div></div>
                                <div>Total: <div>R$ {totalPrice.toFixed(2)}</div></div>
                            </div>}
                        </Detalhes>
                        {/* Botões - apenas o de voltar para a página inicial tem ação */}
                        <section style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                            <Button onClick={() => history.push('/')}>Continuar Comprando</Button>
                            <Button finalizar style={{ paddingRight: '15px' }}><CheckIcon style={{ fontWeight: 'bold', marginRight: '5px' }} /> Finalizar Compra</Button>
                        </section>
                    </Cards>
                </>
            }
        </article>
    )
}

export default Carrinho
