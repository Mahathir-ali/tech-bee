import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { Container, Grid, Paper, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import "./MyOrders.css";

const paperStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);
  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(
      `https://shielded-anchorage-63737.herokuapp.com/orders?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [control, user.email]);

  const handleDelete = (id) => {
    fetch(`https://shielded-anchorage-63737.herokuapp.com/orders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          // eslint-disable-next-line no-restricted-globals
          confirm("Are You sure? you want to delete this item?");
          setControl(!control);
        }
      });
  };

  return (
    <Container>
      <Grid container spacing={4}>
        {myOrders.map((orders) => (
          <Grid item xs={12} md={4} key={orders._id}>
            <Paper
              className="paper_body"
              style={paperStyle}
              elevation={2}
              //   sx={{ py: 5 }}
            >
              <Box className="order">
                <Box>
                  <img style={{ width: "100%" }} src={orders.img} alt="" />
                </Box>
                <Box className="order-detail">
                  <Typography
                    // sx={{ fontWeight: 600 }}
                    variant="body2"
                    gutterBottom
                    component="div"
                  >
                    {orders.name}
                  </Typography>

                  <Typography variant="h6" gutterBottom component="div">
                    <span style={{ color: "#efbd43", fontWeight: 600 }}>
                      ${orders.number}
                    </span>
                  </Typography>
                  <Button variant="text" color="warning">
                    {orders.status}
                  </Button>
                  <Button
                    className="btn"
                    onClick={() => handleDelete(orders._id)}
                    variant="contained"
                  >
                    Cancel
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MyOrders;
