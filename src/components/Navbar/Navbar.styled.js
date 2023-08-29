import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #c4c2c2;

  @media only screen and (max-width: 768px) {
    margin-left: 14px;
    margin-right: 14px;
  }
`;

export const Logo = styled.div``;

export const MenuArea = styled.div`
  margin-left: 20px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  margin-right: 14px;
`;

export const MenuItem = styled.a`
  font-size: 14px;
  color: gray;
  font-weight: 400;
  padding-left: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
