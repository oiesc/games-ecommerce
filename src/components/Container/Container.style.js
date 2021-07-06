import styled from 'styled-components';
import ArrowDown from '../../assets/arrow-down-icon.svg';

// estilo para todos os cards
export const Cards = styled.section`
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
export const Card = styled.article`
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
        box-shadow: 0 2px 14px 2px #a1a1a1;
    }
`

// estilo das imagens do card
export const Image = styled.figure`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px 0;
    margin: 0;
    clear: both;
    > img {
        max-width: 100%;
        height: 100%;
    }
`

// estilo do nome do jogo no card
export const Nome = styled.h1`
    position: relative;
    margin: 0 20px;
    min-height: 45px;
    text-align: center;
    font-weight: bold;
    color: #f05a28;
    clear: both;
`

// estilo dos preços de cada card
export const Preco = styled.h2`
    position: relative;
    text-align: center;
    margin: 10px 0px 20px 0px;
    font-weight: bold;
    font-size: 1.2em;
    color: #6441A5;
    clear: both;
`

// estilo score
export const Score = styled.p`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    z-index: 10;
    margin: 0 0 10px 0;
    font-size: 0.8em;
    font-weight: bold;
    color: gray;
`

// estilo do botão de adicionar ao carrinho
export const Button = styled.button`
    font-family: inherit;
    height: 50px;
    border: none;
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
    margin: 10px 20px;
    cursor: ${props => props.itemadd ? 'normal' : 'pointer'};
    background: ${props => props.itemadd
        ? "#2ECC40"
        : "linear-gradient(to right, #2ECC40 50%, #6441A5 50%)"};
    background-size: 300% 100%;
    color: white;
    transition: all 1s ease;
    background-position: right bottom;
    &:hover{
        background-position: left bottom; 
    }
    & img {
        max-height: 60%;
    }
`
// Titulo da pagina
export const Title = styled.div`
    display: flex;
    margin-bottom: 20px;
    justify-self: start;
    & h1 {
        font-size: 1.5em;
        margin: 0;
        color: #f05a28;
    }
    & h1:first-child {
        color: #6441A5;
        margin-right: 5px;
        font-weight: bold;
    }
`

export const Ordem = styled.div`
    display: flex;
    margin-bottom: 25px;
    justify-self: end;
    z-index: 10;
    > div {
        overflow: hidden;
    }
    > div select {
        border: 1px solid rgba(0,0,0,0.13);
        width: 180px;
        height: 40px;
        padding: 0 10px;
        background: url(${ArrowDown}) no-repeat right #ddd;
        -webkit-appearance: none;
        background-position-x: 160px;
        color: #6441A5;
    }
    > div select:focus{
        border: 1px solid rgba(0,0,0,0.13);
        box-shadow: none;
        outline: none;
    }
    > div select::focus-visible {
        border: 1px solid rgba(0,0,0,0.13);
        box-shadow: none;
        outline: none;
    }
    > div select option {
        border: 1px solid rgba(0,0,0,0.13);
        outline: none;
        box-shadow: none;
    }
`