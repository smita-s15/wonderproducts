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
      <Box sx={{ position: 'relative', height: { xs: '70vh', sm: '100vh' }, display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
        <Container sx={{ padding: { md: '100px auto', xs: '10px auto' }, }}>
          <Box sx={{ width: { md: '70%', xs: '100%' }, zIndex: '50' }}>
            <Typography variant="h1" color="initial">
              <b>India’s leading contract manufacturer</b>
            </Typography>
            <br />
            <Typography variant="h6" color="initial">
              Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Nunc id  preti.
            </Typography>
            <br /><br /><br />
            <Button size="large" variant="contained" color="primary" sx={{ px: '30px' }}>
              Explore!
            </Button>
          </Box>
        </Container>
        <Box sx={{ position: 'absolute', right: '0', top: { xs: '400px', sm: '300px', md: '100px', lg: '30px' }, zIndex: '10', display: 'flex', justifyContent: 'center', }}  >
          <img src={require("../../ui/assets/Banner/06 3.png")} alt="" style={{ width: '100%' }} />
        </Box>
        <Box sx={{ width: '100%', zIndex: '10', display: { md: 'block', xs: 'none' } }}>
          <img src={require("../../ui/assets/Banner/Wonder Products.png")} alt="" />
        </Box>
        <Box sx={{ position: 'absolute', right: '0', top: '0', zIndex: '0', display: { md: 'block', xs: 'none' } }}>
          <img src={require("../../ui/assets/Banner/wonder.png")} alt="" />
        </Box>
      </Box>
    </>
  )
}



const Page2 = () => {
  return (
    <Box sx={{ position: 'relative', height: { sm: '100vh', md: '100vh' }, display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
      <Container sx={{ padding: { md: '100px auto', xs: '10px auto' } }}>
        <Grid container  >
          <Grid item xs='10' sm='5' md='6'  >
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
          <Grid item xs='10' sm='5' md='6' sx={{ display: 'flex', justifyContent: 'center', }} >
            <img src={require("../../ui/assets/Banner/pngaaa 1.png")} alt="" style={{ width: '100%'  }} />
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ position: 'absolute', right: '0', top: '0', zIndex: '0', display: { xs: 'none', md: 'block' } }}>
        <img src={require("../../ui/assets/Banner/wonder.png")} alt="" style={{ height: '100vh' }} />
      </Box>
      <Box sx={{ position: 'absolute', left: '20px', bottom: '10px', display: { xs: 'none', md: 'block' } }}>
        <img src={require("../../ui/assets/Banner/Wonder Products.png")} alt="" />
      </Box>
      <Box sx={{ position: 'absolute', left: '50%', top: '0.1%', display: { xs: 'none', md: 'block' } }}  >
        <img src={require("../../ui/assets/Banner/Vector.png")} alt="" />
      </Box>
      <Box sx={{ position: 'absolute', left: '5%', bottom: '0.1%', display: { xs: 'none', md: 'block' } }}  >
        <img src={require("../../ui/assets/Banner/Flower.png")} alt="" />
      </Box>
    </Box>
  )
}

const Page3 = () => {
  return (
    <Box sx={{ position: 'relative', height: { xs: '70vh', sm: '100vh' }, display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
      <Container sx={{ padding: { md: '100px auto', xs: '10px auto' } }}>
        <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }} >
          <Grid item xs='12' sm='6' md='6'  >
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
          <Grid item xs='12' sm='6' md='6' sx={{ display: 'flex', justifyContent: 'center', mt: { xs: '100px' } }}  >
            <img src={require("../../ui/assets/Banner/132 1.png")} alt="" style={{ width: '100%', }} />
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ position: 'absolute', right: '0', top: '0', zIndex: '0', display: { xs: 'none', md: 'block' } }} >
        <img src={require("../../ui/assets/Banner/wonder.png")} alt="" style={{ height: '100vh' }} />
      </Box>
      <Box sx={{ position: 'absolute', left: '20px', bottom: '10px', display: { xs: 'none', md: 'block' } }}>
        <img src={require("../../ui/assets/Banner/Wonder Products.png")} alt="" />
      </Box>
      <Box sx={{ position: 'absolute', left: '50%', top: '0.1%', display: { xs: 'none', md: 'block' } }}  >
        <img src={require("../../ui/assets/Banner/Vector.png")} alt="" />
      </Box>
      <Box sx={{ position: 'absolute', left: '5%', bottom: '0.1%', display: { xs: 'none', md: 'block' } }}  >
        <img src={require("../../ui/assets/Banner/Flower.png")} alt="" />
      </Box>
    </Box>
  )
}



const Page4 = () => {
  return (
    <>
      <Box sx={{ position: 'relative', height: 'auto' }}>
        <Grid
          container
          spacing={0}
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          alignContent="center"
          wrap="wrap"
        >
          <Grid item xl="3" md="3" xs="12" sx={{ padding: { md: '100px 0 0 50px', xs: '100px 0 30px 20px' } }}>
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
          <Grid item xl="3" md="3" xs="4">
            <Box sx={{ background: { md: '#FED5C3', xs: 'transparent' }, height: { md: '100vh', xs: '50vh' }, gap: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <img src={require("../../ui/assets/Banner/Rectangle 4355.png")} alt="" style={{ width: '70%' }} />
              <Typography variant="h6" color="initial" textAlign="center" fontFamily="cinzel">
                <b>CONTRACT Manufacture</b>
              </Typography>
            </Box>
          </Grid>
          <Grid item xl="3" md="3" xs="4">
            <Box sx={{ height: { md: '100vh', xs: '50vh' }, gap: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }}>
              <img src={require("../../ui/assets/Banner/image 60.png")} alt="" style={{ width: '70%' }} />
              <Typography gutterBottom variant="h6" color="initial" textAlign="center" sx={{ marginBottom: '20px' }} fontFamily="cinzel">
                <b>PRIVATE LABEL Manufacture</b>
              </Typography>
            </Box>
          </Grid>
          <Grid item xl="3" md="3" xs="3">
            <Box sx={{ background: { md: '#FED5C3', xs: 'transparent' }, height: { md: '100vh', xs: '50vh' }, gap: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <img src={require("../../ui/assets/Banner/Rectangle 4317.png")} alt="" style={{ width: '70%', }} />
              <Typography variant="h6" color="initial" textAlign="center" sx={{ marginBottom: '20px' }} fontFamily="cinzel">
                <b>TURN KEY PROJECTS</b>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}