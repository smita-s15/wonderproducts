import React from 'react'
import { Container, Stack, Typography } from '@mui/material'
import { Box, } from '@mui/system'
import { FaTwitter } from "react-icons/fa"
import { FaFacebookMessenger } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"





export const Footer = () => {
    return (
        <Box height='24rem'  bgcolor='black' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <Container  sx={{ margin: '10px auto' }}>
            <Stack direction='row' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', align: 'center' }} spacing={15} padding={5} >
                <Stack sx={{ width: '80%' }}>
                    <Box flexGrow='1'>
                        <img src={require("../../ui/assets/Navbar/logo.svg").default} alt="" />
                        <Typography sx={{ color: 'white', mt: '30px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae duis risus consequat ut.
                        </Typography>
                        <Typography sx={{ color: 'white', mt: '70px' }}>
                            Wonder Products© Copyright 2022.
                        </Typography>
                    </Box>
                </Stack>
                <Stack sx={{ width: '100%' }}>
                    <Box flexGrow='1'  >
                        <Typography variant='h6' sx={{ color: 'white' }}>
                            Quick Links
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px', mt: '30px' }}>
                            <Stack spacing={1}>
                                <Typography sx={{ color: 'white' }}>
                                    About
                                </Typography>
                                <Typography sx={{ color: 'white' }}>
                                    Services
                                </Typography>
                                <Typography sx={{ color: 'white' }}>
                                    Products
                                </Typography>
                            </Stack>
                            <Stack spacing={1}>
                                <Typography sx={{ color: 'white' }}>
                                    Global Client
                                </Typography>
                                <Typography sx={{ color: 'white' }}>
                                    Startup Services
                                </Typography>
                                <Typography sx={{ color: 'white' }}>
                                    Brand
                                </Typography>
                            </Stack>
                            <Stack spacing={1} >
                                <Typography sx={{ color: 'white' }}>
                                    Contact Us
                                </Typography>
                                <Typography sx={{ color: 'white' }}>
                                    Location
                                </Typography>
                            </Stack>
                        </Box>
                    </Box>
                </Stack>
                <Stack sx={{ width: '25%' }}>
                    <Box flexGrow='1'  >
                        <Typography variant='h6' sx={{ color: 'white' }}>
                            Social Links
                        </Typography>
                        <Stack mt='20px' spacing={1}>
                            <Box sx={{ display:'flex',flexDirection:'row', color: 'white' , gap:'10px' }} >
                                <FaFacebookMessenger />
                                <Typography >
                                    Facebook
                                </Typography>

                            </Box>
                            <Box sx={{ display:'flex',flexDirection:'row' , color: 'white' , gap:'10px'}} >
                                <FaTwitter />
                                <Typography sx={{ color: 'white' }}>
                                    Twitter
                                </Typography>
                            </Box>
                            <Box sx={{ display:'flex',flexDirection:'row', color: 'white',  gap:'10px' }}>
                                <FaInstagram />
                                <Typography sx={{ color: 'white', textAlign:'left' }}>
                                    Instagram
                                </Typography>

                            </Box>
                            <Box sx={{ display:'flex', flexDirection:'row', color: 'white',  gap:'10px' }}>
                                <FaLinkedin />
                                <Typography sx={{ color: 'white', textAlign:'left' }}>
                                    LinkdIn
                                </Typography>
                            </Box>
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
            </Container>
        </Box>
    )
}
