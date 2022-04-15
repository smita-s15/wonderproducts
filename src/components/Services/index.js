import { Container, Grid, Typography } from '@mui/material'
import { Box, } from '@mui/system'
import React from 'react'

export const Services = () => {
    return (
        <Box position='relative' bgcolor='#F8FAFB' display='flex' alignContent='center' justifyContent="center" marginTop={10}>
            <Container fixed sx={{ padding: '100px 0', display: 'flex', justifyContent: 'flex-start',  flexDirection:'column' }}>
                <Typography variant='h3'>Our Services</Typography>
                <Grid container xs='12' sm='12' md='12' lg='12' xl='12' sx={{ gap: { sm: '50px', md: '100px', lg: '100px' }, mt: '3%' }}>
                    {services.map((item, index) => <Grid key={index} item xs='3' sm='3' md='4' lg='3' xl='3' sx={{ display: 'flex', bgcolor: '#FFFFFF', flexDirection: 'column', justifyContent: 'center', flexWrap: 'wrap' }}  >
                        <Typography variant='h4' m={2}  >
                            {item.title}
                        </Typography>
                        <Box width='20%' border='3px solid #FED5C3' bgcolor='#FED5C3' ml={2} />
                        <Typography variant='body2' color='gray' m={2} width='90%'>
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