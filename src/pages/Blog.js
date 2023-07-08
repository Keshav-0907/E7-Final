import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea } from '@mui/material';
import { BlogData } from '../Data/BlogData';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';


export default function ActionAreaCard() {
    return (
        <Box>
            <Box sx={{ textAlign: 'center'}}>
                <Typography sx={{ fontSize: '2rem', fontWeight: 'bold'}}>
                    Recent Articles
                </Typography>
            </Box>


            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                '@media (max-width: 1100px)': {
                    display: 'flex',
                    height: 'auto',
                    flexDirection: 'column'
                },
            }}>
                {
                    BlogData.map((item, index) => (
                        <Box key={index}>
                            <Card sx={{ maxWidth: 345, margin: '10px' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={item.imgURL}
                                        alt="green iguana"
                                    />
                                    <CardContent sx={{
                                        minWidth: '20rem',
                                    }}>
                                        <h3>
                                            {item.title}
                                        </h3>
                                    </CardContent>
                                    <CardContent sx={{
                                        minWidth: '20rem',
                                        display: 'flex',
                                    }}>
                                        <span style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}>
                                            <CalendarMonthIcon /> {item.date}
                                        </span>
                                        <span style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginLeft: '15px'
                                        }}>
                                            <AccountCircleIcon /> {item.author}
                                        </span>

                                    </CardContent>

                                    <CardContent>
                                        <Button sx={{
                                            backgroundColor: '#FF971E',
                                            color: '#fff',
                                            borderRadius: '10px',
                                            height: '35px',
                                            '&:hover': {
                                                backgroundColor: '#FFB55F',
                                                color: '#fff',
                                            },
                                        }} variant="contained">
                                            <Link style={{ color: 'black', textDecoration: 'none' }} to={item.link}> Read More </Link>
                                        </Button>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>
                    ))
                }

            </Box>
        </Box>

    );
}