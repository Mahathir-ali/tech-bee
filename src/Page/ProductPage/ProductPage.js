import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import Products from "../Products/Products";
import Header from "../Shared/Header/Header";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // console.log(products);
  return (
    <>
      <Header></Header>
      <Container sx={{ mt: 5 }}>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Products key={product._id} product={product}></Products>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ProductPage;
