import { Global } from '@emotion/react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'




export const Globals = () => {
    return (
        <>
            <Box className="half-banner" bgcolor='red' width='100%' sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} >
                <Container fixed sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', }} >
                    <img src={require("../../ui/assets/Globals/Global Network.png")} alt="" style={{ position: 'absolute', width: '100%', height:'170px', bottom: '10px', }} />
                    <Typography variant='h2' position='absolute' sx={{ marginBottom: '-10%' }}>
                        Global Networks
                    </Typography>
                </Container>
            </Box>
            <Box flexDirection='column' sx={{ display: 'flex', justifyContent: 'center', width: '100%', overflow: 'hidden' }}  >
                <Box bgcolor='#FED5C3' width='100%' height='400px' marginTop={10}>
                    <Container fixed sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <Typography variant='h3'  >
                            Global Network
                        </Typography>
                        <Typography>
                            wonder product provides service to customers around the world through our One Asia and ACOA network agreements. We work together to drive innovation and share considerable knowledge of good manufacturing practices, technical expertise, R&D, and supply chain. Our customers benefit from this supply network on a global level through technical and R&D support, experienced commercial services, and multi-site manufacture and supply.
                        </Typography>
                    </Container>
                </Box>
                <Grid container xs='12' sm='12' md='12' lg='12' xl='8' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '80px', mt: '-10%', }} >
                    {Arr.map((item, index) =>
                        <Grid item key={index} xs='12' sm='12' md={6} lg={4} xl={2} bgcolor='#D2D1D7' width='400px' height='500px' marginTop={5} flexWrap='wrap' >
                            <Container sx={{ display: 'flex', flexDirection: 'column', gap: '50px', margin: '10px' }}>
                                <Typography variant='h3'  >
                                    {item.title}
                                </Typography>
                                <Typography>
                                    {item.desc}
                                </Typography>
                                <Box>
                                    <Button size="large" variant="contained" color="primary" sx={{ px: '30px' }}>
                                        Find out More
                                    </Button>
                                </Box>
                            </Container>
                        </Grid>
                    )}
                </Grid>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '100px auto' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.68137449518!2d73.72253441655795!3d18.524890170138075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1649487309551!5m2!1sen!2sin" width="100%" height="600" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Box>
        </>
    )
}

const Arr = [
    {
        title: 'The one asia network',
        desc: 'The One Asia Network has been in operation for over 20 years. It comprises of 2 successful contract manufacturers – Pax Australia and Daizo Corporation of Japan, Thailand & China. The network is designed for servicing multi-national customers, providing them the advantage of international pricing, innovation and development, global technical support, and multi-site manufacture and supply.'
    },
    {
        title: 'ACOA - The alliance of colep and one asia',
        desc: 'ACOA is based on a manufacturing and technology agreement between the One Asia Network and Colep, a European headquartered company with manufacturing sites across Europe, South America and the UAE. With a total of 27 manufacturing sites worldwide, ACOA works together exchanging significant knowledge of best practices, dispensing solutions, research and development, and market insight, creating a truly global network that serves ever changing customer demands and environments.'
    },
]