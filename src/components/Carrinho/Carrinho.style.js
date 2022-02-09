import styled from 'styled-components';

// estilo para todos os cards
export const Cards = styled.section`
    /* display: grid; */
    place-items: center;
    justify-content: center;
`

// estilo individual de cada card
export const Card = styled.article`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr;
    width: 100%;
    justify-content: center;
    border-image-slice: 1;
    background: rgba(255,255,255,0.55);
    border: 1px solid rgba(0,0,0,0.13);
    border-bottom: none;
    transition: .5s;
`

// estilo das imagens do card
export const Image = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    border-top: 1px solid rgba(0,0,0,0.13);
    border-right: 1px solid rgba(0,0,0,0.13);
    font-weight: bold;
    background: ${props => props.header ? '#242526' : 'transparent'};
    color: ${props => props.header ? '#ddd' : 'inherit'};
    > figure {
        margin: 0;
        > img {
        max-width: 100%;
        max-height: 100px;
        }
    }
`

// estilo do nome do jogo no card
export const Nome = styled.section`
    display: flex;
    justify-content: start;
    align-items: center;
    position: relative;
    text-align: left;
    font-weight: bold;
    padding: 0 20px;
    color: #f05a28;
    border-top: 1px solid rgba(0,0,0,0.13);
    border-right: 1px solid ${props => props.header ? 'rgba(255,255,255,0.13)' : 'rgba(0,0,0,0.13)'};
    background: ${props => props.header ? '#242526' : 'transparent'};
    & h1 {
        margin: 0;
    }
`

// estilo dos preços de cada card
export const Preco = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.2em;
    text-align: center;
    background: ${props => props.header ? '#242526' : 'transparent'};
    color: ${props => props.header ? '#ddd' : '#6441A5'};
    border-top: 1px solid rgba(0,0,0,0.13);
    border-right: 1px solid ${props => props.header ? 'rgba(255,255,255,0.13)' : 'rgba(0,0,0,0.13)'};
    background: ${props => props.header ? '#242526' : 'transparent'};
    & h2 {
        font-size: 1em;
        margin: 0;
    }
`
// remover item
export const Remove = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.header ? '#ddd' : 'gray'};
    font-weight: bold;
    text-align: center;
    padding: 0;
    border-top: 1px solid rgba(0,0,0,0.13);
    background: ${props => props.header ? '#242526' : 'transparent'};
    > div {
        cursor: pointer;
        transition: .3s;
    }
    > div:hover{
        color: #FF4136;
    }
    & button {
        border: none;
        cursor: pointer;
        background: transparent;
        margin: 0;
        padding: 0;
    }
`

// Titulo da pagina
export const Title = styled.header`
    display: flex;
    margin-bottom: 20px;
    width: 100%;
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

// detalhes da compra
export const Detalhes = styled.section`
    margin: 0 -1px;
    position: relative;
    display: flex;
    justify-content: flex-end;
    text-align: right;
    padding: 0 20px;
    border: 1px solid rgba(0,0,0,0.13);
    background: rgba(255,255,255,0.55);
    width: calc(100% - 40px);
    > div {
        > div {
            margin: 10px 0;
            display: flex;
            justify-content: flex-end;
            align-items: baseline;
            color: #111;
            > div {
                margin-left: 10px;
                font-size: 1.2em;
            }
            
            > div:first-child {
                font-weight: bold;
                color: #0074D9;
            }
        }
    }
`

// quantidade de itens
export const Quantidade = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    border-top: 1px solid rgba(0,0,0,0.13);
    border-right: 1px solid ${props => props.header ? 'rgba(255,255,255,0.13)' : 'rgba(0,0,0,0.13)'};
    background: ${props => props.header ? '#242526' : 'transparent'};
    color: #ddd;
    padding: 0 10px;
    > div {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5em;
        color: #f05a28;
        cursor: pointer;
        transition: .3s;
        user-select: none;
        border-radius: 5px;
        border: 1px solid rgba(0,0,0,0.13);
        padding-bottom: 3px;  
        margin: 0 5px;
        width: 50px;
        height: 47px;
        background: rgba(255,255,255,0.55);
        color: #6441A5;
        cursor: unset;
        user-select: auto;
    }
    & button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        width: 30px;
        height: 30px;
        margin: 0 5px;
        border-radius: 5px;
        color: #f05a28;
        cursor: pointer;
        transition: .3s;
        user-select: none;
        border: 1px solid rgba(0,0,0,0.13);
        &:hover{
        color: #6441a5;
    }
    }
`

// estilo do botão de finalizar compra
export const Button = styled.button`
    font-family: inherit;
    height: 50px;
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
    margin-right: 0;
    max-width: 200px;
    cursor: pointer;
    border: ${props => props.finalizar ? 'none' : '1px solid rgba(0,0,0,0.13)'};
    background: ${props => props.finalizar ?
        "linear-gradient(to right, #0074D9 50%, #2ECC40 50%)" : "transparent"};
    background-size: 300% 100%;
    color: ${props => props.finalizar ? '#fff' : '#6441A5'};
    transition: all 1s ease;
    background-position: right bottom;
    &:hover{
        background-position: left bottom; 
        opacity: ${props => props.finalizar ? '0.9' : '1'};
        color: ${props => props.finalizar ? '#fff' : '#f05a28'};
    }
    & img {
        max-height: 80%;
    }
`