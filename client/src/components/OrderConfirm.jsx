import { Box, Container, Grid } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import airBirds1 from "../../assets/airBirds1.jpg";
import airBirds2 from "../../assets/airBirds2.png";
import headphone1 from "../../assets/headphone1.jpg";
import headphone2 from "../../assets/headphone2.jpg";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
  
  },
  "& .MuiDialogActions-root": {
  },
  "& .MuiDialog-paper": {
    maxWidth: "1000px",
 
  },
}));
const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <div>
      <Box>
       
        <DialogTitle sx={{ m: 0, p: 0 }} {...other}>
          {children}
          {onClose ? (
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 20,
                marginTop: "-14px",
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          ) : null}
        </DialogTitle>
        {/* </Grid> */}
        {/* </Grid> */}
        {/* </Container> */}
      </Box>
    </div>
  );
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const flashSale = [
    {
      img: airBirds1,
      text: "I7 Mini Bluetooth Headset Earbud Single Wireless Earphone With Mic Stereo For all phones",
      price: "Rs.249",
      disPrice: "Rs 999",
      discount: "-75%",
    },
    {
      img: airBirds2,
      text: "Earbuds with charging cable for all smart Phones- White/Black",
      price: "Rs.797",
      disPrice: "Rs 999",
      discount: "-60%",
    },
    {
      img: headphone1,
      text: "Wireless Bluetooth 5.0 Earphone Sports Sweatproof Headphone Touch Portable Earbuds",
      price: "Rs.699",
      disPrice: "Rs.1999",
      discount: "-65%",
    },
    {
      img: headphone2,
      text: " wireless bluetooth handsfree for all phones",
      price: "Rs.348",
      disPrice: "Rs.499",
      discount: "-30%",
    },
    // {
    //   img: airBirds3,
    //   text: "I7 Mini Bluetooth Headset Earbud Single Wireless Earphone With Mic Stereo For all phones",
    //   price: "Rs.249",
    //   disPrice: "Rs 999",
    //   discount: "-75%",
    // },
  ];

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add to Cart
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          sx={{ p: 3 }}
        ></BootstrapDialogTitle>
        <DialogContent dividers sx={{ py: "10px", px: 0 }}>
          <Box
            sx={{
              display: "flex",
              alignItem: "center",
              flexDirection: { xs: "column", md: "row" },
              p: "1px",
            }}
          >
            <Box sx={{ width: { xs: "100%", md: "70%" } }}>
              <Box
                sx={{
                  border: "1px solid #eff0f5",
                  //   border: "1px solid red",
                  borderLeft: "none",
                  borderRight: "none",
                  p: 2,
                  height: { xs: "120vw", md: "15vw" },
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItem: "center",
                    gap: 1,
                    color: "#4caf50",
                    fontSize: "18px",
                    fontWeight: 400,
                  }}
                >
                  {" "}
                  <CheckCircleIcon sx={{ color: "#00B158" }} />1 new item(s)
                  have been added to your cart
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <img
                    src="https://static-01.daraz.pk/p/b04751fdb410a82172fcaeb7a14a10fb.jpg"
                    alt=""
                    width="100px"
                  />
                  <Box>
                    <Typography sx={{ color: "#212121" }}>
                      Best Arabic Collection Fragrance : Marwaan Perfume for men
                      - 100ml Long Lasting perfume High Quality For gift
                    </Typography>
                    <Typography>BIC, Volume (ml):100 ml</Typography>
                    <Typography
                      sx={{
                        color: "#f57224",
                        fontSize: "18px",
                        fontWeight: 500,
                        mt: "10px",
                      }}
                    >
                      Rs. 338
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItem: "center",
                        justifyContent: "space-between",
                        mt: 1,
                      }}
                    >
                      <Typography>
                        {" "}
                        <s>Rs. 850</s> -60%
                      </Typography>
                      <Typography sx={{ fontSize: "14px" }}>
                        {" "}
                        <span sx={{ color: "#757575" }}>Qty:</span> 1
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                border: "1px solid #eff0f5",
                // border: "1px solid red",
                borderRight: "none",
                width: { xs: "100%", md: "30%" },
                p: "15px",
                height: { xs: "60vw", md: "15vw" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItem: "center",
                  justifyContent: "flex-start",
                  textAlign: "center",
                  gap: 1,
                  mt: "3px",
                }}
              >
                <Typography sx={{ fontSize: "18px", color: "#212121" }}>
                  Shopping Cart
                </Typography>
                <Typography sx={{ color: "#757575", fontSize: "14px" }}>
                  (10 items)
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItem: "center",
                  justifyContent: "space-between",
                  mt: "10px",
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItem: "center",
                    color: "#757575",
                  }}
                >
                  Subtotal <ArrowForwardIosIcon sx={{ width: "20px" }} />{" "}
                </Typography>
                <Typography sx={{ color: "#757575" }}> Rs. 0</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItem: "center",
                  justifyContent: "space-between",
                  mt: "12px",
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItem: "center",
                    color: "black",
                  }}
                >
                  Total{" "}
                </Typography>
                <Typography sx={{ color: "#f57224" }}> Rs. 0</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItem: "center",
                  justifyContent: "center",
                  gap: 3,
                  pt: 4,
                }}
              >
                <Button
                  sx={{
                    color: "#f57224",
                    border: "1px solid #f57224",
                    backgroundColor: "white",
                  }}
                >
                  GO TO CART
                </Button>
                <Button sx={{ backgroundColor: "#d0611e", color: "#fff" }}>
                  CHECK OUT
                </Button>
              </Box>
            </Box>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Container maxWidth="lg">
              <Typography
                sx={{
                  color: "#757575",
                  fontSize: "22px",
                  fontWeight: 400,
                  my: 2,
                }}
              >
                Flash Sale
              </Typography>
              <Grid container>
                {flashSale.map(({ img, text, price, disPrice, discount }) => {
                  return (
                    <Grid
                      item
                      xs={6}
                      sm={6}
                      md={3}
                      sx={{
                        display: "flex",
                        alignItem: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          p: "4px",
                          width: "100%",
                          bgcolor: "#fff",
                          boxShadow: "0 0 4px 0 rgb(0 0 0 / 25%)",
                          "&:hover": {
                            boxShadow: "0 0 4px 0 rgb(0 0 0 / 85%)",
                            cursor: "pointer",
                          },
                        }}
                      >
                        <Box>
                          <img src={img} alt="" width="100%" />
                        </Box>{" "}
                        <Typography
                          sx={{
                            fontSize: "15px",
                            display: "-webkit-box !important",
                            WebkitLineClamp: "2",
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {text}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#F95606",
                            fontSize: "18px",
                            fontWeight: 400,
                          }}
                        >
                          {price}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#9e9e9e",
                            display: "flex",
                            gap: 1,
                            fontSize: "12px",
                          }}
                        >
                          <s>{disPrice}</s>
                          {discount}
                        </Typography>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Container>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
