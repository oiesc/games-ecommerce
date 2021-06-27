import React, { } from 'react'
import { useSelector } from 'react-redux';
import { Cards, Card, Image, Nome, Preco, Button } from './Container.style';


const Container = () => {

    // pegar os games no redux
    const games = useSelector((state) => state.games)

    // exibir os produtos
    return (
        <Cards>
            {games.map(game => {
                const { id, name, price, image } = game
                return (
                    <Card key={id}>
                        <Image>
                            {/*pegar imagens no assets a partir do endereço informado pelo JSON*/}
                            <img src={require('../../assets/' + image).default} alt={name} />
                        </Image>
                        <Nome>
                            {name}
                        </Nome>
                        <Preco>
                            R$ {price}
                        </Preco>
                        <Button>Colocar no carrinho</Button>
                    </Card>
                )
            })}
        </Cards>
    )
}

export default Container
