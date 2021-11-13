import React from "react";
import { TextField } from "@mui/material";
import Header from "../Shared/Header/Header";
import "./ContactUs.css";
const ContactUs = () => {
  return (
    <div>
      <Header></Header>
      <div className="contact_body">
        <h1>CONTACT US</h1>
        <p>FEEL FREE TO SEND US A MESSAGE OR ASK A QUESTION</p>
        <div className="inputs">
          <div>
            <div className="space">
              <TextField
                className="input"
                id="outlined-basic"
                size="small"
                label="Name"
                variant="outlined"
              />
            </div>
            <br />
            <div className="space">
              <TextField
                className="input"
                id="outlined-basic"
                size="small"
                label="E-Mail"
                variant="outlined"
              />
            </div>
          </div>
          <div>
            <div className="space">
              <TextField
                className="input"
                id="outlined-basic"
                size="small"
                label="Phone"
                variant="outlined"
              />
            </div>
            <br />
            <div className="space">
              {" "}
              <TextField
                className="input"
                id="outlined-basic"
                size="small"
                label="Address"
                variant="outlined"
              />
            </div>
          </div>
        </div>
        <br />
        <div className="message">
          <TextField
            className="textarea"
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={8}
          />
        </div>
        <div className="send-btn">
          {" "}
          <button className="btn">SEND</button>
          <button className="btn">CLEAR</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
