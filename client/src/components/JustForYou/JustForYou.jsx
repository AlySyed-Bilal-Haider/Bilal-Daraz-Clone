import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { url } from "../../constants";
const JustForYou = () => {
  const [data, setData] = React.useState([]);
  const [visible, setVisible] = React.useState(12);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 6);
  };

  const fetchAllProduct = async () => {
    try {
      const res = await axios.get(`${url}/api/products/allproducts`);
      setData(res.data);
    } catch (error) {}
  };
  React.useEffect(() => {
    fetchAllProduct();
  }, [data]);
  return (
    <div>
      <Box sx={{ mt: 2 }}>
        <Container maxWidth="lg">
          <Typography
            sx={{ color: "#757575", fontSize: "22px", fontWeight: 400, my: 2 }}
          >
            Just For You
          </Typography>
          <Grid
            container
            sx={{ display: "flex", justifyContent: "center" }}
            spacing={2}
          >
            {data?.slice(0, visible).map(({ image, name, price, _id }) => {
              return (
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={2}
                  sx={{
                    display: "flex",
                    alignItem: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <NavLink
                    to={`/product/${_id}`}
                    style={{ textDecoration: "none", color: "#212121" }}
                  >
                    <Box
                      sx={{
                        marginTop: "1rem",
                        p: "4px",
                        width: "90%",
                        bgcolor: "#fff",
                        boxShadow: "0 0 4px 0 rgb(0 0 0 / 25%)",
                        "&:hover": {
                          boxShadow: "0 0 4px 0 rgb(0 0 0 / 85%)",
                          cursor: "pointer",
                        },
                        height: "100%",
                      }}
                    >
                      <Box>
                        <img
                          src={`${url}/uploads/${image}`}
                          alt=""
                          width="100%"
                          height="200px"
                        />
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "15px",
                          display: "-webkit-box !important",
                          WebkitLineClamp: "2",
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          height: { md: "50px", xs: "10px" },
                        }}
                      >
                        {name}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#F95606",
                          fontSize: "18px",
                          fontWeight: 400,
                        }}
                      >
                        Rs.{price}
                      </Typography>
                    </Box>
                  </NavLink>
                </Grid>
              );
            })}
            <Button
              onClick={showMoreItems}
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
              Show More
            </Button>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default JustForYou;
