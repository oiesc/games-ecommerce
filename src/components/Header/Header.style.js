import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom'

// estilo do header
export const Wrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1001;
    background: #242526;
    width: 100%;
    height: 65px;
    display: flex;
    align-items: center;
    border-image: linear-gradient(to right,#f05a28,#e80a89);
    border-width: 0 0 0.14285714285714285rem 0;
    border-style: solid;
    border-image-slice: 1;
`

// estilo da logo e nome do site no header
export const Logo = styled.div`
    margin-left: 15px;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    flex-basis: 100%;
    align-items: center;
    color: #DDD;
`

// estilo dos links no header
export const NavLink = styled(Link)`
    padding: 0;
    color: #DDD;
    display: flex;
    align-items: center;
    text-decoration: none !important;
    height: 100%;
    cursor: pointer;
    transition: .3s;
    > div {
        font-weight: bold;
        font-size: 1.2em;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #6441A5;
        transition: .3s;
    }
    > div:last-child {
        margin-left: 10px;
        color: #ddd;
    }
    &:hover div:first-child{
        color: #e80a89;
    }
`
export const RightIcons = styled.div`
    display: flex;
    margin-right: 15px;
    user-select: none;
    > a div:first-child {
        color: #f05a28;
    }
    > a div:last-child {
        position: absolute;
        color: white;
        margin-top: -12px;
        width: 19px;
        font-size: 0.8em;
        font-weight: normal;
    }
`

export const WrapperIcon = styled.div`
    display: none;
    
    div {
        width: 2em;
        height: 0.25em;
        background: white;
        border-radius: 10px;
        transition: all 0.3s linear;
        transform-origin: 1px;
        :first-child {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        :nth-child(2) {
            opacity: ${({ open }) => open ? '0' : '1'};
            transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
        }

        :nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }

    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 2rem;
        height: 2rem;
        margin-left: 20px;
        border: none;
        color: white;
        cursor: pointer;
        z-index: 10;
    }
`