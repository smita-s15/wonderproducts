import { Container, Grid, Typography } from '@mui/material'
import { Box, } from '@mui/system'
import React from 'react'

export const Services = () => {
    return (
        <Box position='relative' bgcolor='#F8FAFB' display='flex' alignContent='center' justifyContent="center" marginTop={10}>
            <Container fixed sx={{ padding: '100px 20px', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }}>
                <Typography variant='h3'>Our Services</Typography>
                <Grid container mt='3%' >
                    {services.map((item, index) => <Grid key={index} item md="4" lg='4' >
                        <Box sx={{ display: 'flex', bgcolor: '#FFFFFF', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', padding:'40px',  margin:'10px', }} gap='10px'  >
                            <Box>
                                <Typography variant='h4'  >
                                    {item.title}
                                </Typography>
                            </Box>
                            <Box width='20%' border='3px solid #FED5C3' bgcolor='#FED5C3' />
                            <Box>
                                <Typography variant='body2'>
                                    {item.desc}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    )}
                </Grid>
            </Container>
        </Box>
    )
}


const services = [
    {
        title: 'Contract Manage',
        desc: 'We have everything that you need to manufacture world class product. From research to delivery we have everything of our own, thats why we are always on right time. We have everything that you need to manufacture world class product. From research to delivery we have everything of our own, thats why we are always on right time.'
    },
    {
        title: 'Private Label',
        desc: 'We have everything that you need to manufacture world class product. From research to delivery we have everything of our own, thats why we are always on right time. We have everything that you need to manufacture world class product. From research to delivery we have everything of our own, thats why we are always on right time.'
    },
    {
        title: 'Term Key and Startup',
        desc: 'We have everything that you need to manufacture world class product. From research to delivery we have everything of our own, thats why we are always on right time. We have everything that you need to manufacture world class product. From research to delivery we have everything of our own, thats why we are always on right time.'
    },
]