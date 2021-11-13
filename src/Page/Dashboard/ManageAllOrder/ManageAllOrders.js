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
import { useForm } from "react-hook-form";
import DeleteIcon from "@mui/icons-material/Delete";

const ManageAllOrders = () => {
  const [allOrder, setAllOrder] = useState([]);
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const [orderId, setOrderId] = useState("");
  const [control, setControl] = useState(false);
  //   console.log(status);
  useEffect(() => {
    fetch(`https://shielded-anchorage-63737.herokuapp.com/allOrders`)
      .then((res) => res.json())
      .then((data) => setAllOrder(data));
  }, [control]);

  const handleOrderId = (id) => {
    setOrderId(id);
    console.log(id);
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

  const onSubmit = (data) => {
    console.log(data, orderId);
    fetch(`https://shielded-anchorage-63737.herokuapp.com/${orderId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.matchedCount) {
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
                <td>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <select
                      onClick={() => handleOrderId(row?._id)}
                      {...register("status")}
                    >
                      <option value="done">Done</option>
                      <option value={row?.status}>{row?.status}</option>
                      <option value="approve">approve</option>
                    </select>
                    <input type="submit" />
                  </form>
                </td>
                {/* <TableCell align="right">
                  <Button>Update</Button>
                </TableCell> */}
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
