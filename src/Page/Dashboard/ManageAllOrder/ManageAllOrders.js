import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useAuth from "../../../hooks/useAuth";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ManageAllOrders = () => {
  const [allOrder, setAllOrder] = useState([]);
  const { user } = useAuth();
  const [status, setStatus] = useState("");
  // const [orderId, setOrderId] = useState("");
  const [control, setControl] = useState(false);
  //   console.log(status);
  useEffect(() => {
    fetch(`https://shielded-anchorage-63737.herokuapp.com/allOrders`)
      .then((res) => res.json())
      .then((data) => setAllOrder(data));
  }, [control]);

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleDelete = (id) => {
    fetch(`https://shielded-anchorage-63737.herokuapp.com/${id}`, {
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

  const handleUpdate = (orderId) => {
    fetch(
      `https://shielded-anchorage-63737.herokuapp.com/statusUpdate/${orderId}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ status }),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.matchedCount) {
          alert("Status Updated");
        }
      });
  };

  return (
    <>
      <h1>All Orders</h1>
      <TableContainer component={Paper}>
        <Table sx={{ me: "20px" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>E-mail (Name)</TableCell>
              <TableCell align="right">Product Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allOrder.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.email}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.number}</TableCell>
                <TableCell align="right">
                  <input
                    onChange={handleStatus}
                    type="text"
                    defaultValue={row.status}
                  />
                </TableCell>
                <TableCell align="right">
                  <Button onClick={() => handleUpdate(row._id)}>Update</Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    style={{ color: "red" }}
                    onClick={() => handleDelete(row._id)}
                  >
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ManageAllOrders;
