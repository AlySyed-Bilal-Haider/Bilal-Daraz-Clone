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
import { url } from "../constants";

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

export default function AddProduct() {
  const [Product, setProduct] = React.useState({
    image: "",
    name: "",
    price: "",
    Qauntity: "",
    category: "",
  });
  const changeHandler = (e) => {
    setProduct({ ...Product, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setProduct({ ...Product, image: e.target.files });
    console.log(e.target.files, "bcsdj --->");
  };

  const submitHandler = async (event) => {
    // console.log(Product);
    event.preventDefault();
    // e.preventDefault();\
    let form = new FormData();
    form.append("name", Product.name);
    form.append("price", Product.price);
    form.append("Qauntity", Product.Qauntity);
    form.append("category", Product.category);
    for (let i = 0; i < Product.image.length; i++) {
      const file = Product.image[i];
      form.append("image", file);
    }

    try {
      const res = await axios.post(
        `${url}/api/products/addproduct`,
        form
      );
      swal.fire("Congrants", "Products is added sucessfully", "success");
      console.log(res.data);
    } catch (error) {
      console.log(error);
      swal.fire("Oops", "something went wrong", "error");
    }
    // name, email, password
    setProduct({
      image: "",
      name: "",
      price: "",
      Qauntity: "",
      category: "",
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Add Products
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
                  label="Product Name"
                  value={Product.name || ""}
                  name="name"
                  onChange={changeHandler}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="number"
                  id="price"
                  label="Product price"
                  value={Product.price || ""}
                  onChange={changeHandler}
                  name="price"
                  autoComplete="price"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="number"
                  id="Qauntity"
                  label=" Product Qauntity"
                  value={Product.Qauntity || ""}
                  onChange={changeHandler}
                  name="Qauntity"
                  autoComplete="Qauntity"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="text"
                  id="category"
                  label=" Product Category"
                  value={Product.category || ""}
                  onChange={changeHandler}
                  name="category"
                  autoComplete="category"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Prduct
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
