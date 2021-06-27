import styled from 'styled-components';

// estilo para todos os cards
export const Cards = styled.div`
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fill, minmax(200px, auto));
    place-items: center;
    justify-content: center;
    &:before, &after {
        display: none;
    }
`

// estilo individual de cada card
export const Card = styled.div`
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 250px;
    height: 100%;
    justify-content: center;
    border-image-slice: 1;
    border-radius: 5px;
    background: rgba(255,255,255,0.55);
    border: 1px solid rgba(0,0,0,0.13);
    transition: .5s;
    clear: both;
    &:hover{
        box-shadow: 0 2px 14px 0 #bfbfbf;
    }
`

// estilo das imagens do card
export const Image = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px 0;
    clear: both;
    > img {
        max-width: 100%;
        height: 100%;
    }
`

// estilo do nome do jogo no card
export const Nome = styled.div`
    position: relative;
    margin: 0 20px;
    min-height: 45px;
    text-align: center;
    font-weight: bold;
    color: #6441A5;
    clear: both;
`

// estilo dos preços de cada card
export const Preco = styled.div`
    position: relative;
    text-align: center;
    margin: 20px;
    font-weight: bold;
    font-size: 1.2em;
    color: #f05a28;
    clear: both;
`

// estilo do botão de adicionar ao carrinho
export const Button = styled.div`
    height: 40px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    font-size: 0.8em;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 20px;
    cursor: pointer;
    background: linear-gradient(to right, #f05a28 50%, #6441A5 50%);
    background-size: 200% 100%;
    color: white;
    transition: all 1s ease;
    background-position: right bottom;
    &:hover{
        background-position: left bottom; 
    }
`