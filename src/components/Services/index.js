import { Container,  Typography } from '@mui/material'
import { Box,} from '@mui/system'
import React from 'react'

export const Services = () => {
    return (
        <Box height='40rem' bgcolor='#FBFBFB' alignContent='center' >
            <Container fixed  sx={{ padding: '100px 0', display:'flex'  }}>
            <Box flexDirection='column'>
            <Typography variant='h3' >Our Services</Typography>
            <Box  sx={{ justifyContent: 'space-between', alignItems: 'center', display: 'flex', width:'100%', gap:'50px',}} marginTop={5} >
                {services.map((item, index) =>
                    <Box key={index} bgcolor='#FFFFFF' sx={{padding:'50px' ,  borderRadius:'10px'}} >
                        <Box flexDirection='column' sx={{ justifyContent: 'center', display: 'flex' }}>
                            <Typography variant='h4' >
                                {item.title}
                            </Typography>
                        </Box>
                        <Box border='2px solid #FED5C3'  bgcolor='#FED5C3' width='25%' mt={2} />
                        <Box margin='30px auto'>
                        <Typography >
                            {item.desc}
                        </Typography>
                        </Box>
                    </Box>
                )}
            </Box>
            </Box>
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