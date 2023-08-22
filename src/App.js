import React from "react";
import { Container } from "./App.styled";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Product/Product";

const App = () => {
  return (
    <Container>
      <Navbar />
      <Product />
    </Container>
  );
};

export default App;
