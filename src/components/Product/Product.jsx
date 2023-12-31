import React, { useState } from "react";
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
  Image,
  PriceDiscount,
  LeftArrow,
  RightArrow,
  Thumbnail,
  Wrap,
  SmallWrapper,
  Small,
} from "./Product.styled";

import big1 from "../../images/image-product-1.jpg";
import big2 from "../../images/image-product-2.jpg";
import big3 from "../../images/image-product-3.jpg";
import big4 from "../../images/image-product-4.jpg";
import small1 from "../../images/image-product-1-thumbnail.jpg";
import small2 from "../../images/image-product-2-thumbnail.jpg";
import small3 from "../../images/image-product-3-thumbnail.jpg";
import small4 from "../../images/image-product-4-thumbnail.jpg";
import minus from "../../images/icon-minus.svg";
import plus from "../../images/icon-plus.svg";
import cart from "../../images/icon-cart-button.svg";
import left from "../../images/icon-previous.svg";
import right from "../../images/icon-next.svg";

import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/features/cart/cartSlice";
import { setOpen } from "../../redux/features/carousel/carouselSlice";

const Product = () => {
  const [image, setImage] = useState("image1");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const carousel = useSelector((state) => state.carousel);
  const product = {
    brand: "SNEAKER COMPANY",
    model: "Fall Limited Edition Sneakers",
  };

  const handleClick = (e) => {
    setImage(e.target.className);
    console.log(e.target.className);
  };

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else if (type === "inc") {
      quantity < 10 && setQuantity(quantity + 1);
    }
  };

  const handleCart = () => {
    dispatch(
      addProduct({
        product,
        quantity,
        price: 125,
      })
    );
  };

  const handleCarousel = () => {
    if (carousel.isOpen === false) {
      dispatch(setOpen(true));
    } else {
      dispatch(setOpen(false));
    }
  };

  const handleRightClick = () => {
    if (image === "image1") {
      setImage("image2");
    } else if (image === "image2") {
      setImage("image3");
    } else if (image === "image3") {
      setImage("image4");
    } else if (image === "image4") {
      setImage("image1");
    }
  };

  const handleLeftClick = () => {
    if (image === "image1") {
      setImage("image4");
    } else if (image === "image4") {
      setImage("image3");
    } else if (image === "image3") {
      setImage("image2");
    } else if (image === "image2") {
      setImage("image1");
    }
  };

  return (
    <Container>
      <ImageWrapper>
        <LeftArrow src={left} onClick={handleLeftClick} />
        <Image
          src={big1}
          alt=""
          className="image1"
          style={{
            display: image === "image1" ? true : "none",
          }}
          onClick={handleCarousel}
        />
        <Image
          src={big2}
          alt=""
          className="image2"
          style={{
            display: image === "image2" ? true : "none",
          }}
          onClick={handleCarousel}
        />
        <Image
          src={big3}
          alt=""
          className="image3"
          style={{
            display: image === "image3" ? true : "none",
          }}
          onClick={handleCarousel}
        />
        <Image
          src={big4}
          alt=""
          className="image4"
          style={{
            display: image === "image4" ? true : "none",
          }}
          onClick={handleCarousel}
        />

        <RightArrow src={right} onClick={handleRightClick} />
        <Small>
          <SmallWrapper>
            <img
              className="image1"
              src={small1}
              alt=""
              width={90}
              style={{
                borderRadius: "1em",
                border: image === "image1" ? "4px solid orange" : null,
              }}
              onClick={(e) => handleClick(e)}
            />
          </SmallWrapper>
          <SmallWrapper>
            <img
              className="image2"
              src={small2}
              alt=""
              width={90}
              style={{
                borderRadius: "1em",
                border: image === "image2" ? "4px solid orange" : null,
              }}
              onClick={(e) => handleClick(e)}
            />
          </SmallWrapper>
          <SmallWrapper>
            <img
              className="image3"
              src={small3}
              alt=""
              width={90}
              style={{
                borderRadius: "1em",
                border: image === "image3" ? "4px solid orange" : null,
              }}
              onClick={(e) => handleClick(e)}
            />
          </SmallWrapper>
          <SmallWrapper>
            <img
              className="image4"
              src={small4}
              alt=""
              width={90}
              style={{
                borderRadius: "1em",
                border: image === "image4" ? "4px solid orange" : null,
              }}
              onClick={(e) => handleClick(e)}
            />
          </SmallWrapper>
        </Small>
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
          <PriceDiscount>
            <Price>$125.00</Price>
            <Discount>50%</Discount>
          </PriceDiscount>
          <Preprice>$250.00</Preprice>
        </PriceWrapper>

        <CartWrapper>
          <AmountWrapper>
            <img
              src={minus}
              alt=""
              style={{ width: "12px", height: "6px" }}
              onClick={() => handleQuantity("dec")}
            />
            <Amount>{quantity}</Amount>
            <img
              src={plus}
              alt=""
              style={{ width: "12px", height: "12px" }}
              onClick={() => handleQuantity("inc")}
            />
          </AmountWrapper>
          <AddToCart onClick={handleCart}>
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
