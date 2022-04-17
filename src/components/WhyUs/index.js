import React from 'react'
import { Container, Box, Grid } from '@mui/material/'
import Typography from '@mui/material/Typography'


const WhyUs = () => {
    return (
        <>
            <Box sx={{ background: '#D2D1D7', height: { md: '638px', xs: 'auto' }, display: 'flex', alignItems: 'center', margin: { md: '100px auto', xs: '50px auto' } }}>
                <Container fixed sx={{ padding: '10px' }}  >
                    <Grid
                        container
                        spacing={10}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        alignContent="center"
                        wrap="wrap"
                    >
                        <Grid item xl="6" md="6" xs="12">
                        <img src={require("../../ui/assets/WhyUs/unsplash_wawEfYdpkag (1).png")} alt="" style={{width:'100%'}} />
                        </Grid>
                        <Grid item xl="6" md="6" xs="12">
                            <Typography gutterBottom variant="h3" color="initial">
                                Why us
                            </Typography>
                            <br />
                            <Typography variant="body1" sx={{ opacity: '0.6' }} color="initial">
                                One Stop Solution for White Label Contract Manufacturing of Personal Care, Hair Care, Oral Care, Home Care, Aerosol, Soaps & Detergents, Derma Cosmetics, Pharmaceuticals, Industrial Spray. We Work for Leading Cosmetics Companies From Both Domestic and International Locations.
                            </Typography>
                            <br />
                            <Typography variant="body1" sx={{ opacity: '0.6' }} color="initial">
                                One Stop Solution for White Label Contract Manufacturing of Personal Care, Hair Care, Oral Care, Home Care, Aerosol, Soaps & Detergents, Derma Cosmetics, Pharmaceuticals, Industrial Spray. We Work for Leading Cosmetics Companies From Both Domestic and International Locations.
                            </Typography>
                            <br />
                            <br />
                            <Box sx={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                                <Box sx={{ width: '45%' }}>
                                    <Typography variant="h2" fontFamily='Overpass' color="initial">
                                        300+
                                    </Typography>
                                    <Typography variant="h6" sx={{ opacity: '0.6' }} color="initial">
                                        Clients
                                    </Typography>
                                </Box>
                                <Box sx={{ width: '45%' }}>
                                    <Typography variant="h2" fontFamily='Overpass' color="initial">
                                        10+
                                    </Typography>
                                    <Typography variant="h6" sx={{ opacity: '0.6' }} color="initial">
                                        Years in industry
                                    </Typography>
                                </Box>
                                <Box sx={{ width: '45%' }}>
                                    <Typography variant="h2" fontFamily='Overpass' color="initial">
                                        5000+
                                    </Typography>
                                    <Typography variant="h6" sx={{ opacity: '0.6' }} color="initial">
                                        Products manufactured
                                    </Typography>
                                </Box>
                                <Box sx={{ width: '45%' }}>
                                    <Typography variant="h2" fontFamily='Overpass' color="initial">
                                        2500+
                                    </Typography>
                                    <Typography variant="h6" sx={{ opacity: '0.6' }} color="initial">
                                        Products packaged
                                    </Typography>
                                </Box>
                            </Box>
                            <br/>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default WhyUs





