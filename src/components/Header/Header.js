import React from 'react'
import { Wrapper, Logo, NavLink, RightIcons } from './Header.style'
import GamesIcon from '@material-ui/icons/Games';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector } from 'react-redux';

const Header = () => {
    const length = useSelector(state => state.carrinho.length);
    return (
        <Wrapper>
            <Logo>
                <NavLink exact to="/">
                    <div><GamesIcon style={{ fontSize: '2em' }} /></div>
                    <div>a ~ Z games</div>
                </NavLink>
            </Logo>
            <RightIcons>
                <NavLink exact to="/carrinho">
                    <div>
                        <ShoppingCartIcon style={{ fontSize: '2em' }} />
                    </div>
                    <div> {length} </div>
                </NavLink>
            </RightIcons>
        </Wrapper>
    )
}

export default Header
