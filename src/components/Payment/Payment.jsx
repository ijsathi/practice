import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={6} md={8}>
                <Box
                style={{ display: "block" }}
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '75ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <Typography component="div" style={{ fontWeight: "bold", paddingTop: "30px", paddingLeft: "20px" }} variant='p'>
                    Access
                </Typography> <br />
                <Typography style={{ marginLeft: "29px" }} variant='p'>
                    The following information will only be used to generate an installation script for you.
                </Typography><br />
                <TextField style={{ marginLeft: "29px" }} id="outlined-basic" label="Linux Username*" variant="outlined" /><br />
                <TextField style={{ marginLeft: "29px" }} id="outlined-basic" label="SSH private key location*" variant="outlined" /><br />
                <Typography component="div" style={{ fontWeight: "bold", paddingTop: "30px", paddingLeft: "20px" }} variant='p'>
                    Machines
                </Typography> <br />
                <TextField style={{ marginLeft: "29px" }} id="outlined-basic" label="Machine 1 hostname*" variant="outlined" /><br />
                <TextField style={{ marginLeft: "29px" }} id="outlined-basic" label="Machine 2 hostname*" variant="outlined" /><br />
                <TextField style={{ marginLeft: "29px" }} id="outlined-basic" label="Machine 3 hostname*" variant="outlined" /><br />
                <TextField style={{ marginLeft: "29px" }} id="outlined-basic" label="Machine 4 hostname*" variant="outlined" /><br />
                <TextField style={{ marginLeft: "29px" }} id="outlined-basic" label="Machine 5 hostname*" variant="outlined" /><br />
                <TextField style={{ marginLeft: "29px" }} id="outlined-basic" label="Machine 6 hostname*" variant="outlined" /><br />
                <Typography style={{ display: "flex" }} variant='p'>
                    <Link style={{ textDecoration: "none" }} to='/dashboard/selectCloud'>
                        <Grid style={{ marginLeft: "23px" }}>
                            <Button variant="outlined">Go Back</Button>
                        </Grid>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to='/dashboard/applications'>
                        <Grid style={{ marginLeft: "30px" }}>
                            <Button variant="contained">Continue</Button>
                        </Grid>
                    </Link>
                </Typography>
            </Box>
                </Grid>
                <Grid item xs={6} md={4}>

                </Grid>
            </Grid>
           
        </div>
    );
};

export default Payment;