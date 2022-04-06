import { Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const Services = () => {
    return (
        <Box container>
            <Container>
            <Typography variant='h3'>Our Services</Typography>
            <Grid container md={10} lg={12} sx={{justifyContent:'space-between', alignItems:'center', display:'flex', marginTop:'100px'}} >
                {services.map((item, index) => 
                    <Grid item md={3} key={index}  >
                        <Box flexDirection='column' borderBottom='2px solid black' sx={{ justifyContent: 'center', display: 'flex' }}>
                            <Typography variant='h5' >
                                {item.title}
                            </Typography>
                    </Box>
                            <Typography>
                                {item.desc}
                            </Typography>
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
        desc: 'We have everything that you need to manufacture world class product. From research to delivery we have everything of our own, thats why we are always on right time.'
    },
    {
        title: 'Private Label',
        desc: 'We have everything that you need to manufacture world class product. From research to delivery we have everything of our own, thats why we are always on right time.'
    },
    {
        title: 'Term Key and Startup',
        desc: 'We have everything that you need to manufacture world class product. From research to delivery we have everything of our own, thats why we are always on right time.'
    },
]