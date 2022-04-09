import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useStyles } from './Style';
import Slider from "react-slick";

export const Packaging = () => {

    const classes = useStyles()
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Box flexDirection='column'  position='relative' sx={{ display: 'flex',  justifyContent: 'center', width: '100%', gap: '30px', alignItems:'center' }} marginTop={10} >
        <Container fixed sx={{ margin: '10px auto', height:'30rem',  }}>
            <Box >
                <Typography variant='h3' ml={5}>
                    Packaging
                </Typography>
            </Box>
            <br />
            <br />
            <Slider {...settings}>
                <Box  
                    bgcolor='#B4C9CE17' 
                    sx={{ display:'flex', 
                    alignItems:'center',  
                    justifyContent:'center',
                    transition: '1s linear', "&:hover": {
                        transform: 'scale(1.5)',
                    }
                }}
                >
                    <img src={require("../../ui/assets/Packaging/0-5-oz-cream-tube-mockup-front-view0 1.png")} alt="" style={{ width: '200px', height: '300px' }}  />
                </Box>
                <Box  
                    bgcolor='#B4C9CE17' 
                    sx={{ display:'flex', 
                    alignItems:'center',  
                    justifyContent:'center', 
                    p:'10px' ,
                    transition: '1s linear', "&:hover": {
                        transform: 'scale(1.5)',
                    }
                }}
                >
                    <img src={require("../../ui/assets/Packaging/M003T109_Roll_On_Deodorant_010 1.png")} alt="" style={{ width: '200px', height: '300px' }} />
                </Box>
                <Box  
                    bgcolor='#B4C9CE17' 
                    sx={{ display:'flex', 
                    alignItems:'center',  
                    justifyContent:'center', 
                    p:'10px' ,
                    transition: '1s linear', "&:hover": {
                        transform: 'scale(1.5)',
                    }
                }}
                >
                    <img src={require("../../ui/assets/Packaging/jar-022.png")} alt="" style={{ width: '150px', height: '200px' }} />
                </Box>
                <Box  
                    bgcolor='#B4C9CE17' 
                    sx={{ display:'flex', 
                    alignItems:'center',  
                    justifyContent:'center', 
                    p:'10px' ,
                    transition: '1s linear', "&:hover": {
                        transform: 'scale(1.5)',
                    }
                }}
                >
                    <img src={require("../../ui/assets/Packaging/shampoo-0.png")} alt="" style={{ width: '150px', height: '200px' }} />
                </Box>
                </Slider>
            </Container>
        </Box>
    )
}
