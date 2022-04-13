import React from 'react'
import { Container, Box, Grid } from '@mui/material/'
import Typography from '@mui/material/Typography'


const WhyUs = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '200px auto' }}>
            <Box sx={{ flexDirection: 'column', background: '#D2D1D7', height: '580px', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                <Grid container xs='12' sm='10' md='8' lg='12' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
                    <Grid item xs='12' sm='10' md='8' lg='6' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                        <img src={require("../../ui/assets/WhyUs/unsplash_wawEfYdpkag (1).png")} alt="" />
                    </Grid>
                    <Grid item xs='12' sm='10' md='8' lg='6' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'left', flexDirection: 'column', }}>
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
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default WhyUs