import React from "react";
import {
  Container,
  Images,
  AmountWrapper,
  Preprice,
  CartWrapper,
  PriceWrapper,
  Model,
  Brand,
  ProductInfo,
  AddToCart,
  Amount,
  Discount,
  Price,
  Detail,
  ImageWrapper,
} from "./Product.styled";

import big from "../../images/image-product-1.jpg";
import small1 from "../../images/image-product-1-thumbnail.jpg";
import small2 from "../../images/image-product-2-thumbnail.jpg";
import small3 from "../../images/image-product-3-thumbnail.jpg";
import small4 from "../../images/image-product-4-thumbnail.jpg";
import minus from "../../images/icon-minus.svg";
import plus from "../../images/icon-plus.svg";
import cart from "../../images/icon-cart-button.svg";

const Product = () => {
  return (
    <Container>
      <ImageWrapper>
        <img
          src={big}
          alt=""
          style={{ width: "350px", borderRadius: "1.5em" }}
        />
        <Images>
          <img
            src={small1}
            alt=""
            style={{ width: "80px", borderRadius: "1.5em" }}
          />
          <img
            src={small2}
            alt=""
            style={{ width: "80px", borderRadius: "1.5em" }}
          />
          <img
            src={small3}
            alt=""
            style={{ width: "80px", borderRadius: "1.5em" }}
          />
          <img
            src={small4}
            alt=""
            style={{ width: "80px", borderRadius: "1.5em" }}
          />
        </Images>
      </ImageWrapper>
      <ProductInfo>
        <Brand>SNEAKER COMPANY</Brand>
        <Model>
          Fall Limited Edition <br /> Sneakers
        </Model>
        <Detail>
          The low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </Detail>
        <PriceWrapper>
          <Price>$125.00</Price>
          <Discount>50%</Discount>
        </PriceWrapper>
        <Preprice>$250.00</Preprice>
        <CartWrapper>
          <AmountWrapper>
            <img src={minus} alt="" style={{ width: "12px", height: "6px" }} />
            <Amount>0</Amount>
            <img src={plus} alt="" style={{ width: "12px", height: "12px" }} />
          </AmountWrapper>
          <AddToCart>
            <img
              src={cart}
              alt=""
              style={{ width: "14px", height: "12px", marginRight: "14px" }}
            />
            Add to cart
          </AddToCart>
        </CartWrapper>
      </ProductInfo>
    </Container>
  );
};

export default Product;
