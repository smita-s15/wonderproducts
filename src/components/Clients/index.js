import React from 'react'
import { Container, Box } from '@mui/material/'
import Typography from '@mui/material/Typography'
import Slider from "react-slick";


export const Clients = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 4,
        arrows: false,
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
    const data = [
        {
            img: <img src={require("../../ui/assets/Clients/image 74.png")} alt="" />
        },
        {
            img: <img src={require("../../ui/assets/Clients/image 75.png")} alt="" />
        },
        {
            img: <img src={require("../../ui/assets/Clients/Group 1000001768.png")} alt="" />
        },
        {
            img: <img src={require("../../ui/assets/Clients/PngItem_1057053 1.png")} alt="" />
        },
        {
            img: <img src={require("../../ui/assets/Clients/image 78.png")} alt="" />
        },
        {
            img: <img src={require("../../ui/assets/Clients/image 79.png")} alt="" />
        },
    ]

    return (
        <Container fixed sx={{ margin: '100px auto', }}>
            <Typography variant="h3" color="initial">
                Clients
            </Typography>
            <br />
            <Slider {...settings}>
                {data.map((item, index) =>
                    <Box key={index} sx={{
                        transition: '1s linear', "&:hover": {
                            transform: 'scale(1.3)',
                        }
                    }}>
                        {item.img}
                    </Box>
                )}
            </Slider>
        </Container>
    )
}

