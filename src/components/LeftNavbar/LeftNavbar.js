import React from 'react'
import { Wrapper, NavLink, Menu } from './LeftNavbar.style'

function LeftNavbar() {
    return (
        <Wrapper>
            <Menu>
                <ul>
                    <li><NavLink exact to="/">Loja</NavLink></li>
                    <li><NavLink exact to="/meu-carrinho">Meu Carrinho</NavLink></li>
                </ul>
            </Menu>
        </Wrapper>
    );
}

export default LeftNavbar