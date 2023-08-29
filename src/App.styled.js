import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  width: 82%;
  height: auto;
  margin: auto;

  @media only screen and (max-width: 768px) {
    max-width: 768px;
    width: 100%;
  }
`;
