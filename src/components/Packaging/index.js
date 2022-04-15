import React from 'react'
import { Container, Box } from '@mui/material/'
import Typography from '@mui/material/Typography'
import Slider from "react-slick";


const Packaging = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:4,
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
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Container fixed sx={{ margin: '100px auto',overflow:"hidden",  }}>
                <Typography variant="h3" color="initial">
                    Packaging
                </Typography>
                <br />
                <Slider {...settings}>
                    <Box sx={{
                        transition: '1s linear', "&:hover": {
                            transform: 'scale(1.5)',
                        }
                    }}>
                        <img src={require("../../ui/assets/Packaging/shampoo-0.png")} alt="clients" />
                    </Box>
                    <Box sx={{
                        transition: '1s linear', "&:hover": {
                            transform: 'scale(1.5)',
                        }
                    }}>
                        <img src={require("../../ui/assets/Packaging/shampoo-0.png")} alt="clients" />
                    </Box>
                    <Box sx={{
                        transition: '1s linear', "&:hover": {
                            transform: 'scale(1.5)',
                        }
                    }}>
                        <img src={require("../../ui/assets/Packaging/shampoo-0.png")} alt="clients" />
                    </Box>
                    <Box sx={{
                        transition: '1s linear', "&:hover": {
                            transform: 'scale(1.5)',
                        }
                    }}>
                        <img src={require("../../ui/assets/Packaging/shampoo-0.png")} alt="clients" />
                    </Box>
                    <Box sx={{
                        transition: '1s linear', "&:hover": {
                            transform: 'scale(1.5)',
                        }
                    }}>
                        <img src={require("../../ui/assets/Packaging/shampoo-0.png")} alt="clients" />
                    </Box>
                    <Box sx={{
                        transition: '1s linear', "&:hover": {
                            transform: 'scale(1.5)',
                        }
                    }}>
                        <img src={require("../../ui/assets/Packaging/shampoo-0.png")} alt="clients" />
                    </Box>
                    <Box sx={{
                        transition: '1s linear', "&:hover": {
                            transform: 'scale(1.5)',
                        }
                    }}>
                        <img src={require("../../ui/assets/Packaging/shampoo-0.png")} alt="clients" />
                    </Box>
                    <Box sx={{
                        transition: '1s linear', "&:hover": {
                            transform: 'scale(1.5)',
                        }
                    }}>
                        <img src={require("../../ui/assets/Packaging/shampoo-0.png")} alt="clients" />
                    </Box>
                    <Box sx={{
                        transition: '1s linear', "&:hover": {
                            transform: 'scale(1.5)',
                        }
                    }}>
                        <img src={require("../../ui/assets/Packaging/shampoo-0.png")} alt="clients" />
                    </Box>
                </Slider>
            </Container>
        </Box>
    )
}

export default Packaging
