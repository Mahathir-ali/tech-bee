import { Container, Typography } from "@mui/material";
import React from "react";
import "./SocialMedia.css";
import "animate.css";
import { Box } from "@mui/system";
import fb from "../../../Images/banner/Vector.png";
import insta from "../../../Images/banner/Vector-1.png";
import youtube from "../../../Images/banner/Vector-2.png";
const SocialMedia = () => {
  return (
    <>
      <Container sx={{ mt: 5 }} className="media_banner">
        <Typography
          className="animate__animated animate__bounceInDown media_title "
          variant="h4"
        >
          JOIN US & Follow us on Social Media for More Update
        </Typography>
        <Box className="media-icon">
          <Box className="icon_box">
            <a href="/">
              <img src={fb} alt="" />{" "}
            </a>
          </Box>
          <Box className="icon_box">
            <a href="/">
              <img src={insta} alt="" />
            </a>
          </Box>
          <Box className="icon_box">
            <a href="/">
              <img src={youtube} alt="" />
            </a>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default SocialMedia;
