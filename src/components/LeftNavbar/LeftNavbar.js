import React from 'react';
import { Wrapper, NavLink, Menu, Count } from './LeftNavbar.style';
import { useSelector } from 'react-redux';
import { bool, func } from 'prop-types';

function LeftNavbar({ open, setOpen }) {

    // receber tamanho do carrinho (total de itens adicionados)
    const length = useSelector(state => state.carrinho.length);

    return (
        <Wrapper open={open}>
            <Menu>
                <ul>
                    <li><NavLink exact to="/" onClick={() => setOpen(false)}>Loja</NavLink></li>
                    <li><NavLink exact to="/carrinho" onClick={() => setOpen(false)}>Meu Carrinho<Count>({length})</Count></NavLink></li>
                </ul>
            </Menu>
        </Wrapper>
    );
}
LeftNavbar.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};
export default LeftNavbar