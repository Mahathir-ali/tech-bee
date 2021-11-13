import * as React from "react";
import "./Dashboard.css";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddProduct from "../AddProduct/AddProduct";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../../AdminRoute/AdminRoute";
import MyOrders from "../MyOrders/MyOrders";
import ManageAllOrders from "../ManageAllOrder/ManageAllOrders";
import ProductReview from "../ProductReview/ProductReview";
import Payment from "../Payment/Payment";
import userImg from "../../../Images/user.jpg";

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { user, admin, logOut } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="dashboard-links">
      <Toolbar />
      {user.photoURL ? (
        <img className="user_img" src={user.photoURL} alt="" />
      ) : (
        <img className="user_img" src={userImg} alt="" />
      )}
      <Typography variant="h6">{user.email}</Typography>
      <Box className="appbar_Text">
        <Button onClick={logOut} className="logOut-btn">
          Log out
        </Button>
      </Box>
      <Divider />
      <Box sx={{ my: 5 }}>
        <Link to="/productPage">
          <Button sx={{ mb: 3 }} color="inherit">
            All Product
          </Button>
        </Link>
        <Link to={`${url}`}>
          <Button sx={{ mb: 3 }} color="inherit">
            My Orders
          </Button>
        </Link>
        <Link to={`${url}/productReview`}>
          <Button sx={{ mb: 3 }} color="inherit">
            Review Product
          </Button>
        </Link>
        <Link to={`${url}/payment`}>
          <Button color="inherit">Make Payment</Button>
        </Link>
        {admin && (
          <Box sx={{ my: 5 }}>
            <Divider />
            <h6>ADMIN PANEL</h6>
            <Divider />
            <Link to={`${url}/makeAdmin`}>
              <Button sx={{ mb: 3 }} color="inherit">
                Make Admin
              </Button>
            </Link>
            <Link to={`${url}/addProduct`}>
              <Button sx={{ mb: 3 }} color="inherit">
                ADD Product
              </Button>
            </Link>
            <Link to={`${url}/manageOrder`}>
              <Button color="inherit">ALL Order</Button>
            </Link>
          </Box>
        )}
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className="bar"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <MyOrders></MyOrders>
          </Route>
          <Route exact path={`${path}/productReview`}>
            <ProductReview></ProductReview>
          </Route>
          <Route exact path={`${path}/payment`}>
            <Payment></Payment>
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/manageOrder`}>
            <ManageAllOrders></ManageAllOrders>
          </AdminRoute>
          <AdminRoute path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
