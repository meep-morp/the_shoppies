import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import logo from "../assets/shoppies_logo.png";

const Nav = () => {
    return (
        <NavContainer>
            <NavLink to="/">
                <img src={logo} alt="logo" className="logo" />
            </NavLink>
            <div className="links">
                <NavLink to="/">CATEGORIES</NavLink>
                <NavLink to="/about">ABOUT</NavLink>
                <NavLink to="/sign-in">SIGN IN</NavLink>
            </div>
        </NavContainer>
    )
}

export default Nav;

const NavContainer = styled.nav`
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 110px;
    width: 97%;
    padding: 0 20px;

    .logo {
        height: 100px;
        width: auto;
    }

    .links {
        width: 30%;
        display: flex;
        justify-content: space-around;
    }

    a {
        color: black;
        text-decoration: none;
        font-size: 1.5rem;
        border-bottom: 2px solid transparent;

        &:hover {
            border-bottom: 2px solid #eab75c;
            transition: ease 0.5s;
        }
    }

`