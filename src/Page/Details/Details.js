import { Grid, Typography, Box, Container, Alert } from "@mui/material";
import "./Details.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../Shared/Header/Header";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Details = () => {
  const { user } = useAuth();
  const [detail, setDetail] = useState([]);
  const [order, setOrder] = useState(false);
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          setOrder(true);
          reset();
        }
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/singleProduct/${id}`)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, []);
  return (
    <div>
      <Header></Header>
      <Container>
        <h1>Welcome</h1>
        {order && (
          <Alert severity="success">
            Order Successfully.<i className="far fa-smile-beam"></i> Check your
            order on My orders page.
          </Alert>
        )}
        <Grid style={{ margin: "auto" }} container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box className="product-container" style={{ width: "500px" }}>
              <img src={detail.img} alt=""></img>
              <Box className="text">
                <Typography className="title" variant="h5">
                  {detail.name}
                </Typography>
                <Typography variant="caption">{detail.description}</Typography>
                <Typography className="price" variant="h6">
                  ${detail.price}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <form className="form-body" onSubmit={handleSubmit(onSubmit)}>
              <input
                defaultValue={detail.name}
                {...register("name")}
                className="p-2 m-2 w-50 input-field"
              />
              <input
                defaultValue={detail.description}
                {...register("description")}
                className="p-2 m-2 w-50 input-field"
              />
              <input
                defaultValue={detail.img}
                {...register("img")}
                className="p-2 m-2 w-50 input-field"
              />
              <input
                defaultValue={detail.price}
                {...register("number")}
                className="p-2 m-2 w-50 input-field"
              />
              <input
                defaultValue={user?.email}
                {...register("email")}
                className="p-2 m-2 w-50 input-field"
              />
              <input
                {...register("address")}
                placeholder="Address"
                className="p-2 m-2 w-50 input-field"
              />
              <input
                {...register("phone")}
                placeholder="Phone Number"
                className="p-2 m-2 w-50 input-field"
              />
              <br />

              <input className="submit-btn" type="submit" />
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Details;
