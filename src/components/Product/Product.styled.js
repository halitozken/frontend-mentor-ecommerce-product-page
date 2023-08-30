import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 70%;
  margin: auto;
  margin-top: 72px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin-top: 0px;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  width: 450px;
  border-radius: 1.5em;

  @media only screen and (max-width: 768px) {
    width: 100%;
    border-radius: 0px;
    margin-top: 0px;
  }
`;

export const Thumbnail = styled.img`
  width: 90px;
  border-radius: 1em;

  &:hover {
    opacity: 0.6;
  }
`;

export const Wrap = styled.div`
  margin-left: 24px;
`;

export const Images = styled.div`
  display: flex;
  margin-top: 20px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const ProductInfo = styled.div`
  margin-left: 5%;

  @media only screen and (max-width: 768px) {
    margin: 0px 24px;
  }
`;

export const Brand = styled.h4`
  color: #ff7d1a;
  letter-spacing: 2px;
`;

export const Model = styled.h1`
  color: #1d2025;
  font-size: 44px;

  @media only screen and (max-width: 768px) {
    font-size: 34px;
  }
`;

export const Detail = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: hsl(219, 9%, 45%);
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-bottom: 8px;

  @media only screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const PriceDiscount = styled.div`
  display: flex;
`;

export const Price = styled.div`
  font-weight: 700;
  font-size: 24px;
`;

export const Discount = styled.div`
  display: flex;
  align-items: center;
  color: #ff7d1a;
  background-color: hsl(25, 100%, 94%);
  padding: 2px 8px;
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

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0px 24px;
  }
`;

export const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f6f8fc;
  padding: 1em 2.1em 1.1em;
  border-radius: 5px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const Amount = styled.div`
  font-weight: 700;
  padding: 0px 36px;
`;

export const AddToCart = styled.div`
  display: flex;
  padding: 1em 2.1em 1.1em;
  border: none;
  border-radius: 5px;
  background-color: #ff7d1a;
  color: white;
  font-weight: 700;
  box-shadow: rgba(255, 125, 26, 0.5) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 0px 1px;
  margin-left: 24px;

  &:active {
    opacity: 0.6;
  }

  @media only screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-left: 0px;
    margin-top: 14px;
    margin-bottom: 34px;
  }
`;

export const LeftArrow = styled.img`
  position: absolute;
  top: 32%;
  left: 4%;
  background-color: white;
  padding: 5px;
  border-radius: 50%;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
export const RightArrow = styled.img`
  position: absolute;
  right: 4%;
  top: 32%;
  background-color: white;
  padding: 5px;
  border-radius: 50%;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const SmallWrapper = styled.div`
  &:hover {
    opacity: 0.4;
  }
`;

export const Small = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 22px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;