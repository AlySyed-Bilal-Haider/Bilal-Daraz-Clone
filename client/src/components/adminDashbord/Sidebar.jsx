import React from "react";
import {
  Box,
  Container,
  Grid,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  Avatar,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BookIcon from "@mui/icons-material/Book";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Search } from "@mui/icons-material";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box>
      <Grid container>
        <Grid item md={2} sx={{ borderRight: "1px solid #C8C9CA" }}>
          <Box
            sx={{
              color: "#466CFD",
              padding: "0.4rem 0rem",
              fontSize: "1.5rem",
              textAlign: "center",
            }}
            mt={5}
          >
            Admin DashBoard
          </Box>
          <hr />
          <Box sx={{ fontSize: "1.2rem ", paddingLeft: "5px" }}>Main</Box>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon sx={{ color: "#466CFD" }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <Box sx={{ fontSize: "1.2rem ", paddingLeft: "5px" }}>List</Box>
          <NavLink to="/admin-dashbord/user" style={{ textDecoration: "none" }}>
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon sx={{ color: "#466CFD" }} />
              </ListItemIcon>
              <ListItemText primary="User" />
            </ListItemButton>
          </NavLink>

          <ListItemButton>
            <ListItemIcon>
              <Inventory2Icon sx={{ color: "#466CFD" }} />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <BookIcon sx={{ color: "#466CFD" }} />
            </ListItemIcon>
            <ListItemText primary="Blogs" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <BorderColorIcon sx={{ color: "#466CFD" }} />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItemButton>
          <Box sx={{ fontSize: "1.2rem ", paddingLeft: "5px" }}>Setting</Box>
          <ListItemButton>
            <ListItemIcon>
              <AccountBoxIcon sx={{ color: "#466CFD" }} />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon sx={{ color: "#466CFD" }} />
            </ListItemIcon>
            <ListItemText primary="LogOut" />
          </ListItemButton>
        </Grid>
        <Grid item md={10}>
          <Box
            sx={{ display: "flex", justifyContent: "space-between" }}
            px={4}
            mt={2}
          >
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
          <hr></hr>
          {/* <Users /> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Sidebar;
