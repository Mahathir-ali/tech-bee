import React from "react";
import "./Banner.css";
import { Box } from "@mui/system";
import { Container, Typography, Button } from "@mui/material";
import "animate.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Container className="banner">
      <Box className="heading">
        <Typography
          className="animate__animated animate__fadeInDown banner_title"
          variant="h3"
        >
          Enjoy the clear sound & <br /> Live a happy life.
        </Typography>
        <br />
        <Typography
          className="animate__animated animate__fadeInDown banner_title"
          variant="h6"
        >
          click The Button to explore more
        </Typography>
        <div className="">
          <i className="fas fa-angle-double-down animate__animated animate__slideInDown"></i>
        </div>
        <Link to="/productPage">
          <Button style={{ width: "220px" }} className="explore-btn">
            Explore More<i className="fas fa-chevron-right"></i>
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Banner;
