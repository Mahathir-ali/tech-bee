import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../Images/logo.png";
import googleLogo from "../../../Images/Group 573.png";
import Header from "../../Shared/Header/Header";

const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const { registerUser, signInWithGoogle } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  };
  const handleRegisterSubmit = (e) => {
    if (registerData.password !== registerData.confirmPassword) {
      alert("Password didn't match ");
      return;
    }
    registerUser(
      registerData.email,
      registerData.password,
      registerData.name,
      history
    );
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  return (
    <>
      <Header></Header>
      <Container>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="" />
        </Box>
        <Typography
          variant="h5"
          sx={{ textAlign: "center", mt: 20, fontWeight: 600 }}
        >
          Complete Your Registration
        </Typography>
        <Box className="form_body">
          <form onSubmit={handleRegisterSubmit}>
            <TextField
              sx={{ width: "300px", mb: 3, mt: 3 }}
              id="standard-basic"
              label="Name"
              variant="standard"
              name="name"
              onBlur={handleOnBlur}
              type="text"
            />
            <br />
            <TextField
              sx={{ width: "300px", mb: 3, mt: 3 }}
              id="standard-basic"
              label="Email Address"
              variant="standard"
              name="email"
              onBlur={handleOnBlur}
              type="email"
            />
            <br />

            <TextField
              sx={{ width: "300px", mb: 3 }}
              id="standard-basic"
              label="Password"
              name="password"
              onBlur={handleOnBlur}
              variant="standard"
              type="password"
            />
            <br />
            <TextField
              sx={{ width: "300px", mb: 3 }}
              id="standard-basic"
              label="Re-type Password"
              name="confirmPassword"
              onBlur={handleOnBlur}
              variant="standard"
              type="password"
            />
            <br />
            <Button
              style={{
                background: " linear-gradient(#56CCF2, #78ffd6)",
                color: "#000",
                width: "100%",
              }}
              type="submit"
            >
              Register
            </Button>
          </form>

          <p sx={{ mt: 3 }}>
            Already have a account?
            <Link style={{ color: "#F63E7B" }} to="/login">
              Please Login
            </Link>
          </p>

          <p>----------------OR-----------------</p>
          <Button
            onClick={handleGoogleSignIn}
            style={{
              border: "1px solid #000",
              borderRadius: "30px",
              color: "#000",
              fontWeight: 600,
            }}
          >
            <img
              style={{ width: "20%", paddingRight: "30px" }}
              src={googleLogo}
              alt=""
            />
            Continue with google
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Register;
