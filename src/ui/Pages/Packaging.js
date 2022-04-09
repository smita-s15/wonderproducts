import { Box, Container, Grid, Typography } from '@mui/material'
import { width } from '@mui/system'
import React from 'react'

export const Packaging = () => {
    return (
        <Box flexDirection='column' sx={{ display: 'flex', justifyContent: 'center', width: '100%', gap: '30px' }}  >
            <Box width='100%' height='50vh' bgcolor='#B4C9CE' sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'left' }} position='relative'>
                <Box position='absolute' width='100%'>
                    <img src={require("../../ui/assets/Packaging/Packaging.png")} alt="" style={{ height: "100%", width: '100%' }} />
                </Box >
                <Box sx={{ m: '100px auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }} position='absolute' width='50%'>
                    <Typography variant='h1'  >
                        Packaging
                    </Typography>
                </Box>
            </Box>
            <Container fixed sx={{ padding: '100px, auto', marginY: '100px' }} >
                <Grid container xl={12} lg={12} md={12} gap='100px'>
                    {details.map((item, index) => {
                        return <Grid key={index} xl={3} lg={3} md={4} item bgcolor='#B4C9CE33' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px auto', width: '25%', height: '150px', borderRadius:'10px'}}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', width:'40%', marginX:'5' }}>
                                {item.image}
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'flex-start', flexWrap: 'wrap', width:'60%' , marginX:'5'}}>
                                <Typography variant='h6' >
                                    {item.title}
                                </Typography>
                            </Box>
                        </Grid>
                    }
                    )}
                </Grid>
            </Container>
        </Box>
    )
}


const details = [
    {
        image: <img src={require("../../ui/assets/Packaging/212565410 2.png")} alt="" />,
        title: ' sachet packing'
    },
    {
        image: <img src={require("../../ui/assets/Packaging/m003t290_feb1422_spout_pouch_02 1.png")} alt=""  />,
        title: ' spouted sachets packing'
    },
    {
        image: <img src={require("../../ui/assets/Packaging/M011T109_Mini_Scent_Bottle_01.png")} alt="" style={{ height: "100px", width: "100px" }} />,
        title: ' perfume packing'
    },
    {
        image: <img src={require("../../ui/assets/Packaging/0-5-oz-cream-tube-mockup-front-view0 1 (1).png")} alt=""  />,
        title: 'Tube Packing'
    },
    {
        image: <img src={require("../../ui/assets/Packaging/146 1.png")} alt=""  />,
        title: 'profile sachets packing'
    },
    {
        image: <img src={require("../../ui/assets/Packaging/Group 1000001868.png")} alt=""  />,
        title: 'can packing'
    },
    {
        image: <img src={require("../../ui/assets/Packaging/shampoo-0.png")} alt="" style={{ height: "100px", width: "100px" }} />,
        title: 'Bottle packing'
    },
    {
        image: <img src={require("../../ui/assets/Packaging/Untitled-1 1.png")} alt=""  />,
        title: 'patches packing'
    },
    {
        image: <img src={require("../../ui/assets/Packaging/15_September-_Soap_05.png")} alt=""  />,
        title: 'soap packing'
    },
    {
        image: <img src={require("../../ui/assets/Packaging/jar-022 (1).png")} alt=""  />,
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
        image: <img src={require("../../ui/assets/Packaging/card-hand-sanitizer-mockup-perspective-view 1.png")} alt=""  />,
        title: 'Pocket Pack Packing'
    },
    {
        image: <img src={require("../../ui/assets/Packaging/mouthwash-bottle-mockup-front-view 1.png")} alt=""  />,
        title: 'oral packing'
    },
    {
        image: <img src={require("../../ui/assets/Packaging/M010T003_Detergent_Bottle_2 1.png")} alt=""  />,
        title: 'profile bottles packing'
    },
    {
        image: <img src={require("../../ui/assets/Packaging/pngfind 1.png")} alt=""  />,
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