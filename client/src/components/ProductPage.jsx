import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Rating,
  Typography,
  Button,
} from "@mui/material";
import { useCart } from "react-use-cart";
import ShareIcon from "@mui/icons-material/Share";
import { shareURL } from "../constants";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import { useParams } from "react-router-dom";
import robe1 from "../assets/robe1.jpg";
import robe2 from "../assets/robe2.jpg";
import robe3 from "../assets/robe3.jpg";
import banner from "../assets/banner.jpg";
import {LinkedinShareButton } from 'react-share'
import axios from "axios";
import './CategoryPage/loading.css'
import { url } from "../constants";
const ProductPage = () => {
  const { addItem } = useCart();
  console.log(addItem, "hsdfhdjas");
  // const dispatch = useDispatch()
  const [image, setImage] = useState(robe1);

  const [newData, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const { id } = useParams();

  console.log(id, "my Id");

  const getAllProducts = async () => {
    try {
      setLoading(true)
      const res = await axios.get(`${url}/api/products/allproducts`);
      const newData = res.data.filter((x) => x._id == id);
      setLoading(false)
      console.log(newData, "newdata---");

      setData(newData);
    } catch (error) {
      setLoading(false)
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Box sx={{ bgcolor: "#EFF0F5", py: 5 }}>
      {loading?(<><h5 style={{textAlign:"center"}}>Hold on, it's loading!.......</h5>
             <div style={{display: "flex", justifyContent:"center"}}>
             <div className="loader"></div>
             </div>
             </>):(
        <Container>

        {newData.map((data, i) => {
          return (
            <>
              <Grid container>
                <Grid item xs={12} md={8}>
                  <Box
                    sx={{
                      bgcolor: "#fff",
                      display: "flex",
                      py: 3,
                      flexDirection: { xs: "column", md: "row" },
                    }}
                  >
                    <Box width={{ xs: "100%", md: "40%" }}>
                      <Box
                        component="img"
                        src={`${url}/uploads/${data.image[0]}`}
                        alt=""
                        width="100%"
                        height="315px"
                      />
                      <Divider color="#eff0f5" />

                      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                        <Box
                          onMouseEnter={() => setImage(robe1)}
                          component="img"
                          src={`${url}/uploads/${data.image[0]}`}
                          alt=""
                          width="70px"
                          height="70px"
                          sx={{
                            cursor: "pointer",
                            border: image === robe1 && "1px solid grey",
                          }}
                        />
                        <Box
                          onMouseEnter={() => setImage(robe2)}
                          component="img"
                          src={`${url}/uploads/${data.image}`}
                          alt=""
                          width="70px"
                          height="70px"
                          sx={{
                            cursor: "pointer",
                            border: image === robe2 && "1px solid grey",
                          }}
                        />
                        <Box
                          onMouseEnter={() => setImage(robe3)}
                          component="img"
                          src={`${url}/uploads/${data.image}`}
                          alt=""
                          width="70px"
                          height="70px"
                          sx={{
                            cursor: "pointer",
                            border: image === robe3 && "1px solid grey",
                          }}
                        />
                      </Box>
                    </Box>
                    <Box width={{ xs: "100%", md: "60%" }} p={1}>
                      <Typography width="100%" variant="h6">
                        {data.name}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          pr: 1,
                        }}
                      >
                        <Box>
                          <Typography
                            variant="body2"
                            gutterBottom
                            sx={{ color: "#1A9CB7", fontSize: "12px", mt: 2 }}
                          >
                            <Rating
                              name="half-rating-read"
                              defaultValue={3.5}
                              precision={0.5}
                              readOnly
                              size="small"
                              sx={{ fontSize: "12px" }}
                            />{" "}
                            46 Rating | 61 Answered Questions
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: "#1A9CB7", fontSize: "12px" }}
                          >
                            <span style={{ color: "grey" }}>Brand:</span>{" "}
                            Aveesha Textiles | More Bath from Aveesha Textiles
                          </Typography>
                        </Box>
                        <Box>
                          <LinkedinShareButton url={`${url}`}>
                        {/* <a href={`https://www.linkedin.com/${url}/product/${id}`} target="_blank" rel="noreferrer">
                       </a> */}
                          <ShareIcon sx={{ mr: 1, cursor: "pointer" }}  />
                       </LinkedinShareButton>
                        </Box>
                      </Box>

                      <Box
                        component="img"
                        src={banner}
                        alt=""
                        width="90%"
                        mt={3}
                      />

                      <Typography
                        color="#F57224"
                        sx={{ fontSize: "24px", mt: 3 }}
                      >
                        Rs.{data.price}
                      </Typography>
                      <Divider color="#eff0f5" />

                      <Box sx={{ display: "flex", mt: 1 }}>
                        <Typography sx={{ color: "grey !important" }}>
                          color
                        </Typography>
                        <Box ml={8}>
                          <Typography>Brown</Typography>
                          <Box
                            component="img"
                            src={`${url}/uploads/${data.image}`}
                            alt=""
                            width="50px"
                            height="50px"
                          />
                          <Box
                            component="img"
                            src={`${url}/uploads/${data.image}`}
                            alt=""
                            width="50px"
                            height="50px"
                            ml={1}
                          />
                          <Box
                            component="img"
                            ml={1}
                            src={`${url}/uploads/${data.image}`}
                            alt=""
                            width="50px"
                            height="50px"
                          />
                        </Box>
                      </Box>
                      <Button
                        sx={{
                          bgcolor: "#2ABBE8",
                          color: "white",
                          px: 3,
                          my: 2,
                          "&:hover": { bgcolor: "#2ABBE8a1" },
                        }}
                      >
                        Buy Now
                      </Button>
                      <Button
                        sx={{
                          bgcolor: "#F57224",
                          color: "white",
                          px: 3,
                          ml: 2,
                          "&:hover": { bgcolor: "#F57224a1" },
                        }}
                        onClick={() => {
                          addItem(data);
                        }}
                      >
                        Add to Cart
                      </Button>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Box bgcolor="#fff">
                    <Box bgcolor="#fafafa" p={1.5}>
                      <Typography color="grey !important" fontSize="13px">
                        Delivery
                      </Typography>

                      <Typography my={1} sx={{ fontSize: "14px" }}>
                        {" "}
                        <LocationOnIcon sx={{ verticalAlign: "-5px" }} /> Sindh,
                        Karachi - Gulshan-e-Iqbal, Block 15
                      </Typography>

                      <Divider color="#eff0f5" />

                      <Box
                        sx={{
                          my: 1.7,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box my={1}>
                          <Typography sx={{ fontSize: "14px" }}>
                            {" "}
                            <BookmarkBorderIcon
                              sx={{ verticalAlign: "-10px" }}
                            />{" "}
                            Sindh, Standard Delivery
                          </Typography>
                          <Typography
                            color="grey !important"
                            ml={4}
                            lineHeight="10px"
                            variant="subtitle2"
                          >
                            3 - 4 day(s)
                          </Typography>
                        </Box>
                        <Typography variant="subtitle2">Rs. 89</Typography>
                      </Box>

                      <Typography sx={{ fontSize: "14px" }} mb={2}>
                        {" "}
                        <LocalAtmIcon sx={{ verticalAlign: "-5px" }} /> Cash on
                        Delivery Available
                      </Typography>
                      <Divider color="#eff0f5" />
                      <Typography
                        color="grey !important"
                        my={2}
                        fontSize="13px"
                      >
                        Service
                      </Typography>
                      <Typography sx={{ fontSize: "14px", mt: 2 }}>
                        {" "}
                        <BookmarkBorderIcon sx={{ verticalAlign: "-10px" }} /> 7
                        Days Returns
                      </Typography>
                      <Typography
                        color="grey !important"
                        ml={4}
                        mb={2}
                        lineHeight="10px"
                        variant="subtitle2"
                      >
                        Change of mind is not applicable
                      </Typography>
                      <Typography sx={{ fontSize: "14px", my: 2 }}>
                        {" "}
                        <LocalAtmIcon sx={{ verticalAlign: "-5px" }} /> 1 Year
                        Brand Warranty
                      </Typography>
                    </Box>

                    <Box mt={2} bgcolor="#fafafa" p={1.5}>
                      <Box
                        sx={{
                          my: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box my={1}>
                          <Typography
                            color="grey !important"
                            lineHeight="10px"
                            variant="subtitle2"
                          >
                            Sold by
                          </Typography>
                          <Typography sx={{ fontSize: "14px" }}>
                            MY Trading (Karachi)
                          </Typography>
                        </Box>
                        <Typography variant="subtitle2">Chat</Typography>
                      </Box>
                      <Divider color="#eff0f5" />
                      <Box sx={{ display: "flex" }}>
                        <Divider
                          color="#eff0f5"
                          orientation="vertical"
                          flexItem
                        />
                        <Box ml={1}>
                          <Typography
                            variant="subtitle1"
                            color="grey !important"
                            width="30%"
                            lineHeight="12px"
                            fontSize="12px"
                            pt={2}
                          >
                            Positive Seller Ratings
                          </Typography>
                          <Typography fontSize="20px">89%</Typography>
                        </Box>
                        <Divider
                          color="#eff0f5"
                          orientation="vertical"
                          flexItem
                        />
                        <Box ml={1}>
                          <Typography
                            variant="subtitle1"
                            color="grey !important"
                            width="30%"
                            lineHeight="12px"
                            fontSize="12px"
                            pt={2}
                          >
                            Ship on Time
                          </Typography>
                          <Typography fontSize="20px">89%</Typography>
                        </Box>
                        <Divider
                          color="#eff0f5"
                          orientation="vertical"
                          flexItem
                        />
                        <Box ml={1}>
                          <Typography
                            variant="subtitle1"
                            color="grey !important"
                            width="30%"
                            lineHeight="12px"
                            fontSize="12px"
                            pt={2}
                          >
                            Chat Response
                          </Typography>
                          <Typography fontSize="20px">89%</Typography>
                        </Box>
                      </Box>
                      <Divider color="#eff0f5" />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </>
          );
        })}
      </Container>
      )
      }
    </Box>
  );
};

export default ProductPage;
