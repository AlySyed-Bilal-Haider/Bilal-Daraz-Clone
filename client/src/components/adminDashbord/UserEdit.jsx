import * as React from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import axios from "axios";

import swal from "sweetalert2";

const theme = createTheme();

export default function EditUser() {
  const { id } = useParams();
  console.log(id, "--------------------");
  const [User, setUser] = React.useState({
    name: "",
    email: "",
    role: "",
    gender: "",
  });
  console.log(User, "jjjjkk");
  const changeHandler = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value });
  };

  const GetUser = async () => {
    try {
      const res = await axios.post(`http://localhost:5000/api/users/userbyid`, {
        _id: id,
      });

      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    GetUser();
  }, [id]);

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.put(
        `http://localhost:5000/api/users/update/${id}`,
        { name: User.name, email: User.email, gender: User.gender }
      );
      swal.fire("Congrants", "Users is added sucessfully", "success");
      console.log(res.data, "uer-----------------------------------------");
    } catch (error) {
      console.log(error);
      swal.fire("Oops", "something went wrong", "error");
    }
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
            Update
          </Typography>
          <Box component="form" onSubmit={submitHandler} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  autoComplete="name"
                  id="name"
                  type="text"
                  label="Enter Full Name"
                  value={User?.name}
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
                  value={User?.email || ""}
                  name="email"
                  onChange={changeHandler}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="text"
                  id="role"
                  label="Enter role"
                  value={User?.role || ""}
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
                  value={User?.gender || ""}
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
              Update
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
