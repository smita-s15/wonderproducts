import { Container,  Grid,  Typography } from '@mui/material'
import { Box,} from '@mui/system'
import React from 'react'

export const Services = () => {
    return (
        <Box  bgcolor='#FBFBFB' alignContent='center' >
            <Container fixed  sx={{ padding: '100px 0', display:'flex'  }}>
            <Box flexDirection='column'>
            <Typography variant='h3' >Our Services</Typography>
            <Grid container xs='12' sm='6' md='12' lg='12' xl='12' sx={{display:'flex' }}>
                {services.map((item, index) => <Grid item xs='6' sm='12' md='4' lg='3' xl='3' margin={2}  >
                    <Box key={index} bgcolor='#FFFFFF' sx={{width:'300px', height:'300px', borderRadius:'10px', justifyContent: 'center', display: 'flex'}} flexDirection='column' margin={5}  >
                        <Box flexDirection='column' sx={{ justifyContent: 'center', display: 'flex',}} margin={2} >
                            <Typography variant='h4' >
                                {item.title}
                            </Typography>
                        </Box>
                        <Box border='2px solid #FED5C3'  bgcolor='#FED5C3' width='25%'  margin={2} />
                        <Box margin='30px auto'>
                        <Typography margin={2}  >
                            {item.desc}
                        </Typography>
                        </Box>
                    </Box>
                    </Grid>
                )}
            </Grid>
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