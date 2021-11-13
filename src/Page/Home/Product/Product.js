import { Button, Grid, Paper, Typography, Box } from "@mui/material";
import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
const paperStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};
const Product = ({ item }) => {
  const { name, description, price, img, _id } = item;
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper
          className="paper"
          style={paperStyle}
          elevation={0}
          sx={{ py: 5 }}
        >
          <Box className="card-img">
            <img src={img} alt="" />
          </Box>
          <Box className="card-body">
            <Typography
              sx={{ fontWeight: 600 }}
              variant="h5"
              gutterBottom
              component="div"
            >
              {name}
            </Typography>

            <Typography
              sx={{ textAlign: "left" }}
              variant="caption"
              display="block"
              gutterBottom
            >
              {description}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              <span style={{ color: "#efbd43", fontWeight: 600 }}>
                ${price}
              </span>
            </Typography>
            <Link to={`/details/${_id}`}>
              <Button variant="contained">
                <i className="fas fa-shopping-cart"></i>Buy Now
              </Button>
            </Link>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default Product;
