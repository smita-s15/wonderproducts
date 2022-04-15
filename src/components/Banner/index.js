import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Slider from "react-slick";

export const Banner = () => {
  const settings = {
    arrows: false,
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Box className='banner' >
        <Slider {...settings}>
          <div>
            <Page1 />
          </div>
          <div>
            <Page2 />
          </div>
          <div>
            <Page3 />
          </div>
          <div>
            <Page4 />
          </div>
        </Slider>
      </Box>
    </>
  )
}

const Page1 = () => {
  return (
    <>
      <Box sx={{ position: 'relative', height: '100vh' }} className='banner'>
        <Container fixed sx={{ padding: '100px 0', display: 'flex', justifyContent: 'flex-start', }}>
          <Box sx={{ width: '70%', display: 'flex', justifyContent: 'center', flexDirection: 'column', mt: {md:'9%' ,lg:'15%'} }}>
            <Typography variant="h1" color="initial">
              <b>
                India’s leading contract
                <br />
                manufacturer
              </b>
            </Typography>
            <br />
            <Typography variant="h6" color="initial">
              Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Nunc id  preti.
            </Typography>
            <br /><br /><br />
            <Box>
              <Button size="large" variant="contained" color="primary" sx={{ px: '30px' }}>
                Explore!
              </Button>
            </Box>
          </Box>
        </Container>
        <Box sx={{ width: { xs: '100%', sm: '100%', lg: '70%', }, position: 'absolute', right: '0', top: { xs: '40%', sm: '200px', lg: '-50px' }, zIndex: '10' }}>
          <img src={require("../../ui/assets/Banner/06 3.png")} alt="" style={{ width: '100%' }} />
        </Box>
        <Box sx={{ position: 'absolute', right: '0', top: '0', zIndex: '0' }}>
          <img src={require("../../ui/assets/Banner/wonder.png")} alt="" />
        </Box>
        <Box sx={{ position: 'absolute', left: '10px', bottom: '10px', }}>
        <img src={require("../../ui/assets/Banner/Wonder Products.png")} alt="" />
      </Box>
      </Box>
    </>
  )
}



const Page2 = () => {
  return (
    <Box sx={{ position: 'relative', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', }} className='banner' >
      <Container fixed sx={{ padding: '100px 0', display: 'flex', justifyContent: 'flex-start', }}>
        <Grid container xs='12' sm='12' md='12' lg='12' xl='12' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }} >
          <Grid item xs='12' sm='12' md='6' lg='5' xl='6'  >
            <Typography variant="h1" >
              Reasearch and
              <br />
              Development (R&D)
            </Typography>
            <br />
            <Typography variant="h6" >
              Tested to create leading Formulations
            </Typography>
            <Button size="large" variant="contained" color="primary" sx={{ px: '30px', marginTop: '50px' }}>
              Explore!
            </Button>
          </Grid>
          <Grid item xs='12' sm='12' md='6' lg='7' xl='6' sx={{ display: 'flex', justifyContent: 'center' }}  >
            <img src={require("../../ui/assets/Banner/pngaaa 1.png")} alt="" style={{ width: '75%', height: '30%' }} />
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ position: 'absolute', right: '0', top: '0', zIndex: '0' }}>
        <img src={require("../../ui/assets/Banner/wonder.png")} alt="" style={{ height: '100vh' }} />
      </Box>
      <Box sx={{ position: 'absolute', left: '20px', bottom: '10px', }}>
        <img src={require("../../ui/assets/Banner/Wonder Products.png")} alt="" />
      </Box>
      <Box sx={{ position: 'absolute', left: '50%', top: '0.1%' }}  >
        <img src={require("../../ui/assets/Banner/Vector.png")} alt="" />
      </Box>
      <Box sx={{ position: 'absolute', left: '5%', bottom: '0.1%' }}  >
        <img src={require("../../ui/assets/Banner/Flower.png")} alt="" />
      </Box>
    </Box>
  )
}

