import React, { useState, useEffect } from 'react';
import { Grid, Button, Card, CardContent, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from "@mui/styles";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import { url } from '../../constants';
// import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';
import { loginFailure, loginStart, loginSuccess } from "../../store/userSlice";
const useStyle = makeStyles(theme => ({
    Userprofile:{
        fontFamily:"Quicksand"
    },
    container: {
        margin: '100px 110px',

    },
    text1:{
        borderBottom: "2px solid #DBD7D7",
        width: '30%',
    },
    paddingadd:{
        padding: '10px 20px',
        borderBottom:"1px solid gray",
        border:"none",
        backgroundColor:"#F0F0F0"
    },
    image: {
        textAlign: 'center',
        margin:"auto",
        display: 'block',
        width: "160px",
        height: "160px",
        borderRadius: "80px",
        boxShadow: 'rgb(0 0 1 / 30%) 0px 5px 10px',
        border: '4px solid #E6C8C5',
    },
    spanstyle: { color: "red", marginTop: "10px" },
    addIcon: { marginLeft: 190 },
}));
const initialUserprofile = {
    gender: '',
    name: '',
    email: '',
    image:'',
}
const CreateAdminprofile = () => {
    const { id } = useParams();
    console.log(id,"--------------------------ss")
    const classes = useStyle();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser);
    const [userprofiledata, setUserprofiledata] = useState(initialUserprofile);
    const [imageurl, setImageurl] = useState('');
    const imgbefore = `${url}/uploads/${userprofiledata.image}`
    const userid = user?.id;

    useEffect(() => {
        const getImage = async () => {
            if (userprofiledata.image) {
                var reader = new FileReader();
                reader.onloadend = function () {
                    setImageurl(reader.result)
                }
                reader.readAsDataURL(userprofiledata.image);
            }
        }
        getImage();
    }, [userprofiledata.image])
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${url}/api/users/getUserprofile/${id}`)
            console.log(response.data,"-------------------------")
            setUserprofiledata({gender: response.data.userProfile.gender,name: response.data.userProfile.name, email: response.data.userProfile.email,image:response.data.userProfile.image})
        }
        fetchData()
    }, [id])
    // const saveUserprofile = async () => {
    //     await createUserprofile(dispatch, userprofiledata);
    // }
    const handleChange = (e) => {
        setUserprofiledata({ ...userprofiledata, [e.target.name]: e.target.type==="file"? e.target.files[0]:e.target.value });
    }
    // const createUserprofile = async (dispatch, userprofile) => {
    //     dispatch(loginStart());
    //     try {
    //         const data = new FormData();
    //         data.append("image", userprofiledata.image);
    //         data.append("gender", userprofiledata.gender);
    //         data.append("email", userprofiledata.email);
    //         data.append("name", userprofiledata.name);
    //         const result = await axios.post(`http://localhost:8000/userprofile/${userid}`,
    //             data, {
    //             headers: {
    //                 Authorization: "Bearer " + JSON.parse(localStorage.getItem('currentUser')).accesstoken
    //             }
    //         }
    //         );
    //         dispatch(loginSuccess(result.data));
    //         toast.success('User Profile Saved Successfully!',{
    //             position:'top-center'
    //         });
    //     } catch (err) {
    //         toast.error('Profile not Saved, Something went Wrong!',{
    //             position:"top-center"
    //         })
    //         dispatch(loginFailure());
    //     }
    // };
    return (
        <div className="Userprofile">
            <Grid className={classes.container}>
                <Card style={{ maxWidth: 450, padding: "25px 5px", margin: "0 auto", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" className={classes.text1}>
                            User Profile
                        </Typography>
                        <div>
                            <img src={imageurl ? imageurl : imgbefore} alt="No Profile image" className={classes.image} />
                            <label htmlFor="fileInput">
                                <AddIcon className={classes.addIcon} fontSize="large" color="action" />
                            </label>
                        </div>
                        <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={7} >
                                <input defaultValue={userprofiledata.name} variant="outlined" placeholder="Enter name" onChange={(e) => handleChange(e)}  fullWidth className={classes.paddingadd}/>
                            </Grid>
                            <Grid xs={7} item >
                                <input defaultValue={userprofiledata.email} type='email' placeholder="Enter email" variant="outlined" onChange={(e) => handleChange(e)}  fullWidth className={classes.paddingadd} />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">
                            <Grid xs={12} sm={12} item >
                                <input
                                    name='image'
                                    type="file"
                                    id="fileInput"
                                    style={{ display: "none" }}
                                    onChange={(e) => handleChange(e)}
                                />
                            </Grid>
                            <Grid xs={7} item  >
                                <input defaultValue={userprofiledata.gender} name='gender' placeholder="Enter gender" onChange={(e) => handleChange(e)} variant="outlined" fullWidth className={classes.paddingadd}/>
                            </Grid>
                          
                            <Grid item xs={7} >
                                <Button  variant="contained" color="primary" style={{width:'90%'}}>Save Changes</Button>
                            </Grid>
                        </Grid>
                        
                        {/* {error  &&
                               toast.error("Profile not Saved Something went Wrong!")
                            
                            } */}
                    </CardContent>
                </Card>
            </Grid>
            <ToastContainer />
        </div>
    )
}
export default CreateAdminprofile;
