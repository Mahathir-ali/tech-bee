import { TextField, Button, Alert } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://shielded-anchorage-63737.herokuapp.com/admin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setEmail("");
          setSuccess(true);
        }
      });
    e.preventDefault();
  };

  return (
    <div>
      <h2>Make An Admin</h2>
      {success && <Alert severity="success">Made Admin Successfully!</Alert>}
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: "30%", mb: 3 }}
          id="standard-basic"
          label="E-mail"
          type="email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <br />
        <Button
          style={{
            background: " linear-gradient(#56CCF2, #78ffd6)",
            color: "#000",
          }}
          type="submit"
          variant="contained"
        >
          Make Admin
        </Button>
      </form>
    </div>
  );
};

export default MakeAdmin;
