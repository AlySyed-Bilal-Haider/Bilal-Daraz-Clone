import React from "react";
import { Typography, Container, Box, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { url } from "../../constants";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";
import { loginFailure, loginStart, loginSuccess } from "../../store/userSlice";
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  spanstyle: { color: "red", marginTop: "10px" },
  typo: { padding: "1rem" },
}));
function Loginfoam() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const user = useSelector((state) => state.user.currentUser);
  useEffect(() => {
      if(user){
          navigate('/')
      }
  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    login(dispatch, { email, password });
  }
    const login = async(dispatch,user)=>{
      dispatch(loginStart());
      try {
        const result = await axios.post(`${url}/api/users/login`, {
          email,
          password,
        });

        dispatch(loginSuccess(result.data));
        localStorage.setItem('currentUser',JSON.stringify(result.data))
        window.location.href='/'
        toast.success("User login Successfully!",{
      position:"top-center"
    });
      } catch (error) {
        toast.error("Something we wrong",{
          position:"top-center"
        })
        dispatch(loginFailure());
      }
  };
  return (
    <React.Fragment>
       <ToastContainer />
      <Box
        width="100vw"
        height="70vh"
        backgroundColor="#EFF0F5"
        paddingTop="50px"
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Typography
              sx={{
                fontSize: "25px",
              }}
            >
              Welcome to Daraz! Please login.
            </Typography>

            <Typography
              sx={{
                fontSize: "15px",
                opacity: "0.5",
              }}
            >
              New member?
              <span
                sx={{
                  typography: "body1",
                  "& > :not(style) + :not(style)": {
                    ml: 2,
                  },
                }}
                onClick={ProgressEvent}
              >
                <Link lassName={classes.typo} to="/register">
                  Register
                </Link>
              </span>{" "}
              here.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "65%",
                height: "300px",
                backgroundColor: "#FFFFFF",
                marginTop: "30px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "space-between",
                }}
              >
                <Box
                  sx={{
                    m: 5,
                  }}
                >
                  <Typography sx={{ fontSize: "14px" }}>
                    Phone Number or Email*
                  </Typography>
                  <TextField
                    sx={{ width: "350px" }}
                    placeholder="Enter email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    required
                  />
                  <br></br>
                  <Typography sx={{ fontSize: "14px" }}>Password*</Typography>
                  <TextField
                    placeholder="Enter password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    required
                  />

                  <Typography
                    sx={{
                      fontSize: "15px",
                      marginTop: "10px",
                      marginLeft: "60%",
                    }}
                  >
                    <span
                      sx={{
                        typography: "body1",
                        "& > :not(style) + :not(style)": {
                          // ml: 2,
                        },
                      }}
                      onClick={ProgressEvent}
                    >
                      <Link href="#">Forget Password ?</Link>
                    </span>
                  </Typography>
                </Box>

                <Box
                  sx={{
                    m: 4,
                  }}
                >
                  <Box
                    sx={{
                      "& button": { m: 2 },
                      // width: "400px",
                      fontSize: "24px",
                    }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      onClick={handleSubmit}
                      disabled={isFetching}
                      sx={{
                        backgroundColor: "#F57224",
                        width: "200px",
                      }}
                    >
                      login
                    </Button>
                  </Box>
                  {error && (
                    <Box component="span" className={classes.spanstyle}>
                      Email or Password is Incorrect!
                    </Box>
                  )}

                  <Box sx={{ "& button": { m: 2 }, fontSize: "24px" }}>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        backgroundColor: "#3B5998",
                        width: "200px",
                      }}
                    >
                      FaceBook
                    </Button>
                  </Box>

                  <Box sx={{ "& button": { m: 2 }, fontSize: "24px" }}>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        backgroundColor: "#D34836",
                        width: "200px",
                      }}
                    >
                      Google
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}
export default Loginfoam;
