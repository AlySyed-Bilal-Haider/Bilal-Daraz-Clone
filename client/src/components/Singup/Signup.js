import React, { useState, useEffect } from "react";
import {
  Typography,
  Container,
  TextField,
  Button,
  useMediaQuery,
  InputBase,
} from "@mui/material";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useSelector } from "react-redux";
// import Stack from "@mui/material/Stack";
import { Link, useNavigate } from "react-router-dom";
import { url } from "../../constants";
function Signup() {
  const user = useSelector((state) => state.user.currentUser);
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [option, setOption] = useState("");

  const [error, setError] = useState(false);
  // const classes = useStyles();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });
  const matches = useMediaQuery("(max-width:600px)");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    if (password != password) {
      alert("password not match");
    } else {
      const user = {
        image,
        name,
        email,
        password,
        gender,
        option
      };
    }
    try {
      let form = new FormData();
      form.append("name", name);
      form.append("email", email);
      form.append("password", password);
      form.append("gender", gender);
      form.append("image", image.image);
      form.append("option", option)

      const result = await axios.post(`${url}/api/users/register`, form);
      console.log(result.data, "result data");
      if (result.data) {
        navigate("/login");
        toast.success("User Created Successfully!",{
          position:"top-center"
        });
      }
    } catch (err) {
      toast.error("Something we wrong",{
        position:"top-center"
      })
      setError(true);
    }
  };
  const handlePhoto = (e) => {
    setImage({ image: e.target.files[0] });
    console.log(e.target.files[0], "image --->");
  };
  return (
    <React.Fragment>
      <Box
        width="100vw"
        height="80vh"
        backgroundColor="#EFF0F5"
        paddingTop="50px"
        sx={{
          width: matches ? "100%" : "90vw",
          height: matches ? "100%" : "100vh",
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: matches ? "column" : "row",
            }}
          >
            <Typography
              sx={{
                fontSize: matches ? "17px" : "25px",
              }}
            >
              Create your Daraz Account
            </Typography>
            <Typography
              sx={{
                fontSize: matches ? "13px" : "15px",
                opacity: "0.5",
              }}
            >
              Already member?
              <Link to="/login">
                <span
                  sx={{
                    typography: "body1",
                    "& > :not(style) + :not(style)": {
                      ml: 2,
                    },
                  }}
                >
                  <Button>Login</Button>
                </span>
              </Link>{" "}
              here.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: matches ? "center" : "center",
            }}
          >
            <Box
              sx={{
                width: matches ? "100%" : "65%",
                height: matches ? "80%" : "500px",
                backgroundColor: "#FFFFFF",
                marginTop: matches ? "10px" : "30px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: matches ? "column" : "space-between",
                }}
              >
                <Box
                  sx={{
                    m: matches ? 3 : 5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                    }}
                  >
                    Phone Number or Email*
                  </Typography>
                  <TextField
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    sx={{ borderTop: "1px solid grey", borderRadius: "5px" }}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                  />
                  <br></br>

                  <Typography
                    sx={{
                      fontSize: "14px",
                    }}
                  >
                    Password*
                  </Typography>
                  <TextField
                    placeholder="Enter your password"
                    type="password"
                    value={password}
                    sx={{ borderTop: "1px solid grey", borderRadius: "5px" }}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                  />
                  <br></br>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: matches ? "column" : "column",
                      // spacing: 4,
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                        }}
                      >
                        Upload Your Image
                      </Typography>
                      <InputBase
                        // className={classes.imageStyle}
                        autoComplete="image"
                        id="image"
                        type="file"
                        name="image"
                        sx={{
                          borderBottom: "1px solid grey",
                          borderRadius: "5px",
                        }}
                        // value={image}
                        accept="image/*"
                        onChange={handlePhoto}
                        required
                      />
                    </Box>

                    <Box
                      sx={{
                        width: "100%",
                        height: "100px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "14px",
                        }}
                      >
                        Gender
                      </Typography>

                      <GenderSelect />
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontSize: "14px",
                        }}
                      >
                        Who is
                      </Typography>

                      <RoleSelect />
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    m: matches ? 3 : 4,
                    marginTop: matches ? "-220px" : "null",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                    }}
                  >
                    Full name*
                  </Typography>
                  <TextField
                    // className={classes.formStyle}
                    value={name}
                    placeholder="Enter your name"
                    sx={{ borderTop: "1px solid grey", borderRadius: "5px" }}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                  />
                  <br></br>

                  <CheckboxLabels />
                  <Box
                    sx={{
                      "& button": { m: 2 },
                    }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      onClick={handleSubmit}
                      sx={{
                        backgroundColor: "#F57224",
                        width: matches ? "200px" : "290px",
                        fontSize: matches ? "12px" : "15px",
                      }}
                    >
                      Sign Up
                    </Button>
                  </Box>

                  <Typography sx={{ fontSize: matches ? "10px" : "12px" }}>
                    By clicking “SIGN UP”, I agree to Daraz's Terms of Use and
                    Privacy Policy
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "12px",
                    }}
                  >
                    <br></br>
                    Or, sign up with
                  </Typography>
                  <br></br>

                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      width: matches ? "200px" : "290px",
                      fontSize: matches ? "10px" : "12px",
                    }}
                  >
                    Sign Up with Email
                  </Button>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: matches ? "column" : "row",
                    }}
                  >
                    <Box
                      sx={{
                        "& button": { m: 2 },
                        fontSize: "24px",
                      }}
                    >
                      <Button
                        variant="contained"
                        size="large"
                        sx={{
                          backgroundColor: "#3B5998",
                          width: matches ? "180px" : "120px",
                        }}
                      >
                        FaceBook
                      </Button>
                    </Box>

                    <Box
                      sx={{
                        "& button": { m: 2 },
                        fontSize: "24px",
                      }}
                    >
                      <Button
                        variant="contained"
                        size="large"
                        sx={{
                          backgroundColor: "#D34836",
                          width: matches ? "180px" : "120px",
                        }}
                      >
                        Google
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <ToastContainer />
    </React.Fragment>
  );

  function CheckboxLabels() {
    return (
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="I'd like to receive exclusive offers and promotions via SMS"
        />
      </FormGroup>
    );
  }
  function GenderSelect() {
    const handleChange = (event) => {
      setGender(event.target.value);
    };
   
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            
            value={gender}
            onChange={handleChange}
            sx={{ width: 128 }}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  }
  function RoleSelect() {
    const handleChange = (event) => {
      setOption(event.target.value);
    };
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={option}
            onChange={handleChange}
            sx={{ width: 128 }}
          >
            <MenuItem value="buyer">Buyer</MenuItem>
            <MenuItem value="seller">Seller</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  }
  function MyFormHelperText() {
    const { focused } = useFormControl() || {};

    const helperText = React.useMemo(() => {
      if (focused) {
        return "You can't leave this empty.";
      }
      return "";
    }, [focused]);

    return <FormHelperText>{helperText}</FormHelperText>;
  }
}
export default Signup;
