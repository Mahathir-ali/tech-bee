import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../../Images/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";
import useAuth from "../../../hooks/useAuth";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Header = () => {
  const { user, logOut } = useAuth();
  const theme = useTheme();
  const [state, setState] = React.useState(false);

  const useStyle = makeStyles({
    resNav: {
      [theme.breakpoints.up("sm")]: {
        display: "none !important",
      },
    },
    navItems: {
      [theme.breakpoints.down("sm")]: {
        display: "none !important",
      },
    },
  });

  const { resNav, navItems } = useStyle();

  return (
    <Box style={{ margin: "auto", width: "1200px" }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          style={{ backgroundColor: "#FFF", color: "#000" }}
          position="static"
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={resNav}
              onClick={() => setState(true)}
            >
              <MenuIcon />
            </IconButton>
            <img style={{ width: "8%" }} src={logo} alt="" />
            <Typography sx={{ fontWeight: 800 }} variant="h6">
              TECH BEE
            </Typography>

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Box id="nav_links" className={navItems}>
              <Link to="/home">Home</Link>
              <Link to="/productPage">All Product</Link>
              {user?.email && <Link to="/dashboard">Dashboard</Link>}
              <Link to="/contact">Contact Us</Link>
              {user?.email && (
                <span>
                  {" "}
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                    src={user?.photoURL}
                    alt=""
                  />
                </span>
              )}
              {user?.email && <Link>{user?.displayName}</Link>}
              {user?.email ? (
                <Link to="/">
                  <Button
                    onClick={logOut}
                    style={{ backgroundColor: "#fab23e", color: "#FFF" }}
                  >
                    Log out <i className="fas fa-sign-out-alt"></i>
                  </Button>
                </Link>
              ) : (
                <Link to="/login">
                  <Button style={{ backgroundColor: "#fab23e", color: "#FFF" }}>
                    Login <i className="fas fa-sign-in-alt"></i>
                  </Button>
                </Link>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="!important ">
        <React.Fragment>
          <Drawer open={state} onClose={() => setState(false)}>
            <Box sx={{ width: 250 }} role="presentation, !important">
              <List id="nav_links">
                <ListItem button>
                  <ListItemText>
                    <Link to="/home">Home</Link>
                  </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                  <ListItemText>
                    <Link to="/productPage">All Product</Link>
                  </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                  <ListItemText>
                    {user?.email && <Link to="/dashboard">Dashboard</Link>}
                  </ListItemText>
                </ListItem>

                <ListItem button>
                  <ListItemText>
                    {user?.email ? (
                      <Link to="/">
                        <Button
                          onClick={logOut}
                          style={{
                            backgroundColor: "#fab23e",
                            color: "#FFF",
                          }}
                        >
                          Log out<i className="fas fa-sign-out-alt"></i>
                        </Button>
                      </Link>
                    ) : (
                      <Link to="/login">
                        <Button
                          style={{
                            backgroundColor: "#fab23e",
                            color: "#FFF",
                          }}
                        >
                          <i className="fas fa-sign-in-alt"></i> Login
                        </Button>
                      </Link>
                    )}
                  </ListItemText>
                </ListItem>
              </List>
              <Divider />
            </Box>
          </Drawer>
        </React.Fragment>
      </div>
    </Box>
  );
};

export default Header;
