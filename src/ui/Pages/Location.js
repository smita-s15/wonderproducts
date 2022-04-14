import { Box, Button, Container, Typography } from '@mui/material'
import { width } from '@mui/system'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Footer } from '../../components/Footer'




export const Location = () => {
    return (
        <>
            <Box flexDirection='column' sx={{ display: 'flex', justifyContent: 'center', width: '100%', }}  >

                <Box width='100%' height='50vh' bgcolor='#B4C9CE' sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'left' }} position='relative'>
                    <Box position='absolute' width='100%' marginX='auto'>
                        <img src={require("../../ui/assets/Location/locations.png")} alt="" style={{ height: "100%", width: '100%' }} />
                    </Box >
                    <Box sx={{ m: '100px auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }} position='absolute' width='50%'>
                        <Typography variant='h1'  >
                            Location
                        </Typography>
                    </Box>
                </Box>
                <Container fixed sx={{ padding: '100px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <Box width='40%' flexDirection='column' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '50px', gap: '20px' }}>
                        {ArrLoc.map((item, index) =>

                            <Box key={index} bgcolor='white' width='80%'
                                sx={{
                                    "&:hover": {
                                        bgcolor: '#FED5C3',
                                    }
                                }}
                            >
                                <Typography variant='h6' height='100px' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    {item.title}
                                </Typography>
                            </Box>
                        )}
                    </Box>
                    <Box width='60%'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.68137449518!2d73.72253441655795!3d18.524890170138075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1649487309551!5m2!1sen!2sin" width="100%" height="810" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </Box>
                </Container>
            </Box>
        </>
    )
}


const ArrLoc = [
    {
        title: 'Vanesa cosmetics',
        link: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.68137449518!2d73.72253441655795!3d18.524890170138075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1649487309551!5m2!1sen!2sin" width="100%" height="810" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    },
    {
        title: 'Wonder Products',
        link: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.68137449518!2d73.72253441655795!3d18.524890170138075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1649487309551!5m2!1sen!2sin" width="100%" height="810" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    },
    {
        title: 'Pritam international',
        link: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.68137449518!2d73.72253441655795!3d18.524890170138075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1649487309551!5m2!1sen!2sin" width="100%" height="810" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    },
    {
        title: 'Sai corporation',
        link: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.68137449518!2d73.72253441655795!3d18.524890170138075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1649487309551!5m2!1sen!2sin" width="100%" height="810" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    },
    {
        title: 'Wonder hygiene',
        link: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.68137449518!2d73.72253441655795!3d18.524890170138075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1649487309551!5m2!1sen!2sin" width="100%" height="810" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    },
    {
        title: 'Sadhana industries',
        link: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.68137449518!2d73.72253441655795!3d18.524890170138075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1649487309551!5m2!1sen!2sin" width="100%" height="810" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    },
    {
        title: 'Saitech medicare Pvt Ltd',
        link: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.68137449518!2d73.72253441655795!3d18.524890170138075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1649487309551!5m2!1sen!2sin" width="100%" height="810" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    },
]