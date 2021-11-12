import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Footer.css";
import logo from "../../../Images/logo.png";

const Footer = () => {
  return (
    <Box className="footer">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <img style={{ width: "30%" }} src={logo} alt="" />
          <Typography variant="h6">TECH BEE</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Quick Links</Typography>
          <Box>
            <a href="/">Home</a>
            <br />
            <a href="/">All Products</a>
            <br />
            <a href="/">Contact us</a>
            <br />
            <a href="/">New Product</a>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Location</Typography>
          <Typography variant="body2">
            <span className="location">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            P808 Ct-16 Town NEW MARKET, DHAKA-1200, DHAKA
          </Typography>
          <Typography variant="body2">
            <span className="location">
              <i className="fas fa-phone-alt"></i>
            </span>
            0112-1122-1256
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
