import React from 'react'
import { Container, Box } from '@mui/material/'
import Typography from '@mui/material/Typography'
import Slider from "react-slick";
import { useStyles } from './Style';



const Packaging = () => {
    const classes = useStyles();
    var settings = {
        dots: false,
        arrows:false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 3,
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
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const Data = [
        {
            img: <img src={require("../../ui/assets/Packaging/jar-022.png")} alt="clients" className={classes.image} />
        },
        {
            img: <img src={require("../../ui/assets/Packaging/0-5-oz-cream-tube-mockup-front-view0 1.png")} alt="clients" className={classes.image} />
        },
        {
            img: <img src={require("../../ui/assets/Packaging/M003T109_Roll_On_Deodorant_010 1.png")} alt="clients" className={classes.image} />
        },
        {
            img: <img src={require("../../ui/assets/Packaging/jar-022.png")} alt="clients" className={classes.image} />
        },
        {
            img: <img src={require("../../ui/assets/Packaging/0-5-oz-cream-tube-mockup-front-view0 1.png")} alt="clients" className={classes.image} />
        },
        {
            img: <img src={require("../../ui/assets/Packaging/M003T109_Roll_On_Deodorant_010 1.png")} alt="clients" className={classes.image} />
        },
    ]
    return (
        <>
            <Container sx={{ margin: { md: '100px auto', xs: '50px auto' }, }}>
                <Typography variant="h3" color="initial">
                    Packaging
                </Typography>
                <br />
                <Slider {...settings}>
                    {Data.map((item, index) =>
                        <>
                            <Box key={index} >
                                {item.img}
                            </Box>
                        </>
                    )}
                </Slider>
            </Container>
        </>
    )



}
export default Packaging