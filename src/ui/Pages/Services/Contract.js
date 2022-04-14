import React from 'react'
import { Container, Box, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Clients } from '../../../components/Clients'
import CircleIcon from '@mui/icons-material/Circle';


export const Contract = () => {
    return (
        <>
            <Box className="half-banner" bgcolor='red' width='100%' sx={{display:'flex', justifyContent:'flex-start', alignItems:'center'}} >
                <Container fixed  sx={{display:'flex', justifyContent:'flex-start', alignItems:'center' , bgcolor:'red'}} >
                    <img src={require("../../assets/Services/Services (1).png")} alt="" style={{ position: 'absolute', width:'80%', bottom: '10px', }} />
                        <Typography variant='h1' position='absolute' >
                            Contract Manufacturing
                        </Typography>
                </Container>
            </Box>
            <Container fixed sx={{ margin: '100px auto', }}>
                <Grid
                    container
                    xl="12" md="12" lg='12' xs="12"
                    spacing={5}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                    sx={{ position: "relative" }}
                >
                    <Grid item xl="6" md="6" lg='6' xs="12" >
                        <Typography gutterBottom variant="h3">
                            Our Services
                        </Typography>
                        <br />
                        <Typography variant="h6" sx={{ opacity: '0.6' }}>
                            Wonder Product is the prime contract manufacturer of cosmetics & personal care products. We help businesses flourish by formulating & developing without worrying about manufacturing many folds of units. We focus on customer satisfaction through quality, integrity & responsiveness. With our expertise in research & development, new product development, contract manufacturing, contract filling, custom blending along with warehousing & distribution of an array of products we aim to produce exceptional solutions.
                        </Typography>
                        <br />
                        {ArrContract.map((item, index) =>
                            <Box flexDirection='row' sx={{ opacity: '0.6', display: 'flex', gap: '20px', alignItems: 'center' }} marginTop={1} >
                                <CircleIcon sx={{ width: '10px', height: '10px' }} />

                                <Typography variant="h6"  >
                                    {item.title}
                                </Typography>
                            </Box>
                        )}
                    </Grid>
                    <Grid item xl="6" md="6" lg='6' xs="12" >
                        <img src={require("../../assets/Services/unsplash_OPjxGV7ubsY (1).png")} alt="" style={{ position: 'absolute', top: '-100px', width:'50%' }} />
                    </Grid>
                </Grid>
                </Container>

            <Box sx={{ margin: '200px' }} >
            </Box>
            <Container fixed sx={{ margin: '100px auto', }}>
                <Typography variant="h3" color="initial">
                    Project Stages
                </Typography>
                <Grid container xl='12' lg='12' md='12' marginTop={10}  >
                    {Project.map((item, index) => {
                        return <Grid key={index} item xl={2} lg={2} md={3} margin={2} >
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5' }}>
                                {item.image}
                                < Box position='absolute' textAlign='center' >
                                    <Typography variant='body1' >
                                        {item.title}
                                    </Typography>
                                    <Typography variant='h6' >
                                        {item.subtitle}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    }
                    )
                    }
                </Grid>
            </Container>
            <Clients />
        </>
    )
}

const ArrContract = [
    {
        title: 'Designing & Development'
    },
    {
        title: 'Packaging & Solution'
    },
    {
        title: 'R&D and Formulation'
    },
    {
        title: 'Sourcing & Logistics'
    },
]

const Project = [
    {
        image: <img src={require("../../assets/Services/Rectangle 4384.png")} alt="" style={{ height: '80px', width: '230px' }} />,
        title: 'STAGE 1',
        subtitle: 'Induction'
    },
    {
        image: <img src={require("../../assets/Services/Rectangle 4394.png")} alt="" style={{ height: '80px', width: '230px' }} />,
        title: 'Initial Meeting'
    },
    {
        image: <img src={require("../../assets/Services/Rectangle 4395.png")} alt="" style={{ height: '80px', width: '230px' }} />,
        title: 'Feasibility Study'
   
    },
    {
        image: <img src={require("../../assets/Services/Rectangle 4396.png")} alt="" style={{ height: '80px', width: '230px' }} />,
        title: 'Project Definition'
    },
    {
        image: <img src={require("../../assets/Services/Rectangle 4397.png")} alt="" style={{ height: '80px', width: '230px' }} />,
        title: 'R&D Payment'
    },
    {
        image: <img src={require("../../assets/Services/Rectangle 4384.png")} alt="" style={{ height: '80px', width: '230px' }} />,
        title: 'Stage 2',
        subtitle: 'R&D'
    },
    {
        image: <img src={require("../../assets/Services/Rectangle 4394.png")} alt="" style={{ height: '80px', width: '230px' }} />,
        title: 'Formulation'
    },
    {
        image: <img src={require("../../assets/Services/Rectangle 4395.png")} alt="" style={{ height: '80px', width: '230px' }} />,
        title: 'Prototype Samples'
   
    },
    {
        image: <img src={require("../../assets/Services/Rectangle 4396.png")} alt="" style={{ height: '80px', width: '230px' }} />,
        title: 'Sample Approval'
    },
    {
        image: <img src={require("../../assets/Services/Rectangle 4397.png")} alt="" style={{ height: '80px', width: '230px' }} />,
        title: 'Pricing'
    },
    {
        image: <img src={require("../../assets/Services/Rectangle 4384.png")} alt="" style={{ height: '80px', width: '230px' }} />,
        title: 'Stage 3',
        subtitle: 'Registration'
    },
    {
        image: <img src={require("../../assets/Services/Rectangle 4394.png")} alt="" style={{ height: '80px', width: '230px' }} />,
        title: 'Artwork'
    },
    {
        image: <img src={require("../../assets/Services/Rectangle 4395.png")} alt="" style={{ height: '80px', width: '230px' }} />,
        title: 'Artwork Approval'
   
    },
    {
        image: <img src={require("../../assets/Services/Rectangle 4396.png")} alt="" style={{ height: '80px', width: '230px' }} />,
        title: 'Registration'
    },
    {
        image: <img src={require("../../assets/Services/Rectangle 4397.png")} alt="" style={{ height: '80px', width: '230px' }} />,
        title: '50% Down Payment'
    },
    {
        image: <img src={require("../../assets/Services/Rectangle 4384.png")} alt="" style={{ height: '80px', width: '230px' }} />,
        title: 'STAGE 4',
        subtitle: 'Induction'
    },
    {
        image: <img src={require("../../assets/Services/Rectangle 4394.png")} alt="" style={{ height: '80px', width: '230px' }} />,
        title: 'Procurement'
    },
    {
        image: <img src={require("../../assets/Services/Rectangle 4395.png")} alt="" style={{ height: '80px', width: '230px' }} />,
        title: 'Manufacture'
   
    },
    {
        image: <img src={require("../../assets/Services/Rectangle 4396.png")} alt="" style={{ height: '80px', width: '230px' }} />,
        title: 'Final Payment'
    },
    {
        image: <img src={require("../../assets/Services/Rectangle 4397.png")} alt="" style={{ height: '80px', width: '230px' }} />,
        title: 'Product Delivery'
    },
]







