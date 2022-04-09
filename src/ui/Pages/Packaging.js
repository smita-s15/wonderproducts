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
            <Container fixed sx={{ padding: '100px, auto', marginY:'100px' }} >\
                <Grid container xl={12} lg={12} md={12} gap='100px'>
                    {details.map((item, index) =>
                        <Grid key={index} xl={3} lg={3} md={4} item bgcolor='#B4C9CE33' sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', padding: '10px auto', width: '25%', height: '150px', gap: '10px' }}>
                            <img src={item.image} alt="" style={{ height: "100px", width: '100px' }} />
                            <Box sx={{display:'flex' , justifyContent:'center', alignItems:'flex-start' , flexWrap:'wrap'}}>
                                <Typography variant='h6' textAlign='left'>
                                    {item.title}
                                </Typography>

                            </Box>
                        </Grid>
                    )}

                </Grid>
            </Container>
        </Box>
    )
}


const details = [
    {
        image: 'require("../../ui/assets/Packaging/212565410 2.png")',
        title: ' sachet packing'
    },
    {
        image: 'require("../../ui/assets/Packaging/212565410 2.png")',
        title: ' spouted sachets packing'
    },
    {
        image: 'require("../../ui/assets/Packaging/212565410 2.png")',
        title: ' perfume packing'
    },
    {
        image: 'require("../../ui/assets/Packaging/212565410 2.png")',
        title: 'Tube Packing'
    },
    {
        image: 'require("../../ui/assets/Packaging/212565410 2.png")',
        title: 'profile sachets packing'
    },
    {
        image: 'require("../../ui/assets/Packaging/212565410 2.png")',
        title: 'can packing'
    },
    {
        image: 'require("../../ui/assets/Packaging/212565410 2.png")',
        title: 'Bottle packing'
    },
    {
        image: 'require("../../ui/assets/Packaging/212565410 2.png")',
        title: 'patches packing'
    },
    {
        image: 'require("../../ui/assets/Packaging/212565410 2.png")',
        title: 'soap packing'
    },
    {
        image: 'require("../../ui/assets/Packaging/212565410 2.png")',
        title: 'Jar packing'
    },
    {
        image: 'require("../../ui/assets/Packaging/212565410 2.png")',
        title: 'roll-on packing'
    },
    {
        image: 'require("../../ui/assets/Packaging/212565410 2.png")',
        title: 'Hard Gels packing'
    },
    {
        image: 'require("../../ui/assets/Packaging/212565410 2.png")',
        title: 'Pocket Pack Packing'
    },
    {
        image: 'require("../../ui/assets/Packaging/212565410 2.png")',
        title: 'oral packing'
    },
    {
        image: 'require("../../ui/assets/Packaging/212565410 2.png")',
        title: 'profile bottles packing'
    },
    {
        image: 'require("../../ui/assets/Packaging/212565410 2.png")',
        title: 'Shoes Polish Packing'
    },
    {
        image: 'require("../../ui/assets/Packaging/212565410 2.png")',
        title: 'detergent packing'
    },
    {
        image: 'require("../../ui/assets/Packaging/212565410 2.png")',
        title: 'Dish Wash cake'
    },
    {
        image: 'require("../../ui/assets/Packaging/212565410 2.png")',
        title: 'Cleaners packing'
    },
    {
        image: 'require("../../ui/assets/Packaging/212565410 2.png")',
        title: 'Detergent Cake'
    }
]