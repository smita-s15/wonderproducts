import React from 'react'
import { Container, Box, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Clients } from '../../../components/Clients'
import { useStyles } from './Styles'

export const AboutUs = () => {
    return (
        <>
            <Box className="half-banner">
                <Container fixed position='relative'>
                    <img src={require("../../assets/About/about us.png")} alt="" style={{ position: 'absolute', bottom: '10px' }}  />
                    <Box position='absolute'  marginTop={35} sx={{display:'flex', justifyContent:'bottom'}} >
                    <Typography variant='h2' >
                        About Us
                    </Typography>
                    </Box>
                </Container>
            </Box>
            <Container fixed>
                <Grid
                    container
                    spacing={3}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                    sx={{ position: "relative" }}
                >
                    <Grid item xl="6" md="6" xs="12" sx={{ marginTop: '100px' }}>
                        <Typography gutterBottom variant="h3">
                            Company Overview
                        </Typography>
                        <br />
                        <Typography variant="h6" sx={{ opacity: '0.6' }}>
                            One Stop Solution for White Label Contract Manufacturing of Personal Care, Hair Care, Oral Care, Home Care, Aerosol, Soaps & Detergents, Derma Cosmetics, Pharmaceuticals, Industrial Spray. We Work for Leading Cosmetics Companies From Both Domestic and International Locations.
                        </Typography>
                        <br />
                        <Typography variant="h6" sx={{ opacity: '0.6' }}>
                            One Stop Solution for White Label Contract Manufacturing of Personal Care, Hair Care, Oral Care, Home Care, Aerosol, Soaps & Detergents, Derma Cosmetics, Pharmaceuticals, Industrial Spray.
                        </Typography>
                    </Grid>
                    <Grid item xl="6" md="6" xs="12" >
                        <img src={require("../../assets/About/unsplash_wawEfYdpkag (2).png")} alt="" style={{ position: 'absolute', top: '-100px' }} />
                    </Grid>
                </Grid>
            </Container>

            <Box sx={{ margin: '200px' }} >
            </Box>
            <Container fixed sx={{ margin: '100px auto', }}>
                <Typography variant="h3" color="initial">
                    Group journey
                </Typography>
            </Container>
            <Box >
                <img src={require("../../assets/About/roadmap.png")} alt="" style={{ width: '100%' }} />
            </Box>


            <Grid
                container
                spacing={0}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                alignContent="center"
                wrap="wrap"
                sx={{ margin: '100px auto' }}
            >
                <Grid item xl="6" md="6" xs="12"  >
                    <Box sx={{ background: '#B4C9CE', padding: '50px' }}>
                        <br />
                        <Typography variant="h3" color="initial">
                            Mission
                        </Typography>
                        <br />
                        <Typography variant="h6" color="initial">
                            To provide world class solutions for the FMCG industry in the areas of product innovation, manufacturing and distribution.
                        </Typography>
                        <br />
                    </Box>
                </Grid>
                <Grid item xl="5" md="5" xs="12"  >
                    <img src={require("../../assets/About/unsplash_wawEfYdpkag (3).png")} alt="" style={{ width: '100%' }} />
                </Grid>
            </Grid>


            <Grid
                container
                spacing={0}
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                alignContent="center"
                wrap="wrap"
                sx={{ margin: '100px auto' }}
            >
                <Grid item xl="5" md="5" xs="12"  >
                    <img src={require("../../assets/About//unsplash_wawEfYdpkag (4).png")} alt="" style={{ width: '100%' }} />
                </Grid>
                <Grid item xl="6" md="6" xs="12"  >
                    <Box sx={{ background: '#FED5C3', padding: '50px' }}>
                        <br />
                        <Typography variant="h3" color="initial">
                            Vision
                        </Typography>
                        <br />
                        <Typography variant="h6" color="initial">
                            To become India’s largest FMCG contract manufacturer diversified across product categories & geographies.
                        </Typography>
                        <br />
                    </Box>
                </Grid>
            </Grid>


            <BoardOfDirector />

            <Clients />
        </>
    )
}





const BoardOfDirector = () => {
    const classes = useStyles()
    return (
        <>
            <Container fixed sx={{ margin: '100px auto' }}>
                <Typography variant="h3" color="initial">
                    Board of Directors
                </Typography>
                <br /><br />
                <Box display="flex" gap="100px" flexWrap="wrap" width='100%' sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    {Arr.map((item, index) => (
                        <Box key={index} sx={{ width: '288px', position: 'relative' }}>
                            {item.image}
                            <Box className={classes.card}>
                                <Typography gutterBottom variant="h6" color="#fff">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" fontWeight="400" color="#fff">
                                    {item.subtitle}
                                </Typography>
                                <br />
                                <Typography variant="body2" fontWeight="400" color="#fff">
                                   {item.desc}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </>
    )
}

const Arr = [
    {
        title:' Nirav Parmar',
        subtitle: 'UI/UX Designer',
        desc:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa eu mauris, sed eget cursus nisi. Eros, a elementum auctor neque, risus.',
        image: <img src={require("../../assets/About/Rectangle 4376.png")} alt="" />
    },
    {
        title:' Nirav Parmar',
        subtitle: 'UI/UX Designer',
        desc:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa eu mauris, sed eget cursus nisi. Eros, a elementum auctor neque, risus.',
        image: <img src={require("../../assets/About/Rectangle 4376 (1).png")} alt="" />
    },
    {
        title:' Nirav Parmar',
        subtitle: 'UI/UX Designer',
        desc:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa eu mauris, sed eget cursus nisi. Eros, a elementum auctor neque, risus.',
        image: <img src={require("../../assets/About/Rectangle 4376 (1).png")} alt="" />
    },
]
