import { Container, Grid, Typography } from "@mui/material";

import React, { useEffect, useState } from "react";
import Product from "../Home/Product/Product";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://shielded-anchorage-63737.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const size = 6;
  const items = products.slice(0, size);
  return (
    <>
      <Container sx={{ mt: 5 }}>
        <Typography
          variant="h2"
          style={{ opacity: ".5", marginBottom: "20px" }}
        >
          Our Products
        </Typography>
        <Grid container spacing={4}>
          {items.map((item) => (
            <Product key={item._id} item={item}></Product>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default AllProducts;
