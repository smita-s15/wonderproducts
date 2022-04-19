import React from 'react'
import { Container, Box, Grid, Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import CircleIcon from '@mui/icons-material/Circle';
import { Clients } from '../../../components/Clients';


export const TurnProject = () => {
    return (
        <>
            <Box className="half-banner" sx={{ display: 'flex', alignItems: { md: 'flex-end', xs: 'center' } }}>
                <Container fixed>
                    <img src={require("../../assets/Services/turnkeyproj.png")} alt="" style={{ position: 'absolute', width: '80%', bottom: '10px', }} />
                </Container>
            </Box>
            <Container fixed sx={{ margin: { md: '-200px auto 50px auto', xs: '50px auto' } }}>
                <Grid
                    container
                    spacing={5}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                    sx={{ position: "relative" }}
                >
                    <Grid item xl="6" md="6" lg='6' xs="12" sx={{ marginTop: '100px', marginTop: { md: '200px', xs: 'auto' } }} >
                        <Typography gutterBottom variant="h3">
                            Reasearch & Development
                        </Typography>
                        <br />
                        <Typography variant="h6" sx={{ opacity: '0.6' }}>
                            FORMULATING: Many of our customers come to us for new formulas to stay ahead of the competition; others come to us to develop formulas for a new business. We create all types of products, from basic to complex. Whatever the need, we can help. For example, we can create basic products, such as shampoos with up-to-date aspects, such as sulfate-free, paraben-free, natural and organic formulations. Also, we create cutting-edge formulas using the latest ingredients for hair, body and facial care.
                        </Typography>
                        <br />
                        <Typography variant="h6" sx={{ opacity: '0.6' }}>
                            GUARANTEED REBATE:Once a customer decides to move forward with Production, Chemco Corp. will credit 50% of the initial investment made for R&D (on a per product basis) towards the balance on the initial P.O.
                        </Typography>
                        <br />
                        <Typography variant="h6" sx={{ opacity: '0.6' }}>
                            PROCESS: UNDERSTANDING AND COMMUNICATION. In developing a formula, we benchmark existing formulas and competing products, and we formulate with the customer’s target price point in mind. The formulation process begins with a dialogue regarding the desired product attributes until the customer’s needs are fully understood.
                        </Typography>
                    </Grid>
                    <Grid item xl="6" md="6" lg='6' xs="12" >
                        <img src={require("../../assets/Services/turnkeyproj1.png")} alt="" style={{ width: '100%' }} />
                    </Grid>
                </Grid>
            </Container>

            <Box position='relative' bgcolor='#FED5C3' display='flex' flexDirection='column' alignContent='center' justifyContent="center">
                <Container fixed sx={{ padding: { md: '150px auto', xs: '100px auto' }, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: { sm: '50px auto', md: '100px auto' } }}>
                    <Box width='100%'  >
                        <Typography variant="h3"  >
                            Packaging Procurement
                        </Typography>
                    </Box>
                    <Grid container >
                        <Grid item xs='12' md='6'    >

                            <Typography variant='h6'>
                                Chemco Corp. offers a myriad of product containers with an almost unlimited selection of standard, customized and professional packaging options. From stock items to custom molding, Chemco Corp. can be your partner in selecting the packaging that will suit your particular needs. Taking this into account, our goal is to help your company stand out in a sea of products and display your brand.
                                <br />
                                <br />
                                Clients may choose from one of our packaging options for their retail collection however you may also mix and match between styles and create a unique look.
                            </Typography>
                            <Box>
                                <Button size="large" variant="contained" color="primary" sx={{ px: '30px', marginTop: '50px' }}>
                                    Explore!
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs='12' md='6'  >
                            <img src={require("../../assets/About/set-skincare-bottles-containers 2 (1).png")} alt="" style={{ width: '100%' }} />

                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Container fixed sx={{  display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>
                <Grid
                    container
                    xl="12" md="12" lg='12' xs="12"
                    spacing={5}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                    sx={{ position: "relative", }}
                >
                    <Grid item xs="12" md='6' >
                        <Typography gutterBottom variant="h3">
                            Turn Key
                        </Typography>
                        <Typography variant="h6" sx={{ opacity: '0.6' }}>
                            FORMULATING: Many of our customers come to us for new formulas to stay ahead of the competition; others come to us to develop formulas for a new business. We create all types of products, from basic to complex. Whatever the need, we can help. For example, we can create basic products, such as shampoos with up-to-date aspects, such as sulfate-free, paraben-free, natural and organic formulations. Also, we create cutting-edge formulas using the latest ingredients for hair, body and facial care.
                        </Typography>
                    </Grid>
                    <Grid item md="6" xs="12" >
                        <img src={require("../../assets/Services/Group 1000001682.png")} alt="" style={{ width: '100%' }} />
                    </Grid>
                </Grid>
            </Container>
            <Container fixed sx={{ margin: '100px auto', }}>
                <Typography gutterBottom variant="h3">
                    Process of turn key
                </Typography>
                <img src={require("../../assets/Services/Group 1000001866.png")} alt="" style={{ width: '100%' }} />
            </Container>
            <Box>
                <Box bgcolor='#D2D1D7'>
                    <Container sx={{ margin: '100px auto', bgcolor: '#D2D1D7' }}>
                        <Grid
                            container
                            xl="12" md="12" lg='12' xs="12"
                            spacing={5}
                            direction="row"
                            justifyContent="center"
                            alignItems="flex-start"
                            alignContent="center"
                            wrap="wrap"
                            sx={{ position: "relative" }}
                        >
                            <Grid item xl="6" md="4" lg='4' xs="12" >
                                <Typography gutterBottom variant="h3">
                                    Quality Assurance
                                </Typography>
                            </Grid>
                            <Grid item xl="6" md="8" lg='8' xs="12"  >
                                <Typography variant="h6" sx={{ opacity: '0.6' }} >
                                    Our lab and manufacturing plant is FDA Certified and we are compliant with GMP (Good Manufcaturer Practices). We maintain a fully functioning microbiology lab which gives us the capacity to formulate OTC (over the counter) products. Chemco has implemented and maintains the following:
                                </Typography>
                                {ArrContract.map((item, index) =>
                                    <Box flexDirection='row' sx={{ opacity: '0.6', display: 'flex', gap: '20px', justifyItems: 'center', alignItems: 'center' }} marginTop={1} >
                                        <CircleIcon sx={{ width: '10px', height: '10px' }} />
                                        <Typography variant="h6"  >
                                            {item.title}
                                        </Typography>
                                    </Box>
                                )}
                            </Grid>
                        </Grid>
                        <Clients />
                    </Container>
                </Box>
            </Box>
        </>
    )
}

const ArrContract = [
    {
        title: 'ATF registration and permit.'
    },
    {
        title: 'Complete documentation & training.'
    },
    {
        title: 'Standards Operation Procedure (SOPs)'
    },
    {
        title: 'Batch records & Quality Control testing.'
    },
    {
        title: 'Incoming product testing and full traceability of ingredients and components.'
    },
]








