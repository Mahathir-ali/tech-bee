import React, { useState } from "react";
import { Container, Box, TextField, Button, Alert } from "@mui/material";
const AddProduct = () => {
  const [addProduct, setAddProduct] = useState({});
  const [addSuccessful, setAddSuccessful] = useState(false);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newProduct = { ...addProduct };
    newProduct[field] = value;
    // console.log(newProduct);
    setAddProduct(newProduct);
  };
  const handleAddProduct = (e) => {
    const products = { ...addProduct };
    // console.log(products);
    fetch("https://shielded-anchorage-63737.herokuapp.com/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(products),
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
            Product Added Successfully<i className="far fa-smile-beam"></i>
          </Alert>
        )}
        <Box>
          <form onSubmit={handleAddProduct}>
            <TextField
              sx={{ width: "300px", mb: 3, mt: 3 }}
              id="standard-basic"
              label="Product Name"
              variant="standard"
              name="name"
              onBlur={handleOnBlur}
              type="text"
            />
            <br />
            <TextField
              sx={{ width: "300px", mb: 3, mt: 3 }}
              id="standard-basic"
              label="Product Description"
              variant="standard"
              name="description"
              onBlur={handleOnBlur}
              type="text"
            />
            <br />
            <TextField
              sx={{ width: "300px", mb: 3 }}
              id="standard-basic"
              label="Product Price"
              name="price"
              onBlur={handleOnBlur}
              variant="standard"
              type="number"
            />
            <br />
            <TextField
              sx={{ width: "300px", mb: 3 }}
              id="standard-basic"
              label="Image URL"
              name="img"
              onBlur={handleOnBlur}
              variant="standard"
              type="url"
            />
            <br />
            <Button
              style={{
                background: " linear-gradient(#56CCF2, #78ffd6)",
                color: "#000",
                width: "30%",
                marginRight: "5px",
              }}
              type="submit"
            >
              <i className="fas fa-plus"></i> ADD
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default AddProduct;
