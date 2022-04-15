import React from 'react'
import { Container, Grid, Stack, Typography } from '@mui/material'
import { Box, } from '@mui/system'
import { FaTwitter } from "react-icons/fa"
import { FaFacebookMessenger } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"





export const Footer = () => {
    return (
        <Box  bgcolor='#000000' alignContent='center' padding='70px 0' >
             <Container fixed  sx={{  display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'row', }}>
            <Grid container xs='12' sm='12' md='10' lg='12' sx={{  display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' ,  alignContent:'center',}} >
                <Grid item xs='12' sm='12' md='4' lg='4' sx={{display:'flex', justifyContent:'flex-start', flexDirection:'column'}} >
                        <img src={require("../../ui/assets/Navbar/logo.svg").default} alt="" width={200}  />
                        <Typography sx={{ color: 'white', mt: '30px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae duis risus consequat ut.
                        </Typography>
                        <Typography sx={{ color: 'white', mt: '50px' }}>
                            Wonder Products© Copyright 2022.
                        </Typography>
                </Grid>
                <Grid item xs='12' sm='4' md='3' lg='4' sx={{display:'flex', justifyContent:'flex-start', flexDirection:'column'}}>
                    <Typography variant='h5' sx={{ color: 'white' }}>
                        Quick Links
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', mt: '30px' }}>
                        <Stack spacing={2}>
                        {Quick1.map((item, index) => 
                            <Typography sx={{ color: 'white' }}>
                                {item.title}
                            </Typography>
                        )}
                        </Stack>
                        <Stack spacing={2}>
                        {Quick3.map((item, index) => 
                            <Typography sx={{ color: 'white' }}>
                                {item.title}
                            </Typography>
                        )}
                        </Stack>
                        <Stack spacing={2} >
                        {Quick3.map((item, index) => 
                            <Typography sx={{ color: 'white' }}>
                                {item.title}
                            </Typography>
                        )}
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs='12' sm='4' md='2' lg='' sx={{display:'flex', justifyContent:'flex-start', flexDirection:'column'}} >
                    <Typography variant='h5' sx={{ color: 'white' }}>
                        Social Links
                    </Typography>
                    <Stack mt='20px' spacing={2}>
                        {Social.map((item, index) => 
                        <Box key={index} sx={{ display: 'flex', flexDirection: 'row', color: 'white', gap: '10px' }} >
                            {item.icon}
                            <Typography >
                                {item.title}
                            </Typography>

                        </Box>
                        )}
                    </Stack>
                </Grid>
            </Grid>
            </Container>
        </Box>
    )
}



const Quick1 = [
    {
        title:'About'
    },
    {
        title:'Services'
    },
    {
        title:'Products'
    },
]

const Quick2 = [
    {
        title:'About'
    },
    {
        title:'Services'
    },
    {
        title:'Products'
    },
]

const Quick3 = [
    {
        title:'About'
    },
    {
        title:'Services'
    },
    {
        title:'Products'
    },
]

const Social = [
    {
        icon: <FaFacebookMessenger />,
        title:' Facebook'
    },
    {
        icon: <FaTwitter />,
        title:'Twitter'
    },
    {
        icon: <FaInstagram />,
        title:'Instagram'
    },
    {
        icon: <FaLinkedin />,
        title:'LinkdIn'
    },
]