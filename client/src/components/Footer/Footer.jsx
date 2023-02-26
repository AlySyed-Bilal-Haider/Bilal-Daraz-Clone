import { Box, Container, Typography } from "@mui/material";
import React from "react";
import footerImg from "./PicturesFooter/footerImg.png";

const Footer = () => {
  let customer = [
    "Help Center",
    "How to Buy",
    "Corporate & Bulk Purchasing",
    "Returns & Refunds",
    "Daraz Shop",
    "Contact Us",
    "Purchase Protection",
    "Daraz Pick up Points",
  ];
  let makeMoney = [
    "Make Money With Us ",
    "Daraz University",
    "Sell on Daraz",
    "Join Daraz Affiliate Program",
  ];
  let daraz = [
    "About Us",
    "Digital Payments",
    "Daraz Cares",
    "Daraz Blog",
    "Terms & Conditions",
    "Privacy Policy",
    "NTN Number : 4012118-6",
    "STRN Number : 1700401211818",
    "Online Shopping App",
    "Online Grocery Shopping",
    "Daraz Exclusive",
    "How to shop on Darazs",
  ];
  return (
    <div>
      <Box sx={{ background: "#2e2e54", color: "#fff" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItem: "center",
              justifyContent: "space-between",
              py: 3,
            }}
          >
            <Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 300,
                    color: "#fff",
                    // py: 2,
                  }}
                >
                  Customer Care
                </Typography>
                {customer.map((item) => {
                  return (
                    <Typography sx={{ py: "2px", fontSize: "12px" }}>
                      {item}
                    </Typography>
                  );
                })}
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 300,
                    color: "#fff",
                    pt: 2,
                    pb: 1,
                  }}
                >
                  Make Money with us
                </Typography>
                {makeMoney.map((item) => {
                  return (
                    <Typography sx={{ py: "2px", fontSize: "12px" }}>
                      {item}
                    </Typography>
                  );
                })}
              </Box>
            </Box>
            <Box>
              <Typography>Daraz</Typography>
              {daraz.map((item) => {
                return (
                  <Typography
                    sx={{ py: "2px", fontSize: "12px", fontWeight: 200 }}
                  >
                    {item}
                  </Typography>
                );
              })}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItem: "center",
                justifyContent: "flex-start",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  // flexDirection: "column",
                  gap: 4,
                }}
              >
                <img
                  src="https://laz-img-cdn.alicdn.com/images/ims-web/TB18aqePBLoK1RjSZFuXXXn0XXa.png"
                  alt=""
                  width="30%"
                />
                <Box
                  sx={{
                    mt: { xs: "1px", md: 5 },
                  }}
                >
                  <img
                    src="https://icms-image.slatic.net/images/ims-web/9bef0e70-2a7c-48b7-91cb-59c5c83c5b46.png"
                    alt=""
                    width="40%"
                  />

                  <Typography
                    sx={{ fontSize: "14px", fontWeight: 300, color: "#f57224" }}
                  >
                    Happy Shopping
                  </Typography>
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: 300, color: "#fff" }}
                  >
                    Download App
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
