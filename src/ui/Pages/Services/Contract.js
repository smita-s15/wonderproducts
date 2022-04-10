import React from 'react'
import { Container, Box, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Clients } from '../../../components/Clients'
import CircleIcon from '@mui/icons-material/Circle';


export const Contract = () => {
    return (
        <>
            <Box className="half-banner">
                <Container fixed position='relative'>
                    <img src={require("../../assets/Services/Services (1).png")} alt="" style={{ position: 'absolute', bottom: '10px' }} />
                    <Box position='absolute' marginTop={35} sx={{ display: 'flex', justifyContent: 'bottom' }} >
                        <Typography variant='h2' >
                            Contract Manufacturing
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
                            Our Services
                        </Typography>
                        <br />
                        <Typography variant="h6" sx={{ opacity: '0.6' }}>
                            Wonder Product is the prime contract manufacturer of cosmetics & personal care products. We help businesses flourish by formulating & developing without worrying about manufacturing many folds of units. We focus on customer satisfaction through quality, integrity & responsiveness. With our expertise in research & development, new product development, contract manufacturing, contract filling, custom blending along with warehousing & distribution of an array of products we aim to produce exceptional solutions.
                        </Typography>
                        <br />
                        {ArrContract.map((item, index) => 
                        <Box flexDirection='row' sx={{ opacity: '0.6', display:'flex', gap:'10px', alignItems:'center' }} >
                            <CircleIcon />
                        <Typography variant="h6" >
                            Concept
                        </Typography>
                        </Box>
                        )}
                    </Grid>
                    <Grid item xl="6" md="6" xs="12" >
                        <img src={require("../../assets/Services/unsplash_OPjxGV7ubsY (1).png")} alt="" style={{ position: 'absolute', top: '-60px' }} />
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
            <Clients />
        </>
    )
}

const ArrContract = [
    {
        title:'Designing & Development'
    },
    {
        title:'Packaging & Solution'
    },
    {
        title:'R&D and Formulation'
    },
    {
        title:'Sourcing & Logistics'
    },
]







