import React, { useState } from "react";
import {
  Container,
  Wrapper,
  Big,
  Small,
  Background,
  SmallWrapper,
} from "../Carousel/Carousel.styled";

import { useDispatch } from "react-redux";
import { setOpen } from "../../redux/features/carousel/carouselSlice";
import big1 from "../../images/image-product-1.jpg";
import big2 from "../../images/image-product-2.jpg";
import big3 from "../../images/image-product-3.jpg";
import big4 from "../../images/image-product-4.jpg";
import small1 from "../../images/image-product-1-thumbnail.jpg";
import small2 from "../../images/image-product-2-thumbnail.jpg";
import small3 from "../../images/image-product-3-thumbnail.jpg";
import small4 from "../../images/image-product-4-thumbnail.jpg";

const Carousel = () => {
  const [image, setImage] = useState("small1");
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setOpen(false));
  };

  const handleClickImage = (e) => {
    setImage(e.target.className);
  };

  return (
    <Container>
      <Background onClick={handleClick} />
      <Wrapper>
        <Big>
          <img
            src={big1}
            alt=""
            width={500}
            style={{
              pointerEvents: "none",
              borderRadius: "1em",
              marginBottom: "14px",
              display: image === "small1" ? true : "none",
            }}
          />{" "}
          <img
            src={big2}
            alt=""
            width={500}
            style={{
              pointerEvents: "none",
              borderRadius: "1em",
              marginBottom: "14px",
              display: image === "small2" ? true : "none",
            }}
          />{" "}
          <img
            src={big3}
            alt=""
            width={500}
            style={{
              pointerEvents: "none",
              borderRadius: "1em",
              marginBottom: "14px",
              display: image === "small3" ? true : "none",
            }}
          />{" "}
          <img
            src={big4}
            alt=""
            width={500}
            style={{
              pointerEvents: "none",
              borderRadius: "1em",
              marginBottom: "14px",
              display: image === "small4" ? true : "none",
            }}
          />
        </Big>
        <Small>
          <SmallWrapper>
            <img
              className="small1"
              src={small1}
              alt=""
              width={90}
              style={{ borderRadius: "1em" }}
              onClick={(e) => handleClickImage(e)}
            />
          </SmallWrapper>
          <SmallWrapper>
            <img
              className="small2"
              src={small2}
              alt=""
              width={90}
              style={{ borderRadius: "1em" }}
              onClick={(e) => handleClickImage(e)}
            />
          </SmallWrapper>
          <SmallWrapper>
            <img
              className="small3"
              src={small3}
              alt=""
              width={90}
              style={{ borderRadius: "1em" }}
              onClick={(e) => handleClickImage(e)}
            />
          </SmallWrapper>
          <SmallWrapper>
            {" "}
            <img
              className="small4"
              src={small4}
              alt=""
              width={90}
              style={{ borderRadius: "1em" }}
              onClick={(e) => handleClickImage(e)}
            />
          </SmallWrapper>
        </Small>
      </Wrapper>
    </Container>
  );
};

export default Carousel;
