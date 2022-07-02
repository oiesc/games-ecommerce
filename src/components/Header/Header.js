import React from 'react'
import { Wrapper, WrapperIcon, Logo, NavLink, RightIcons } from './Header.style'
import GamesIcon from '@material-ui/icons/Games';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector } from 'react-redux';
import { bool, func } from 'prop-types';

const Header = ({ open, setOpen }) => {
    const length = useSelector(state => state.carrinho.length);
    return (
        <Wrapper>
            <WrapperIcon open={open} onClick={() => setOpen(!open)}>
                <div></div>
                <div></div>
                <div></div>
            </WrapperIcon>
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
Header.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};
export default Header
