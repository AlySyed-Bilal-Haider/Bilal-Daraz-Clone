import React from "react";
import axios from "axios";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Box,
  InputBase,
} from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles(() => ({
  paperStyle: {
    marginTop: 115,
    padding: 20,
    height: "90vh",
    width: 420,
    margin: "20px auto",
  },
  headerStyle: { margin: 0 },
  avatarStyle: { backgroundColor: "#1bbd7e", marginBottom: "21px" },
  btnstyle: { margin: "8px 0" },
  spanstyle: { color: "red", marginTop: "10px" },
  formStyle: {
    padding: "1rem",
  },
  imageStyle: {
    padding: "1rem",
  },
}));
const Register = () => {
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState(false);
  const classes = useStyles();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    try {
      let form = new FormData();
      form.append("name", name);
      form.append("email", email);
      form.append("password", password);
      form.append("role", role);
      form.append("image", image.image);

      const result = await axios.post(
        `http://localhost:5000/api/users/register`,
        form
      );
      console.log(result.data, "result data");
      if (result.data) {
        alert("User Created Successfully!");
        navigate("/login");
      }
    } catch (err) {
      setError(true);
    }
  };
  const handlePhoto = (e) => {
    setImage({ image: e.target.files[0] });
  };
  return (
    <Grid>
      <Paper elevation={20} className={classes.paperStyle}>
        <Grid align="center">
          <Avatar className={classes.avatarStyle}>
            <CreateIcon />
          </Avatar>
          <h2 className={classes.headerStyle}>Sign up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account!
          </Typography>
        </Grid>
        {/* <img src={''} alt="wrapper" className={classes.image} /> */}
        <form onSubmit={handleSubmit}>
          <InputBase
            fullWidth
            className={classes.imageStyle}
            autoComplete="image"
            id="image"
            type="file"
            name="image"
            accept="image/*"
            onChange={handlePhoto}
            required
          />
          <TextField
            className={classes.formStyle}
            label="Name"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <TextField
            className={classes.formStyle}
            label="Email"
            placeholder="Enter your email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
          <TextField
            className={classes.formStyle}
            label="Password"
            placeholder="Enter your password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
          <TextField
            className={classes.formStyle}
            label="role"
            placeholder="Enter your Role"
            type="role"
            onChange={(e) => setRole(e.target.value)}
            fullWidth
          />

          <Button
            type="submit"
            color="primary"
            variant="contained"
            className={classes.btnstyle}
            fullWidth
          >
            Sign up
          </Button>
        </form>
        {error && (
          <Box component="span" className={classes.spanstyle}>
            Something went wrong! Make sure Password should be atleast 8
            characters long.
          </Box>
        )}
      </Paper>
    </Grid>
  );
};
export default Register;
