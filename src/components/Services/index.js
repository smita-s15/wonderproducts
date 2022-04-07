import { Container, Grid, Typography } from '@mui/material'
import { Box, display } from '@mui/system'
import React from 'react'

export const Services = () => {
    return (
        <Box flexDirection='column' sx={{display:'flex', justifyContent:'center', align:'center', p:'20px 10px'}} height='30rem'>
            <Typography variant='h3' ml={10}>Our Services</Typography>
            <Box sx={{marginX:'auto', display:'flex', justifyContent:'center', alignItems:'center', marginTop:'20px'}}>
            <Grid container md={10} lg={12} sx={{ justifyContent: 'space-between', alignItems: 'center', display: 'flex', width:'100%'}} >
                {services.map((item, index) =>
                    <Grid item md={3} key={index}  >
                        <Box flexDirection='column' sx={{ justifyContent: 'center', display: 'flex' }}>
                            <Typography variant='h5' >
                                {item.title}
                            </Typography>
                        </Box>
                        <Box border='2px solid #FED5C3' width='20%' bgcolor='#FED5C3' />
                        <Typography mt={2}>
                            {item.desc}
                        </Typography>
                    </Grid>
                )}
            </Grid>
            </Box>
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