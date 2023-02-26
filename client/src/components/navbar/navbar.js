import React, { useContext, useEffect, useState } from "react";
import { Container } from "@mui/system";
import { Grid, Box, TextField, Button } from "@mui/material";
import "./navbar.css";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import Dropdown from "react-bootstrap/Dropdown";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import logo from "../../assets/daraz.png";
import { useCart } from "react-use-cart";
import download from "../../assets/download.png";
import "./dropdown.css";
import Dropdown2 from "./dropdown1";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { MuiAutocomplete } from "./Autocomplete";
import { AppContext } from "../../utils";
const Navbar = ({ getresult }) => {
  const [visible, setVisible] = useState(false);
  const { account, connect, disconnect } = useContext(AppContext);
  useEffect(() => {
    if (!account) {
      connect();
    }
  }, [connect, account]);
  const currentUser = useSelector((state) => state.user.currentUser);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 520) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const { totalUniqueItems } = useCart();
  function logout() {
    window.location.href = "/";
    localStorage.clear();
  }
  const walletConnect = () => {
    if (account) {
      disconnect();
    } else {
      connect();
    }
  };
  return (
    <>
      <div>
        <AppBar sx={{ backgroundColor: "white" }} component="nav">
          <Container>
            <Toolbar sx={{ display: "flex", justifyContent: "" }}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "",
                }}
                className="mobileLogo"
              >
                <Box m={{ xs: 1, sm: 1, md: 0 }}>
                  <img src={logo} width={130} height={60} alt="" />
                </Box>

                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { md: "none" }, color: "black" }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>

              <Container
                className="navbarDesktop"
                sx={{ p: 2, pl: 3 }}
                maxWidth="lg"
              >
                <Grid alignItems="center" container spacing={1}>
                  <Grid item md={2}>
                    <NavLink to="/">
                      <Box sx={{ marginLeft: "-6rem" }}>
                        <img src={logo} width={200} height={60} alt="" />
                      </Box>
                    </NavLink>
                  </Grid>
                  <Grid
                    container
                    wrap="nowrap"
                    direction="row"
                    item
                    sx={{
                      fontFamily: "Sansation",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "20px",
                      lineHeight: "22px",
                      color: "#FFFFFF",
                    }}
                    xs={6}
                  >
                    <MuiAutocomplete />
                    <Box
                      sx={{
                        backgroundColor: "#F57208",
                        width: "3rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "9.3rem",
                      }}
                    >
                      <SearchIcon />
                    </Box>
                  </Grid>
                  <Grid item xs={1}>
                    <Link className="navLink" to="/cart">
                      <ShoppingCartSharpIcon
                        sx={{
                          color: "#000000",
                          fontSize: "3rem",
                          marginLeft: "1rem",
                        }}
                      />
                    </Link>
                    <Box className="item__count">
                      <span>{totalUniqueItems}</span>
                    </Box>
                  </Grid>
                  <Grid item md={1}>
                    <img src={download} width={200} height={50} alt="" />
                  </Grid>
                  <Grid item md={2}>
                    <Dropdown>
                      {currentUser ? (
                        <>
                          <Dropdown.Toggle
                            id="dropdown-basic"
                            style={{
                              marginLeft: "8rem",
                              backgroundColor: "#f57224",
                              fontSize: "12px",
                              width: "120px",
                              textTransform: "upperCase",
                            }}
                          >
                            {currentUser?.data?.name}
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item onClick={logout}>
                              Logout
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </>
                      ) : (
                        <Dropdown.Item
                          style={{
                            marginLeft: "8rem",
                            backgroundColor: "#f57224",
                            fontSize: "1.2rem",
                            width: "120px",
                            textTransform: "upperCase",
                            borderRadius: "10px",
                            height: "40px",
                            padding: "6px 20px",
                            textAlign: "center",
                          }}
                        >
                          <Link
                            to="/login"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            Login
                          </Link>
                          <Button
                            onClick={walletConnect}
                            sx={{
                              ml: 7,
                              textAlign: "center",
                              backgroundColor: "#f57224",
                              color: "white",
                              "&:hover": { backgroundColor: "#f57224" },
                            }}
                          >
                            {account ? "Disconnect" : "Connect"}
                          </Button>
                        </Dropdown.Item>
                      )}
                    </Dropdown>
                  </Grid>
                </Grid>

                <Grid
                  sx={{
                    display: visible ? "block" : "none",
                    marginLeft: "-1.2rem",
                  }}
                >
                  <Dropdown2 />
                </Grid>
              </Container>
            </Toolbar>
          </Container>
        </AppBar>
        <Box component="nav" sx={{ paddingBottom: "4rem" }}>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "50%",
                backgroundColor: "white",
              },
            }}
          >
            <Container sx={{ p: 1, pl: { xs: 3, sm: 10 } }} maxWidth="lg">
              <Grid alignItems="center">
                <Grid
                  alignItems={"center"}
                  item
                  xs={2}
                  sx={{ mt: 10, color: "white" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Box mb={2}>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        sx={{ width: 100 }}
                      />
                      <SearchIcon
                        sx={{
                          backgroundColor: "#F57208",
                          width: "2rem",
                          height: "3rem",
                          borderRadius: "50%",
                          position: "absolute",
                        }}
                      />
                    </Box>
                    <ShoppingCartSharpIcon
                      sx={{
                        color: "#000000",
                        fontSize: "2rem",
                        marginBottom: "1rem",
                      }}
                      // <Link to='/cart'></Link>
                    />

                    <Dropdown>
                      {currentUser ? (
                        <>
                          {" "}
                          <Dropdown.Toggle
                            id="dropdown-basic"
                            style={{
                              fontFamily: "Times New Roman",
                              padding: "10px",
                              backgroundColor: "#f57224",
                              fontSize: "12px",
                              borderRadius: "50px",
                            }}
                          >
                            {currentUser?.data?.name}
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item
                              href="/login"
                              onClick={logout}
                              style={{
                                backgroundColor: "#f57224",
                                textDecoration: "none",
                                color: "black",
                                fontFamily: "Times New Roman",
                                fontSize: "16px",
                                display: "block",
                                borderRadius: "10px",
                                padding: "10px",
                              }}
                            >
                              Logout
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </>
                      ) : (
                        <Dropdown.Item
                          href="/login"
                          style={{
                            backgroundColor: "#f57224",
                            textDecoration: "none",
                            color: "black",
                            fontFamily: "Times New Roman",
                            fontSize: "16px",
                            display: "block",
                            borderRadius: "10px",
                            padding: "10px",
                          }}
                        >
                          Login
                        </Dropdown.Item>
                      )}
                    </Dropdown>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Drawer>
        </Box>
      </div>
    </>
  );
};

export default Navbar;
