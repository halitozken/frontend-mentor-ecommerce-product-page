import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const Background = styled.div`
  width: 40%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const MenuWrapper = styled.div`
  width: 60%;
  height: 100%;
  background-color: white;
`;

export const Close = styled.img`
  margin: 20px;
`;

export const MenuItem = styled.div`
  font-weight: 700;
  padding: 20px;
`;
