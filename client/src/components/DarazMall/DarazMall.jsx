import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { url } from "../../constants";

const DarazMall = () => {
  const [darazmall, setDarazMall] = React.useState([]);

  const getAllProducts = async () => {
    try {
      const res = await axios.get(`${url}/api/products/allproducts`);
      const newData = res.data.filter((x) => x.category == "darazmall");

      setDarazMall(newData);
      // setSearch(newData);
    } catch (error) {}
  };

  React.useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <Box>
        <Container>
          <Typography
            sx={{
              fontFamily: "Roboto-Regular",
              fontSize: "22px",
              color: "#424242",
              fontWeight: 400,
              my: "20px",
            }}
          >
            DarazMall
          </Typography>
          <Grid container>
            {darazmall?.map(({ image, name, _id }, i) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={3}
                  md={2}
                  sx={{
                    display: "flex",
                    alignItem: "center",
                    // justifyContent: "space-around",
                  }}
                >
                  <NavLink
                    to={`/product/${_id}`}
                    style={{ textDecoration: "none", color: "#212121" }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: "95%",
                        bgcolor: "#fff",
                        boxShadow: "0 0 4px 0 rgb(0 0 0 / 25%)",
                        "&:hover": {
                          boxShadow: "0 0 4px 0 rgb(0 0 0 / 85%)",
                          cursor: "pointer",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          background:
                            "linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.5) 100%)",
                        }}
                      >
                        <img
                          src={`${url}/uploads/${image[0]}`}
                          alt=""
                          width="100%"
                        />
                      </Box>

                      <Box
                        sx={{
                          py: "25px",
                          display: "flex",
                          alignItem: "center",
                          flexDirection: "column",
                          justifyContent: "center",
                          textAlign: "center",
                          backgroundColor: "white",
                        }}
                      >
                        <Typography sx={{ fontSize: "15px", color: "#212121" }}>
                          {name}
                        </Typography>
                        <Typography sx={{ fontSize: "12px", color: "#9e9e9e" }}>
                          {name}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItem: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          sx={{
                            p: 1,
                            bgcolor: "#fff",
                            boxShadow: "0 0 4px 0 rgb(0 0 0 / 25%)",
                            height: "40px",
                            width: "40px",
                            display: "flex",
                            alignItem: "center",
                            justifyContent: "center",
                            position: "absolute",
                            mt: "-125px",
                            //   ml: "70px",
                          }}
                        >
                          <img src={`${url}/uploads/${image[1]}`} alt="bf2" />
                        </Box>
                      </Box>
                    </Box>
                  </NavLink>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default DarazMall;
