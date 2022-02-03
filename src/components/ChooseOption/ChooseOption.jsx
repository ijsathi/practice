import { Button, Card, CardContent, CardMedia, Grid, Menu, MenuItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import './ChooseOption.css';

const ChooseOption = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            {/* jjj=============================================== */}
            <Typography className='up-text' variant='h4'>
                Ansible installation
            </Typography>
            <Typography variant='p'>
                <ol>
                    <li style={{ marginRight: "25px" }}>Environment</li>
                    <li className='text-li' style={{ marginRight: "25px" }} >Machines</li>
                    <li className='text-li' style={{ marginRight: "25px" }}>Security</li>
                    <li className='text-li' style={{ marginRight: "25px" }}>Dependencies</li>
                    <li className='text-li'>Installation</li>
                </ol>
            </Typography>
            <Typography style={{ marginLeft: "25px", paddingTop: "20px", fontWeight: "bold" }} variant='h6'>
                Choose a deployment environment
            </Typography>
            <Grid className='grid-card-all'>
                {/*========================= card one ==========================*/}
                <div>
                    <Button>

                        <Card className='grid-card' style={{ width: "250px" }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                // height="140"
                                style={{ width: "160px", marginTop: "26px", marginLeft: "15px" }}
                                image="https://i.ibb.co/3mZnzhd/Capture.png"
                            />
                            <CardContent>
                                <Typography style={{ fontSize: "18px", marginLeft: "-37px", fontWeight: "bold" }} className='cloud' gutterBottom variant="h5" component="div">
                                    Private Cloud
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Use your own servers.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Button>
                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                    </Menu>
                </div>

                {/*========================= card two ==========================*/}
                <div>
                    <Button
                        id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <Card className='grid-card' style={{ width: "250px" }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                // height="140"
                                style={{ width: "120px", marginTop: "26px", marginLeft: "15px" }}
                                image="https://i.ibb.co/mcVJ0R0/Capturre.png"
                            />
                            <CardContent>
                                <Typography style={{ fontSize: "18px", marginLeft: "-60px", fontWeight: "bold" }} className='cloud' variant="h5" >
                                    Public Cloud
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <span> AWS, Azure, GCP, or other.</span>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Button>
                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <Link style={{textDecoration:"none"}}  to='/dashboard/selectCloud/payment_field' >
                        <Typography style={{fontWeight:"bold", color:"black", marginLeft:"25px"}} variant='h6'>
                            Choose a cloud provider
                            </Typography>
                        <Grid className="grid-card-all">
                            <MenuItem onClick={handleClose}>
                                <Box className='option'>
                                    <img src="https://xpert-careers.com/wp-content/uploads/2021/02/aws1.png" alt="" />
                                </Box>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Box className='option'>
                                    <img src="https://www.freecodecamp.org/news/content/images/2020/10/gcp.png" alt="" />
                                </Box>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Box className='option'>
                                    <img src="https://blogs.vmware.com/vmworld/files/2021/09/MS-Azure_logo_stacked_c-gray_rgb.png" alt="" />
                                </Box>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Box className='option'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmqBoM7V5oDoDwWvSGDfi7Df6IsUdjvciCDI7I1sW9VP9whsjx1ebufxmV4obU8jy8fd8&usqp=CAU" alt="" />
                                </Box>
                            </MenuItem>
                        </Grid>
                        </Link>
                    </Menu>
                </div>
            </Grid>
        </>
    );
};

export default ChooseOption;