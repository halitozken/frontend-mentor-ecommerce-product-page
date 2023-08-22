import React from "react";
import { Container, Logo, MenuArea, MenuItem, Wrapper } from "./Navbar.styled";
import logo from "../../images/logo.svg";
import cart from "../../images/icon-cart.svg";
import profile from "../../images/image-avatar.png";

const Navbar = () => {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="" />
      </Logo>
      <MenuArea>
        <MenuItem>Collections</MenuItem>
        <MenuItem>Men</MenuItem>
        <MenuItem>Women</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Contact</MenuItem>
      </MenuArea>
      <Wrapper>
        <img src={cart} style={{ marginRight: "24px" }} alt="" />
        <img src={profile} style={{ width: "50px" }} alt="" />
      </Wrapper>
    </Container>
  );
};

export default Navbar;
