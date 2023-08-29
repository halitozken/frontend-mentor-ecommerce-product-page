import React, { useState } from "react";
import {
  Container,
  Logo,
  MenuArea,
  MenuItem,
  Wrapper,
  MobileMenu,
} from "./Navbar.styled";
import logo from "../../images/logo.svg";
import cart from "../../images/icon-cart.svg";
import profile from "../../images/image-avatar.png";
import Cart from "../Cart/Cart";
import mobilemenu from "../../images/icon-menu.svg";
import Menu from "../Menu/Menu";

const Navbar = () => {
  const [showCart, SetShowCart] = useState(false);
  const [isOpen, SetIsOpen] = useState(false);

  const handleClick = () => {
    if (showCart === false) {
      SetShowCart(true);
    } else if (showCart === true) {
      SetShowCart(false);
    }
    console.log(showCart);
  };

  const handleMenuClick = () => {
    if (isOpen === false) {
      SetIsOpen(true);
    } else {
      SetIsOpen(false);
    }
  };

  return (
    <Container>
      <MobileMenu onClick={handleMenuClick}>
        <img src={mobilemenu} alt="" />
      </MobileMenu>
      {isOpen && <Menu isOpen={isOpen} SetIsOpen={SetIsOpen} />}
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
        <img
          src={cart}
          style={{
            marginRight: "24px",

            cursor: "pointer",
          }}
          alt=""
          onClick={handleClick}
        />
        {showCart && <Cart />}
        <img
          src={profile}
          style={{
            width: "50px",
            cursor: "pointer",
          }}
          alt=""
        />
      </Wrapper>
    </Container>
  );
};

export default Navbar;
