import { Box, Container, Grid, Typography } from '@mui/material'
import { width } from '@mui/system'
import React from 'react'

export const Packaging = () => {
    return (
        <>
            <Box className="half-banner" sx={{ display: 'flex', alignItems: { md: 'flex-end', xs: 'center' } }}>
                <Container fixed>
                    <img src={require("../../ui/assets/Packaging/packagin.png")} alt="" style={{ position: 'absolute', width: '80%', bottom: '10px', }} />
                </Container>
            </Box>

            <Box flexDirection='column' sx={{ display: 'flex', justifyContent: 'center', width: '100%', gap: '30px' }}  >

                <Container fixed sx={{ padding: { md: '100px auto', xs: '50px auto' }, marginY:'100px ', display:'flex', alignItems:'center'}} >
                    <Grid container  >
                        {details.map((item, index) => {
                            return <Grid key={index} item lg='4' md='6' xs='10' >
                                <Box sx={{
                                    width: { md: "350px", xs: '100%' },
                                    height: "135px",
                                    background: "rgba(180, 201, 206, 0.2)",
                                    borderRadius: "10px",
                                    padding: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '30px',
                                    margin:'10px'
                                }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', width: '50%', }}>
                                        {item.image}
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'flex-start', flexWrap: 'wrap', width: '50%', marginX: '5' }}>
                                        <Typography variant='h6' >
                                            {item.title}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        }
                        )}
                    </Grid>
                </Container>
            </Box>
        </>
    )
}


const details = [
    {
        image: <img src={require("../../ui/assets/Packaging/212565410 2.png")} alt="" />,
        title: ' sachet packing'
    },
    {
        image: <img src={require("../../ui/assets/Packaging/m003t290_feb1422_spout_pouch_02 1.png")} alt="" />,
        title: ' spouted sachets packing'
    },
    {
        image: <img src={require("../../ui/assets/Packaging/M011T109_Mini_Scent_Bottle_01.png")} alt="" style={{ height: "100px", width: "100px" }} />,
        title: ' perfume packing'
    },
    {
        image: <img src={require("../../ui/assets/Packaging/0-5-oz-cream-tube-mockup-front-view0 1 (1).png")} alt="" />,
        title: 'Tube Packing'
    },
    {
        image: <img src={require("../../ui/assets/Packaging/146 1.png")} alt="" />,
        title: 'profile sachets packing'
    },
    {
        image: <img src={require("../../ui/assets/Packaging/Group 1000001868.png")} alt="" />,
        title: 'can packing'
    },
    {
        image: <img src={require("../../ui/assets/Packaging/shampoo-0.png")} alt="" style={{ height: "100px", width: "100px" }} />,
        title: 'Bottle packing'
    },
    {
        image: <img src={require("../../ui/assets/Packaging/Untitled-1 1.png")} alt="" />,
        title: 'patches packing'
    },
    {
        image: <img src={require("../../ui/assets/Packaging/15_September-_Soap_05.png")} alt="" />,
        title: 'soap packing'
    },
    {
        image: <img src={require("../../ui/assets/Packaging/jar-022 (1).png")} alt="" />,
        title: 'Jar packing'
    },
    {
        image: <img src={require("../../ui/assets/Packaging/m011t206_roll_on_bottle_02 1.png")} alt="" />,
        title: 'roll-on packing'
    },
    {
        image: <img src={require("../../ui/assets/Packaging/M011T042_Hair_Gel_02 1.png")} alt="" />,
        title: 'Hard Gels packing'
    },
    {
        image: <img src={require("../../ui/assets/Packaging/card-hand-sanitizer-mockup-perspective-view 1.png")} alt="" />,
        title: 'Pocket Pack Packing'
    },
    {
        image: <img src={require("../../ui/assets/Packaging/mouthwash-bottle-mockup-front-view 1.png")} alt="" />,
        title: 'oral packing'
    },
    {
        image: <img src={require("../../ui/assets/Packaging/M010T003_Detergent_Bottle_2 1.png")} alt="" />,
        title: 'profile bottles packing'
    },
    {
        image: <img src={require("../../ui/assets/Packaging/pngfind 1.png")} alt="" />,
        title: 'Shoes Polish Packing'
    },
    {
        image: <img src={require("../../ui/assets/Packaging/M010T098_Detergent_PODS_Package_2.png")} alt="" />,
        title: 'detergent packing'
    },
    {
        image: <img src={require("../../ui/assets/Packaging/lemon-dishwash-bar-500x500 1.png")} alt="" />,
        title: 'Dish Wash cake'
    },
    {
        image: <img src={require("../../ui/assets/Packaging/M003T218_Jan1322_Cleaning_Spray_Bottle_12 1.png")} alt="" />,
        title: 'Cleaners packing'
    },
    {
        image: <img src={require("../../ui/assets/Packaging/soap_box2 2.png")} alt="" />,
        title: 'Detergent Cake'
    }
]