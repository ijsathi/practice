import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './DashboardAppData.css';

const DashboardAppData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("../data.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 0, sm: 6, md: 16 }}>

                    {
                        data.map(data =>
                            <Grid item xs={2} sm={4} md={4}>
                                <Link  style={{textDecoration:"none" }} to='/dashboard/selectCloud'>
                                <Card className='dash-card' style={{ marginTop: "18px" }} sx={{ maxWidth: 230, height: 250 }}>
                                    <CardMedia
                                        component="img"
                                        style={{ width: "45px",margin:"15px", height:"px" }}
                                        image={data.img}
                                        alt={data.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="p" component="div">
                                            {data.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {data.description_1}
                                        </Typography>
                                        <Typography variant="p" style={{fontSize:"14px"}} color="text.dark">
                                            {data.description_2}
                                        </Typography>
                                    </CardContent>
                                </Card>
                                </Link>
                            </Grid>

                        )
                    }
                </Grid>
            </Box>

        </div>
    );
};

export default DashboardAppData;