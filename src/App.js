import React from "react";
import { Container } from "./App.styled";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Product/Product";
import Carousel from "./components/Carousel/Carousel";
import { useSelector } from "react-redux";

const App = () => {
  const carousel = useSelector((state) => state.carousel);
  return (
    <>
      {carousel.isOpen && <Carousel />}
      <Container>
        <Navbar />
        <Product />
      </Container>
    </>
  );
};

export default App;
