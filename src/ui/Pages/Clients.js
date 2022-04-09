import { Box, Container, Grid, Typography } from '@mui/material'
import { Clients } from '../../components/Clients'
import React from 'react'

export const Client = () => {
    return (
        <>
        <Box flexDirection='column' sx={{ display: 'flex', justifyContent: 'center', width: '100%', gap: '30px' }}  >
            <Box width='100%' height='50vh' bgcolor='#B4C9CE' sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'left' }} position='relative'>
                <Box position='absolute' width='100%'>
                    <img src={require("../../ui/assets/Clients/clients.png")} alt="" style={{ height: "100%", width: '100%' }} />
                </Box >
                <Box sx={{ m: '100px auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }} position='absolute' width='50%'>
                    <Typography variant='h1'  >
                        Clients
                    </Typography>
                </Box>
            </Box>
            <Container fixed sx={{ padding: '100px, auto', marginY:'100px' }} >\
                <Grid container xl={12} lg={12} md={12} gap='100px'>
                    {details.map((item, index) =>
                        <Grid key={index} xl={3} lg={3} md={5} flexDirection='column' item bgcolor='#B4C9CE33' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px auto', width: '30%', height: '150px', gap: '10px' }}>
                            <img src={item.image} alt="" style={{ height: "100px", width: '100px' }} />
                            <Box sx={{display:'flex' , justifyContent:'center', alignItems:'flex-start' , flexWrap:'wrap', width:'100%'}}>
                                <Typography variant='h6' textAlign='left'>
                                    {item.title}
                                </Typography>

                            </Box>
                        </Grid>
                    )}

                </Grid>
            </Container>
        </Box>
        <Clients />
        </>
    )
}


const details = [
    {
        image: 'require("../../ui/assets/Packaging/212565410 2.png")',
        title: 'Himalaya'
    },
    {
        image: 'require("../../ui/assets/Packaging/212565410 2.png")',
        title: 'Vini Cosmetics '
    },
    {
        image: 'require("../../ui/assets/Packaging/212565410 2.png")',
        title: 'Dabur'
    },
    {
        image: 'require("../../ui/assets/Packaging/212565410 2.png")',
        title: 'ITC Limited'
    },
    {
        image: 'require("../../ui/assets/Packaging/212565410 2.png")',
        title: 'Nivea'
    },
    {
        image: 'require("../../ui/assets/Packaging/212565410 2.png")',
        title: 'Chicco'
    },
]