import React from "react";
import {
  Container,
  Title,
  ProductWrapper,
  Wrapper,
  Model,
  PriceWrapper,
  Price,
  Text,
  Amount,
  TotalPrice,
  Checkout,
  ProductContainer,
  Empty,
  EmptyWrapper,
} from "./Cart.styled";

import product from "../../images/image-product-1.jpg";
import deleteIcon from "../../images/icon-delete.svg";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <Container>
      <Title>Cart</Title>
      <hr />
      <ProductContainer>
        {cart.total === 0 ? (
          <ProductWrapper>
            <EmptyWrapper>
              <Empty>Your cart is empty.</Empty>
            </EmptyWrapper>
          </ProductWrapper>
        ) : (
          <>
            <ProductWrapper>
              <img
                src={product}
                alt=""
                width={55}
                style={{ borderRadius: "5px" }}
              />
              <Wrapper>
                <Model>{cart.product.model}</Model>
                <PriceWrapper>
                  <Price>$125.00</Price>
                  <Text> x </Text>
                  <Amount>{cart.quantity}</Amount>
                  <TotalPrice>${cart.total}</TotalPrice>
                </PriceWrapper>
              </Wrapper>
              <img
                src={deleteIcon}
                alt=""
                width={14}
                height={18}
                style={{ marginTop: "16px" }}
              />
            </ProductWrapper>
            <Checkout>Checkout</Checkout>
          </>
        )}
      </ProductContainer>
    </Container>
  );
};

export default Cart;
