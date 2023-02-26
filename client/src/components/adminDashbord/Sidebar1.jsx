import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import List from "@mui/material/List";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Toolbar from "@mui/material/Toolbar";
// import { SupervisorAccountIcon } from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import {
  FormControl,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  Avatar,
} from "@mui/material";

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const drawerWidth = 240;

export default function ResponsiveDrawer(props) {
 

  const navigate = useNavigate();

  const currentUser = useSelector((state) => state.user.currentUser);
  console.log(currentUser?.data, "user................123123");

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  React.useEffect(() => {
    if (currentUser?.data.role === "user") {
      navigate("/");
    }
  });

  const drawer = (
    <div>
      <Box
        sx={{
          color: "#466CFD",
          padding: "0.5rem 0rem",
          fontSize: "1.5rem",
          textAlign: "center",
        }}
        mt={2}
      >
        Admin DashBoard
      </Box>

      <Divider />
      <List>
        <Box sx={{ fontSize: "1.2rem ", paddingLeft: "5px" }}>Main</Box>
        <NavLink to="/admin-dashbord" style={{ textDecoration: "none" }}>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon sx={{ color: "#466CFD" }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </NavLink>
        <Box sx={{ fontSize: "1.2rem ", paddingLeft: "5px" }}>List</Box>
        <NavLink to="/admin-dashbord/user" style={{ textDecoration: "none" }}>
          <ListItemButton>
            <ListItemIcon>
              {/* <SupervisorAccountIcon sx={{ color: "#466CFD" }} /> */}
            </ListItemIcon>
            <ListItemText primary="User" />
          </ListItemButton>
        </NavLink>

        {currentUser?.data.role === "superadmin" ? (
          <NavLink
            to="/admin-dashbord/admin"
            style={{ textDecoration: "none" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon sx={{ color: "#466CFD" }} />
              </ListItemIcon>
              <ListItemText primary="Admin" />
            </ListItemButton>
          </NavLink>
        ) : (
          ""
        )}

        <NavLink
          to="/admin-dashbord/products"
          style={{ textDecoration: "none" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <Inventory2Icon sx={{ color: "#466CFD" }} />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItemButton>
        </NavLink>

        <Box sx={{ fontSize: "1.2rem ", paddingLeft: "5px" }}>Setting</Box>
        <NavLink to={`adminprofile/${currentUser?.data.id}`} style={{ textDecoration: "none"}}>
        <ListItemButton>
          <ListItemIcon>
            <AccountBoxIcon sx={{ color: "#466CFD" }} />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
        </NavLink>
        <ListItemButton>
          <ListItemIcon>
            <LogoutIcon sx={{ color: "#466CFD" }} />
          </ListItemIcon>
          <ListItemText primary="LogOut" />
        </ListItemButton>
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "white",
          padding: "1rem 0rem",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }} px={4}>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Search
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type="text"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <Search />
                  </IconButton>
                </InputAdornment>
              }
              label="Search"
            />
          </FormControl>
          <Avatar src="" sx={{ marginTop: "1rem" }} />
        </Box>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
        {props.children}
      </Box>
    </Box>
  );
}
