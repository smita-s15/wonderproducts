import { Box, Button, Container, Typography } from '@mui/material'
import React, { useState } from 'react'




export const Location = () => {
    const [show, setShow] =  React.useState(false)
    const handleClick = () => {
        setShow(true);
    };


    return (
        <>
        <Box className="half-banner" bgcolor='red' width='100%' sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} >
                <Container fixed sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center',  }} >
                    <img src={require("../../ui/assets/Location/locations.png")} alt="" style={{ position: 'absolute', width: '80%', bottom: '10px', }} />
                    <Typography variant='h2' position='absolute'  sx={{marginBottom:'-10%'}}>
                    Location
                    </Typography>
                </Container>
            </Box>
            <Box flexDirection='column' sx={{ display: 'flex', justifyContent: 'center', width: '100%', }}  >
                <Container fixed sx={{ padding: '100px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <Box typ width='40%' flexDirection='column' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '50px', gap: '20px' }}>
                        <Button bgcolor='white' width='80%'
                            sx={{
                                "&:hover": {
                                    bgcolor: '#FED5C3',
                                }
                            }}
                            onClick={handleClick}
                           

                        >
                            <Typography variant='h6' height='100px' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                Vanesa cosmetics
                            </Typography>
                        </Button>
                        
                        {setShow ? <Box width='40%' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.68137449518!2d73.72253441655795!3d18.524890170138075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1649487309551!5m2!1sen!2sin" width="100%" height="810" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </Box> : null}

                    </Box>
                </Container>
            </Box>
        </>
    )
}


const ArrLoc = [
    {
        title: 'Vanesa cosmetics',
    },
    {
        title: 'Wonder Products',
    },
    {
        title: 'Pritam international',
    },
    {
        title: 'Sai corporation',
    },
    {
        title: 'Wonder hygiene',
    },
    {
        title: 'Sadhana industries',
    },
    {
        title: 'Saitech medicare Pvt Ltd',
    },
]

const LocationMap = [
    {
        link: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.68137449518!2d73.72253441655795!3d18.524890170138075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1649487309551!5m2!1sen!2sin" width="100%" height="810" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    },
    {
        link: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.68137449518!2d73.72253441655795!3d18.524890170138075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1649487309551!5m2!1sen!2sin" width="100%" height="810" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    },
    {
        link: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.68137449518!2d73.72253441655795!3d18.524890170138075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1649487309551!5m2!1sen!2sin" width="100%" height="810" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    },
    {
        link: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.68137449518!2d73.72253441655795!3d18.524890170138075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1649487309551!5m2!1sen!2sin" width="100%" height="810" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    },
    {
        link: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.68137449518!2d73.72253441655795!3d18.524890170138075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1649487309551!5m2!1sen!2sin" width="100%" height="810" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    },
    {
        link: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.68137449518!2d73.72253441655795!3d18.524890170138075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1649487309551!5m2!1sen!2sin" width="100%" height="810" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    },
    {
        link: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.68137449518!2d73.72253441655795!3d18.524890170138075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1649487309551!5m2!1sen!2sin" width="100%" height="810" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    },
]