const Page3 = () => {
  return (
    <Box sx={{ position: 'relative', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', }} className='banner' >
      <Container fixed sx={{ padding: '100px 0', display: 'flex', justifyContent: 'flex-start', }}>
        <Grid container xs='12' sm='12' md='12' lg='12' xl='12' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }} >
          <Grid item xs='12' sm='12' md='6' lg='5' xl='6'  >
            <Typography variant="h1" >
              Luxury Packaging
            </Typography>
            <br />
            <Typography variant="h6" >
              Varied & Assorted Range of Packaging
            </Typography>
            <Button size="large" variant="contained" color="primary" sx={{ px: '30px', marginTop: '50px' }}>
              Explore!
            </Button>
          </Grid>
          <Grid item xs='12' sm='12' md='6' lg='7' xl='6' sx={{ display: 'flex', justifyContent: 'center' }}  >
            <img src={require("../../ui/assets/Banner/132 1.png")} alt="" style={{ width: '80%', height: '30%' }} />
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ position: 'absolute', right: '0', top: '0', zIndex: '0' }} >
        <img src={require("../../ui/assets/Banner/wonder.png")} alt="" style={{ height: '100vh' }} />
      </Box>
      <Box sx={{ position: 'absolute', left: '20px', bottom: '10px', }}>
        <img src={require("../../ui/assets/Banner/Wonder Products.png")} alt="" />
      </Box>
      <Box sx={{ position: 'absolute', left: '50%', top: '0.1%' }}  >
        <img src={require("../../ui/assets/Banner/Vector.png")} alt="" />
      </Box>
      <Box sx={{ position: 'absolute', left: '5%', bottom: '0.1%' }}  >
        <img src={require("../../ui/assets/Banner/Flower.png")} alt="" />
      </Box>
    </Box>
  )
}

const Page4 = () => {
  return (

    <>

      <Box sx={{ position: 'relative', height: '100vh' }} className='banner'>
        <Grid
          container
          xl="12" lg='12' md="12" xs="12"
          spacing={0}
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          alignContent="center"
          wrap="wrap"
        >
          <Grid item xl="3" lg='3' md="3" xs="12" sx={{ padding: '100px 0 0 50px' }}>
            <Typography variant="h1" color="initial">
              <b>Services</b>
            </Typography>
            <br />
            <Typography variant="h6" color="initial">
              Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Nunc id  preti.
            </Typography>
            <br /><br /><br />
            <Button size="large" variant="contained" color="primary" sx={{ px: '30px' }}>
              Explore!
            </Button>
          </Grid>
          <Grid item xl="3" lg='3' md="3" xs="3" >
            <Box sx={{ background: '#FED5C3', height: '100vh', gap: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <img src={require("../../ui/assets/Banner/Rectangle 4355.png")} alt="" style={{ width: '50%', height: '60%' }} />
              <Typography variant="h6" color="initial" fontFamily="cinzel">
                <b>CONTRACT Manufacture</b>
              </Typography>
            </Box>
          </Grid>
          <Grid item xl="3" lg='3' md="3" xs="3">
            <Box sx={{ height: '100vh', gap: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }}>
              <img src={require("../../ui/assets/Banner/image 60.png")} alt="" style={{ width: '50%', height: '60%', top: '10' }} />
              <Typography variant="h6" color="initial" sx={{ marginBottom: '20px' }} fontFamily="cinzel">
                <b>PRIVATE LABEL Manufacture</b>
              </Typography>
            </Box>
          </Grid>
          <Grid item xl="3" lg='3' md="3" xs="3">
            <Box sx={{ background: '#FED5C3', height: '100vh', gap: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <img src={require("../../ui/assets/Banner/Rectangle 4317.png")} alt="" style={{ width: '40%', height: '60%' }} />
              <Typography variant="h6" color="initial" fontFamily="cinzel">
                <b>TURN KEY PROJECTS</b>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ position: 'absolute', left: '20px', bottom: '10px', }}>
          <img src={require("../../ui/assets/Banner/Wonder Products.png")} alt="" />
        </Box>
      </Box>
    </>
  )
}
