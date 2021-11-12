import { TextField, Button } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <h2>Make An Admin</h2>

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
