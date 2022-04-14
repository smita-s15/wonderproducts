import React from 'react'
import { Container, Box } from '@mui/material/'
import Typography from '@mui/material/Typography'
import Slider from "react-slick";


export const Clients = () => {
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
        <>
            <Container fixed sx={{ margin: '100px auto',overflow:"hidden" }}>
                <Typography variant="h3" color="initial">
                    Clients
                </Typography>
                <br />
                <Slider {...settings}>
                    <Box sx={{
                        transition: '1s linear', "&:hover": {
                            transform: 'scale(1.5)',
                        }
                    }}>
                        <img src={require("../../ui/assets/Clients/image 74.png")} alt="" />
                    </Box>
                    <Box sx={{
                        transition: '1s linear', "&:hover": {
                            transform: 'scale(1.5)',
                        }
                    }}>
                        <img src={require("../../ui/assets/Clients/image 75.png")} alt="" />
                    </Box>
                    <Box sx={{
                        transition: '1s linear', "&:hover": {
                            transform: 'scale(1.5)',
                        }
                    }}>
                        <img src={require("../../ui/assets/Clients/Group 1000001768.png")} alt="" />
                    </Box>
                    <Box sx={{
                        transition: '1s linear', "&:hover": {
                            transform: 'scale(1.5)',
                        }
                    }}>
                        <img src={require("../../ui/assets/Clients/PngItem_1057053 1.png")} alt="" />
                    </Box>
                    <Box sx={{
                        transition: '1s linear', "&:hover": {
                            transform: 'scale(1.5)',
                        }
                    }}>
                        <img src={require("../../ui/assets/Clients/image 78.png")} alt="" />
                    </Box>
                    <Box sx={{
                        transition: '1s linear', "&:hover": {
                            transform: 'scale(1.5)',
                        }
                    }}>
                        <img src={require("../../ui/assets/Clients/image 79.png")} alt="" />
                    </Box>
                </Slider>
            </Container>
        </>
    )
}

