import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Box } from '@mui/material'
import { makeStyles } from "@mui/styles";
import { url } from '../../constants';
import LoginIcon from '@mui/icons-material/Login';
import { Link, useNavigate } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    paperStyle: { marginTop: 115, padding: 20, height: '70vh', width: 390, margin: "20px auto", },
    avatarStyle: { backgroundColor: '#1bbd7e' },
    btnstyle: { margin: '7px 0',  },
    spanstyle: { color: "red", marginTop: "10px" },
    textFields:{ padding:"1rem"},
    typo: {padding:"1rem"}
}));
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const classes = useStyles(); 
    const navigate = useNavigate();

    const currentUser =JSON.parse(localStorage.getItem('currentUser'));
    // console.log(currentUser.user,"user........//")
    useEffect(()=>{
        if(currentUser){
            navigate("/")
        }
    },[])
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        const user ={email, password}
        console.log(user)
        // dispatch(loginUser(user));    
        try {
            const result = await axios.post(`${url}/api/users/login`, {
                email,
                password,
            });
            if(result.data){
                alert("User Login Successfully!");
                let localdata=localStorage.setItem("currentUser", JSON.stringify(result.data))
                navigate('/')   
            }
        } catch (err) {
            console.log(err,"err")
            setError (true);
    };
};
    return (
        <Grid>
            <Paper elevation={10} className={classes.paperStyle}>
                <Grid align='center'>
                    <Avatar className={classes.avatarStyle}><LoginIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Email'className={classes.textFields} placeholder='Enter email' type='email' onChange={(e) => setEmail(e.target.value)} fullWidth required />
                <TextField label='Password' className={classes.textFields} placeholder='Enter password' type='password' onChange={(e) => setPassword(e.target.value)} fullWidth required />
                <Button  color='primary' onClick={handleSubmit} variant="contained" className={classes.btnstyle} fullWidth>Sign in</Button>
                {error && <Box component="span" className={classes.spanstyle}>Email or Password is Incorrect!</Box>}
                <Typography className={classes.typo} > Do you have an account?
                    <Link className={classes.typo} to="/register">
                        Register
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login