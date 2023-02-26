import { useState } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  Button,
  Grid,
  TextField,
  Avatar,
} from "@mui/material";
import axios from "axios";
import CreateIcon from "@mui/icons-material/Create";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import { ToastContainer,toast } from "react-toastify";

import { makeStyles } from "@mui/styles";
import { url } from "../constants";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { useCart } from "react-use-cart";
const useStyles = makeStyles(() => ({
  paperStyle: {
    marginTop: 115,
    padding: 20,
    height: "90vh",
    width: 420,
    margin: "20px auto",
  },
  headerStyle: { margin: 0 },
  avatarStyle: { backgroundColor: "#1bbd7e", marginBottom: "21px" },
  btnstyle: { margin: "10px 50px" },
  spanstyle: { color: "red", marginTop: "10px" },
  formStyle: {
    marginLeft: "3rem",
    padding: "10px",
  },
}));
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    paddingTop: "6px",
    paddingBottom: "6px",
  },
}));

function Cart() {
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  // const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(items, "items");

  const reference = items?.map(({ _id, name, quantity }) => {
    return {
      refernceId: _id,
      noOfItems: quantity,
      name: name,
    };
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    const order = {
      name,
      phone,
      address,
      reference: reference,
      totalprice: cartTotal,
    };
    console.log(order, "user");
    try {
      // let form = new FormData();
      // form.append("name", name);
      // form.append("phone", phone);
      // form.append("address", address);
      const result = await axios.post(`${url}/api/order/order`, order);
      console.log(result.data, "resultform data");
      if (result.data) {
        toast.success("Order Completed Successfully!",{
          position:"top-center"
        });
      }
    } catch (err) {
      toast.error("Something Went Wrong",{
        position:"top-center"
      })
      setError(true);
    }
  };
  // const { enqueueSnackbar }: any = useSnackbar();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (isEmpty)
    return (
      <Box sx={{ padding: "5rem 0rem", height: "92vh" }}>
        <Typography
          mt={10}
          mb={36}
          sx={{
            color: "black",
            fontSize: { xs: "28px", md: "38px" },
            fontFamily: "Light Bold",
            textAlign: "center",
          }}
        >
          Your Cart is Empty
        </Typography>
      </Box>
    );
  return (
    <Box sx={{ backgroundColor: "whitesmoke" }}>
      <Container sx={{ marginTop: "5rem" }}>
        <Grid container pt={4} spacing={3} justifyContent="center">
          <Grid md={8}>
            <Box pt={6} mx={2} pb={10} sx={{ bgcolor: "white" }}>
              <Box mb={4} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  onClick={() => emptyCart()}
                  sx={{
                    background: "white",
                    color: "#757575",
                    "&:hover": {
                      color: "#f57224",
                    },
                  }}
                >
                  <DeleteIcon />
                  DELETE
                </Button>
              </Box>
              <TableContainer
                component={Paper}
                sx={{
                  boxShadow: "none",
                  borderRadius: "10px",
                  background: "none",
                }}
              >
                <Table sx={{ minWidth: 650 }}>
                  <TableBody>
                    {items.map(
                      (
                        { id, image, price, name, quantity, totalQuantiy },
                        i
                      ) => {
                        return (
                          <TableRow key={id + i}>
                            <StyledTableCell>
                              <img
                                src={`${url}/uploads/${image}`}
                                alt=""
                                height="100px"
                                width="100px"
                              />
                            </StyledTableCell>
                            <StyledTableCell>
                              <Typography
                                color="black"
                                fontSize="14px"
                                fontWeight="500"
                              >
                                {name}
                              </Typography>
                            </StyledTableCell>
                            <StyledTableCell>
                              <Typography
                                color="#f57224"
                                fontSize="16px"
                                width="60px"
                              >
                                Rs. {price}
                              </Typography>
                            </StyledTableCell>

                            <StyledTableCell>
                              <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                              >
                                <Typography
                                  sx={{
                                    paddingY: "2px",
                                    width: "35px",
                                    marginRight: "5px",
                                    border: "1px solid #A1A1A5",
                                    borderRadius: "5px",
                                    color: "black",
                                    fontSize: "18px",
                                    textAlign: "center",
                                    cursor: "pointer",
                                  }}
                                  onClick={() =>
                                    updateItemQuantity(id, quantity - 1)
                                  }
                                >
                                  -
                                </Typography>
                                <Typography
                                  sx={{
                                    paddingY: "2px",
                                    width: "35px",
                                    border: "1px solid #A1A1A5",
                                    borderRadius: "4px",
                                    color: "black",
                                    fontSize: "18px",
                                    textAlign: "center",
                                    cursor: "pointer",
                                  }}
                                  onClick={() => {
                                    // if (quantity >= totalQuantiy) {
                                    //   return -enqueueSnackbar(
                                    //     `You can not select more than ${quantity}`,
                                    //     {
                                    //       variant: "error",
                                    //     }
                                    //   );
                                    // }
                                    updateItemQuantity(id, quantity + 1);
                                  }}
                                >
                                  +
                                </Typography>
                              </Box>
                            </StyledTableCell>
                            <StyledTableCell>
                              <Typography color="black" fontSize="16px">
                                Quantity ({quantity})
                              </Typography>
                            </StyledTableCell>
                            <StyledTableCell>
                              <Typography
                                sx={{
                                  paddingY: "2px",
                                  width: "35px",
                                  background: "#f57224",
                                  borderRadius: "4px",
                                  color: "#black",
                                  fontSize: "18px",
                                  textAlign: "center",
                                  cursor: "pointer",
                                  "&:hover": {
                                    background: "#423550a1",
                                  },
                                }}
                                onClick={() => {
                                  removeItem(id);
                                }}
                              >
                                <DeleteIcon />
                              </Typography>
                            </StyledTableCell>
                          </TableRow>
                        );
                      }
                    )}
                  </TableBody>
                </Table>
              </TableContainer>

              <Box textAlign="center">
                <Typography
                  mt={4}
                  mb={2}
                  sx={{
                    color: "black",
                    fontSize: { xs: "24px", md: "32px" },
                    // textAlign: "right",
                  }}
                >
                  Total Price: {cartTotal}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid md={4} container spacing={1}>
            <Box
              pt={6}
              ml={1}
              px={1}
              pb={10}
              mt={1}
              sx={{ background: "white" }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#212121",
                  position: "relative",
                  marginBottom: "14px",
                }}
              >
                Order Summary
              </Typography>
              <Box
                mb={4}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography sx={{ color: "#757575" }}>
                  Subtotal (0 items)
                </Typography>
                <Typography sx={{ color: "#757575" }}> Rs. 0</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <TextField
                  id="outlined-basic"
                  label="Enter Vochar Code"
                  variant="outlined"
                />
                <Button
                  onClick={() => emptyCart()}
                  sx={{
                    background: "#25a5d8",
                    width: "80px",
                    marginLeft: "5px",
                    height: "53px",
                    color: "white",
                    "&:hover": {
                      color: "#f57224",
                    },
                  }}
                >
                  APPLY
                </Button>
              </Box>
              <Box
                mb={4}
                mt={2}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography sx={{ color: "black" }}>Total</Typography>
                <Typography sx={{ color: "#F57208" }}>
                  {" "}
                  Rs. {cartTotal}
                </Typography>
              </Box>
              {!currentUser ? (
                <Box>
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <Button
                      size="large"
                      sx={{
                        margin: "2rem 0rem",
                        fontSize: "1rem",
                        backgroundColor: "#F57208",
                        color: "white",
                        display: "flex",
                        alignItems: "center",

                        "&:hover": {
                          backgroundColor: "#F57208",
                        },
                      }}
                    >
                      PROCEED TO CHECKOUT
                    </Button>
                  </Link>
                </Box>
              ) : (
                ""
              )}

              <Box>
                <Button
                  size="large"
                  onClick={handleOpen}
                  sx={{
                    margin: "2rem 0rem",
                    fontSize: "1rem",
                    backgroundColor: "#F57208",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    "&:hover": {
                      backgroundColor: "green",
                    },
                  }}
                >
                  Confirm Your Order
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  // aria-labelledby="modal-modal-title"
                  // aria-describedby="modal-modal-description"
                >
                  
                  <Box sx={style}>
                    <Grid>
                      <Paper elevation={20} className={classes.paperStyle}>
                        <Grid align="center">
                          <Avatar className={classes.avatarStyle}>
                            <CreateIcon />
                          </Avatar>
                          <h2 className={classes.headerStyle}>Order Confirm</h2>
                          <Typography variant="caption" gutterBottom>
                            Please fill this form to confirm your order!
                          </Typography>
                        </Grid>
                        {/* {/ <img src={''} alt="wrapper" className={classes.image} /> /} */}
                        <form onSubmit={handleSubmit} style={{ width: "70%" }}>
                          <Box mt={2}>
                            <TextField
                              className={classes.formStyle}
                              label="Name"
                              placeholder="Enter your name"
                              onChange={(e) => setName(e.target.value)}
                              fullWidth
                            />
                            <TextField
                              className={classes.formStyle}
                              label="Phone Number"
                              placeholder="Enter your Phone Number"
                              type="text"
                              onChange={(e) => setPhone(e.target.value)}
                              fullWidth
                            />
                            <TextField
                              className={classes.formStyle}
                              label="address"
                              placeholder="Enter your Address"
                              type="text"
                              onChange={(e) => setAddress(e.target.value)}
                              fullWidth
                            />

                            <Button
                              type="submit"
                              color="primary"
                              variant="contained"
                              className={classes.btnstyle}
                              fullWidth
                            >
                              Submit
                            </Button>
                          </Box>
                        </form>
                        {error && (
                          <Box component="span" className={classes.spanstyle}>
                            Something went wrong!
                          </Box>
                        )}
                      </Paper>
                    </Grid>
                  </Box>
                </Modal>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <ToastContainer />
    </Box>
  );
}

export default Cart;
