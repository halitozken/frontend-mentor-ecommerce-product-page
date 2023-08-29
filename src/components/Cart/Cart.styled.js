import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 14%;
  width: auto;
  height: auto;
  background-color: white;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  font-size: 24px;
  right: 1%;
  left: 1%;
  border-radius: 0.5em;
  z-index: 1;
  @media only screen and (min-width: 768px) {
    position: absolute;
    top: 10%;
    right: 5%;
    width: 375px;
    height: auto;
    border-radius: 0.5em;
    background-color: white;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
      rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    font-size: 24px;
  }
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-left: 12px;
  margin-top: 12px;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
`;

export const ProductWrapper = styled.div`
  display: flex;
  margin-top: 24px;
  margin-bottom: 24px;
  color: hsl(219, 9%, 45%);

  @media only screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 12px;
  margin-right: 12px;
`;

export const Model = styled.div`
  font-size: 18px;
`;

export const PriceWrapper = styled.div`
  display: flex;
`;
export const Price = styled.div`
  font-size: 18px;
  margin-right: 8px;
`;

export const Text = styled.div`
  font-size: 18px;
  margin-right: 8px;
`;

export const Amount = styled.div`
  font-size: 18px;
  margin-right: 8px;
`;

export const TotalPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: black;
`;

export const Checkout = styled.button`
  height: 50px;
  border: none;
  border-radius: 0.5em;
  color: white;
  font-weight: 700;
  font-size: 16px;
  background-color: #ff7d1a;
  margin-bottom: 22px;

  &:active {
    background-color: #5a5a5a;
  }
`;

export const Empty = styled.div`
  font-weight: 700;
  font-size: 16px;
`;
export const EmptyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15vh;
  margin: auto;
`;
