import React, { useState } from "react";
import { Container, Box, TextField, Button, Alert } from "@mui/material";
import useAuth from "../../../hooks/useAuth";
const ProductReview = () => {
  const [review, setReview] = useState({});
  const [addSuccessful, setAddSuccessful] = useState(false);
  const { user } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReview = { ...review };
    newReview[field] = value;
    // console.log(newProduct);
    setReview(newReview);
  };
  const handleAddReview = (e) => {
    const reviews = { ...review };
    // console.log(products);
    fetch("https://shielded-anchorage-63737.herokuapp.com/reviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setAddSuccessful(true);
        }
      });
    e.preventDefault();
  };

  return (
    <>
      <Container>
        {addSuccessful && (
          <Alert severity="success">
            Review Successfully<i className="far fa-smile-beam"></i>
          </Alert>
        )}
        <Box>
          <form onSubmit={handleAddReview}>
            <TextField
              sx={{ width: "300px", mb: 3, mt: 3 }}
              id="standard-basic"
              // label="Product Name"
              variant="standard"
              value={user?.email}
              name="email"
              onBlur={handleOnBlur}
              type="text"
            />
            <br />
            <TextField
              sx={{ width: "300px", mb: 3, mt: 3 }}
              id="standard-basic"
              label="Type Your Name"
              variant="standard"
              name="name"
              onBlur={handleOnBlur}
              type="text"
            />
            <br />
            <TextField
              sx={{ width: "300px", mb: 3 }}
              id="filled-textarea"
              label="Description"
              multiline
              name="description"
              maxRows={4}
              onBlur={handleOnBlur}
              variant="filled"
            />
            <br />
            <TextField
              sx={{ width: "300px", mb: 3 }}
              id="standard-basic"
              label="Rating"
              name="rating"
              onBlur={handleOnBlur}
              variant="standard"
              // type="number"
            />

            <br />
            <Button
              style={{
                backgroundColor: "#F63E7B",
                color: "#FFF",
                width: "30%",
              }}
              type="submit"
            >
              Review
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default ProductReview;
