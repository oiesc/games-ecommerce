import React from 'react'
import { Wrapper, Logo, NavLink } from './Header.style'
import GamesIcon from '@material-ui/icons/Games';

const Header = () => {
    return (
        <Wrapper>
            <Logo>
                <NavLink exact to="/">
                    <div><GamesIcon style={{ fontSize: '2em' }} /></div>
                    <div>a ~ Z games</div>
                </NavLink>
            </Logo>
        </Wrapper>
    )
}

export default Header
