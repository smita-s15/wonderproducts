import { Box, Container, Grid, Typography } from '@mui/material'
import { Clients } from '../../components/Clients'
import React from 'react'

export const Client = () => {
    return (
        <>
        <Box className="half-banner" bgcolor='red' width='100%' sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} >
                <Container fixed sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center',  }} >
                    <img src={require("../../ui/assets/Clients/clients.png")} alt="" style={{ position: 'absolute', width: '80%', bottom: '10px', }} />
                    <Typography variant='h2' position='absolute'  sx={{marginBottom:'-10%'}}>
                    Clients
                    </Typography>
                </Container>
            </Box>
            <Box flexDirection='column' bgcolor='#FBFBFB' sx={{ display: 'flex', justifyContent: 'center', width: '100%', gap: '30px' }}  >
                <Container fixed sx={{ padding: '100px, auto', marginY: '100px' }} >\
                    <Grid container xl={12} lg={12} md={12} sm={12} gap='100px'>
                        {details.map((item, index) =>
                            <Grid key={index} xl={3} lg={3} md={5} sm={6} flexDirection='column' item bgcolor='#FFFFFF' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px auto', width: '30%', height: '300px', gap: '10px', borderRadius: '10px', }} boxShadow='10px'>

                                <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: '#B4C9CE29', alignItems: 'center', height: '200px', width: '250px', margin: '10px', borderRadius: '10px', padding: '20px' }}>
                                    {item.image}
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'flex-start', flexWrap: 'wrap', width: '100%', padding: '10px' }}>
                                    <Typography variant='h5' textAlign='left'>
                                        {item.title}
                                    </Typography>
                                </Box>
                            </Grid>
                        )}

                    </Grid>
                </Container>
            </Box>
        </>
    )
}


const details = [
    {
        image: <img src={require("../../ui/assets/Clients/kindpng_7269149 1.png")} alt="" />,
        title: 'Himalaya'
    },
    {
        image: <img src={require("../../ui/assets/Clients/image 80 (1).png")} alt="" style={{ height: "100px", width: '100px' }} />,
        title: 'Vini Cosmetics '
    },
    {
        image: <img src={require("../../ui/assets/Clients/image 81.png")} alt="" style={{ height: "100px", width: '100px' }} />,
        title: 'Dabur'
    },
    {
        image: <img src={require("../../ui/assets/Clients/image 82.png")} alt="" style={{ height: "100px", width: '100px' }} />,
        title: 'ITC Limited'
    },
    {
        image: <img src={require("../../ui/assets/Clients/Group 1000001769.png")} alt="" style={{ height: "100px", width: '100px' }} />,
        title: 'Nivea'
    },
    {
        image: <img src={require("../../ui/assets/Clients/PngItem_1057053 2.png")} alt="" style={{ height: "100px", width: '100px' }} />,
        title: 'Chicco'
    },
]