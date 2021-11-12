import { Button, Grid, Paper, Typography } from "@mui/material";
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
          className="paper_body"
          style={paperStyle}
          elevation={0}
          sx={{ py: 5 }}
        >
          <img style={{ width: "100%" }} src={img} alt="" />
          <Typography
            sx={{ fontWeight: 600 }}
            variant="h5"
            gutterBottom
            component="div"
          >
            {name}
          </Typography>

          <Typography
            sx={{ textAlign: "center" }}
            variant="caption"
            display="block"
            gutterBottom
          >
            {description}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            <span style={{ color: "#efbd43", fontWeight: 600 }}>${price}</span>
          </Typography>
          <Link to={`/details/${_id}`}>
            <Button variant="contained">Buy Now</Button>
          </Link>
        </Paper>
      </Grid>
    </>
  );
};

export default Product;
