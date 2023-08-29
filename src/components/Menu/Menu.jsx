import React from "react";
import {
  Container,
  Background,
  MenuWrapper,
  MenuItem,
  Close,
} from "./Menu.styled";

import close from "../../images/icon-close.svg";

const Menu = ({ isOpen, SetIsOpen }) => {
  const handleClick = () => {
    if (isOpen === false) {
      SetIsOpen(true);
    } else {
      SetIsOpen(false);
    }
  };

  return (
    <Container>
      <MenuWrapper>
        <Close src={close} alt="" onClick={handleClick} />
        <MenuItem>Collections</MenuItem>
        <MenuItem>Men</MenuItem>
        <MenuItem>Collections</MenuItem>
        <MenuItem>Women</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Contact</MenuItem>
      </MenuWrapper>
      <Background />
    </Container>
  );
};

export default Menu;
