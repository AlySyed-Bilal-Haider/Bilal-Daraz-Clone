import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import axios from "axios";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import swal from "sweetalert2";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function AddUser() {
  const [Product, setProduct] = React.useState({
    image: "",
    name: "",
    email: "",
    password: "",
    role: "",
    gender: "",
  });
  const changeHandler = (e) => {
    setProduct({ ...Product, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setProduct({ ...Product, image: e.target.files[0] });
    console.log(e.target.files[0], "bcsdj --->");
  };

  const submitHandler = async (event) => {
    // console.log(Product);
    event.preventDefault();
    // e.preventDefault();\
    let form = new FormData();
    form.append("name", Product.name);
    form.append("email", Product.email);
    form.append("password", Product.password);
    form.append("role", Product.role);

    form.append("gender", Product.gender);
    form.append("image", Product.image);

    try {
      const res = await axios.post(
        `http://localhost:5000/api/users/register`,
        form
      );
      swal.fire("Congrants", "Users is added sucessfully", "success");
      console.log(res.data);
    } catch (error) {
      console.log(error);
      swal.fire("Oops", "something went wrong", "error");
    }
    // name, email, password
    setProduct({
      name: "",
      email: "",
      password: "",
      gender: "",
      role: "",
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Add New
          </Typography>
          <Box component="form" onSubmit={submitHandler} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  type="file"
                  name="image"
                  inputProps={{
                    multiple: true,
                  }}
                  onChange={handlePhoto}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  autoComplete="name"
                  id="name"
                  type="text"
                  label="Enter Full Name"
                  value={Product.name || ""}
                  name="name"
                  onChange={changeHandler}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  autoComplete="email"
                  id="email"
                  type="email"
                  label="Enter Email"
                  value={Product.email}
                  name="email"
                  onChange={changeHandler}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="password"
                  id="password"
                  label="Enter Passsword"
                  value={Product.password}
                  onChange={changeHandler}
                  name="password"
                  autoComplete="password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="text"
                  id="role"
                  label="Enter role"
                  value={Product.role || ""}
                  onChange={changeHandler}
                  name="role"
                  autoComplete="role"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="text"
                  id="gender"
                  label="Enter Gender"
                  value={Product.gender || ""}
                  onChange={changeHandler}
                  name="gender"
                  autoComplete="Qauntity"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
