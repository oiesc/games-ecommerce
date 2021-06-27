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
        box-shadow: 0 2px 14px 2px #a1a1a1;
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
    margin: 10px 0px 20px 0px;
    font-weight: bold;
    font-size: 1.2em;
    color: #f05a28;
    clear: both;
`
// remover item
export const Remove = styled.div`
    cursor: pointer;
    color: red;
    text-align: center;
    margin-bottom: 20px;
`

// Titulo da pagina
export const Title = styled.div`
    display: flex;
    margin-top: -20px;
    margin-bottom: 20px;
    & p {
        font-size: 1.5em;
        margin: 0;
        color: #f05a28;
    }
    & p:first-child {
        color: #6441A5;
        margin-right: 5px;
        font-weight: bold;
    }
`