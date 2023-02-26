import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "../CategoryPage/loading.css";
import { url } from "../../constants";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
const FlashSale = ({ dataOfResult }) => {
  console.log(dataOfResult, "result flash");
  const [flashSale, setData] = React.useState([]);
  const [loading, setLoading] = useState(false);
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${url}/api/products/allproducts`);
      const newData = res.data.filter((x) => x.category == "flashsale");

      setData(newData);
      setLoading(false);
      // setSearch(newData);
    } catch (error) {
      setLoading(finalPropsSelectorFactory);
    }
  };

  React.useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <Box sx={{ mt: 2 }}>
        <Container maxWidth="lg">
          <Typography
            sx={{ color: "#757575", fontSize: "22px", fontWeight: 400, my: 2 }}
          >
            Flash Sale
          </Typography>
          {loading ? (
            <>
              <h5 style={{ textAlign: "center" }}>
                Hold on, it's loading!.......
              </h5>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="loader"></div>
              </div>
            </>
          ) : (
            <Grid container>
              {dataOfResult?.length > 0
                ? dataOfResult?.map(({ image, name, price, _id }) => {
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
                              p: "4px",
                              width: "90%",
                              bgcolor: "#fff",
                              boxShadow: "0 0 4px 0 rgb(0 0 0 / 25%)",
                              "&:hover": {
                                boxShadow: "0 0 4px 0 rgb(0 0 0 / 85%)",
                                cursor: "pointer",
                              },
                            }}
                          >
                            <Box>
                              <img
                                src={`${url}/uploads/${image}`}
                                alt=""
                                width="100%"
                              />
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
                  })
                : flashSale?.map(({ image, name, price, _id }) => {
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
                              p: "4px",
                              width: "90%",
                              bgcolor: "#fff",
                              boxShadow: "0 0 4px 0 rgb(0 0 0 / 25%)",
                              "&:hover": {
                                boxShadow: "0 0 4px 0 rgb(0 0 0 / 85%)",
                                cursor: "pointer",
                              },
                            }}
                          >
                            <Box>
                              <img
                                src={`${url}/uploads/${image}`}
                                alt=""
                                width="100%"
                              />
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
            </Grid>
          )}
        </Container>
      </Box>
    </div>
  );
};

export default FlashSale;
