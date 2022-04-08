import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { Footer } from '../../components/Footer'

export const Globals = () => {
    return (
        <>
            <Box flexDirection='column' sx={{ display: 'flex', justifyContent: 'center', width: '100%', gap: '30px' }}  >
                
                <Box width='100%' height='13rem' bgcolor='#B4C9CE' sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                    <img src={require("../../ui/assets/Globals/Global Network.png")} alt="" style={{ width: '100%', height: '120px' }} />
                </Box>
                <Container fixed sx={{  display: 'flex', flexDirection: 'column', marginTop:'-140px' }}>
                    <Typography variant='h3'>
                        Global Networks
                    </Typography>
                </Container >
                <Box height='50rem'>
                    <Box bgcolor='#FED5C3' width='100%' height='400px' marginTop={10}>
                        <Container fixed sx={{ padding: '100px 0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <Typography variant='h3' marginTop={-5} >
                                Global Network
                            </Typography>

                            <Typography>
                                wonder product provides service to customers around the world through our One Asia and ACOA network agreements. We work together to drive innovation and share considerable knowledge of good manufacturing practices, technical expertise, R&D, and supply chain. Our customers benefit from this supply network on a global level through technical and R&D support, experienced commercial services, and multi-site manufacture and supply.
                            </Typography>
                            <Box flexDirection='row'  sx={{ display: 'flex', justifyContent: 'space-between', gap: '30px' }}>
                                <Box bgcolor='#D2D1D7' width='500px' height='450px' marginTop={5} flexWrap='wrap'>
                                    <Container fixed sx={{ padding: '100px 0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                        <Typography variant='h4' marginTop={-5}  >
                                            The one asia network
                                        </Typography>

                                        <Typography>
                                            The One Asia Network has been in operation for over 20 years. It comprises of 2 successful contract manufacturers – Pax Australia and Daizo Corporation of Japan, Thailand & China. The network is designed for servicing multi-national customers, providing them the advantage of international pricing, innovation and development, global technical support, and multi-site manufacture and supply.

                                        </Typography>
                                        <Box>
                                            <Button size="large" variant="contained" color="primary" sx={{ px: '30px' }}>
                                                Find out More
                                            </Button>
                                        </Box>
                                    </Container>
                                </Box>
                                <Box bgcolor='#D2D1D7' width='500px' height='450px' marginTop={5}>
                                    <Container fixed sx={{ padding: '100px 0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                        <Typography variant='h4' marginTop={-5}  >
                                            ACOA - The alliance of colep and one asia
                                        </Typography>

                                        <Typography>
                                            ACOA is based on a manufacturing and technology agreement between the One Asia Network and Colep, a European headquartered company with manufacturing sites across Europe, South America and the UAE. With a total of 27 manufacturing sites worldwide, ACOA works together exchanging significant knowledge of best practices, dispensing solutions, research and development, and market insight, creating a truly global network that serves ever changing customer demands and environments.
                                        </Typography>
                                        <Box>
                                            <Button size="large" variant="contained" color="primary" sx={{ px: '30px' }}>
                                                Find out More
                                            </Button>
                                        </Box>
                                    </Container>
                                </Box>
                            </Box>
                        </Container>
                    </Box>
                </Box>
                <Box marginTop={10}>
                    <img src={require("../../ui/assets/Globals/Group 1000001875.png")} alt="" style={{ width: '100%',  }} />
                </Box>
            </Box>
        </>
    )
}
