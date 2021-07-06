import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

// estilo da barra de menu lateral
export const Wrapper = styled.aside`
    position: fixed;
    width: 280px;
    top: 65px;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background: #18191a;
`

// estilo do menu na barra lateral
export const Menu = styled.nav`
    > ul {
        width: 100%;
        padding: 0;
        margin: 20px 0 0 0;
    }
    > ul li {
        position: relative;
        list-style: none;
    }
    > ul li:first-child {
        border-bottom: none;
    }
`

// estilo dos links na barra de menu lateral
export const NavLink = styled(Link)`
    padding: 0.5em 0 0.5em 25px;
    color: #DDD;
    display: flex;
    align-items: center;
    text-decoration: none !important;
    height: 100%;
    cursor: pointer;
    transition: .3s;
    &.active {
        background: #242526;
        color: #ba8fff;
    }
    &.active:after{
        content: "";
        height: 100%;
        width: 4px;
        background: linear-gradient(to bottom,#f05a28,#e80a89);
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
    }
    &:hover{
        background: #292a2b;
        color: #ba8fff;
    }
`

export const Count = styled.div`
    margin-left: 5px;
`