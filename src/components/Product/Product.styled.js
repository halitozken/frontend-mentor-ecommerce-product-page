import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 60%;
  margin: auto;
  margin-top: 72px;
`;

export const ImageWrapper = styled.div`
  flex: 1;
`;

export const Images = styled.div``;

export const ProductInfo = styled.div`
  flex: 1;
`;

export const Brand = styled.h4`
  color: #ff7d1a;
  letter-spacing: 2px;
`;

export const Model = styled.h1`
  color: #1d2025;
  font-size: 44px;
`;

export const Detail = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: hsl(219, 9%, 45%);
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Price = styled.div`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 8px;
`;

export const Discount = styled.div`
  color: #ff7d1a;
  background-color: hsl(25, 100%, 94%);
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 700;
  margin-left: 12px;
`;

export const Preprice = styled.div`
  text-decoration-line: line-through;
  color: hsl(219, 9%, 45%);
  font-weight: 700;
  margin-bottom: 24px;
`;

export const CartWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f6f8fc;
  padding: 10px 16px;
  border-radius: 5px;
`;

export const Amount = styled.div`
  font-weight: 700;
  padding: 0px 44px;
`;

export const AddToCart = styled.button`
  display: flex;

  padding: 12px 42px;
  border: none;
  border-radius: 5px;
  background-color: #ff7d1a;
  color: white;
  font-weight: 700;
  box-shadow: rgba(255, 125, 26, 0.5) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 0px 1px;
  margin-left: 24px;
`;
