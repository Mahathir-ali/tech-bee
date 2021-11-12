import React from "react";
import { Grid, Paper, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
const paperStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const Products = ({ product }) => {
  const { name, price, description, img, _id } = product;

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

export default Products;
