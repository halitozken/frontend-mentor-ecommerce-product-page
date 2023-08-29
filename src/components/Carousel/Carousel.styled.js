import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 10%;
`;

export const Big = styled.div``;

export const Small = styled.div`
  display: flex;
  justify-content: center;
`;

export const Background = styled.div`
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0px;
`;

export const SmallWrapper = styled.div`
  cursor: pointer;
  margin: 0px 14px;
  &:hover {
    opacity: 0.4;
  }
`;
