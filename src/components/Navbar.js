import * as React from "react"
import { NavbarBrand, NavItem } from "react-bootstrap";
import Container from 'react-bootstrap/Container'
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import Navbar from 'react-bootstrap/Navbar'
import styled from "styled-components";

const StyledNav = styled.nav`
`;

function Nav() {
    return (
        <StyledNav>
            <Container>
                <NavbarBrand href="/">Album Roulette</NavbarBrand>
                <NavbarToggle/>
                <NavbarCollapse className="justify-content-end">
                    <text>Logged in as <a href="/login">Username</a></text>
                </NavbarCollapse>
            </Container>
        </StyledNav>
    );
}

export default Nav;