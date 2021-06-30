import React from 'react';
import { Wrapper, NavLink, Menu, Count } from './LeftNavbar.style';
import { useSelector } from 'react-redux';

function LeftNavbar() {

    // receber tamanho do carrinho (total de itens adicionados)
    const length = useSelector(state => state.carrinho.length);

    return (
        <Wrapper>
            <Menu>
                <ul>
                    <li><NavLink exact to="/">Loja</NavLink></li>
                    <li><NavLink exact to="/carrinho">Meu Carrinho<Count>({length})</Count></NavLink></li>
                </ul>
            </Menu>
        </Wrapper>
    );
}

export default LeftNavbar