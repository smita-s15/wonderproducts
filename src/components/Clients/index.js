import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Slider from 'react-slick';

export const Clients = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
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
        <Box flexDirection='column'  position='relative' sx={{ display: 'flex', justifyContent: 'center', width: '100%', gap: '30px' }} >
            <Container fixed sx={{ margin: '10px auto',  height:'300px' }}>
                <Typography variant='h3' >
                    Clients
                </Typography>
                <br />
                <br />
                    <Slider {...settings}>
                        <div>
                            <img src={require("../../ui/assets/Clients/image 74.png")} alt="" />
                        </div>
                        <div>
                            <img src={require("../../ui/assets/Clients/image 75.png")} alt="" />
                        </div>
                        <div>
                            <img src={require("../../ui/assets/Clients/Group 1000001768.png")} alt="" />
                        </div>
                        <div>
                            <img src={require("../../ui/assets/Clients/PngItem_1057053 1.png")} alt="" />
                        </div>
                        <div>
                            <img src={require("../../ui/assets/Clients/image 78.png")} alt="" />
                        </div>
                        <div>
                            <img src={require("../../ui/assets/Clients/image 79.png")} alt="" />
                        </div>
                    </Slider>
            </Container>
        </Box>
    )
}
