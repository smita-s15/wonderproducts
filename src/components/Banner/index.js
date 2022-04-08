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
    <Box sx={{ position: 'relative', height: '100vh' }} bgcolor='#B4C9CE' fontFamily='Cinzel' >
      <Container fixed sx={{ padding: '100px 0' }}>
        <Box sx={{ width: '90%' }}>
          <Typography variant="h2" >
            India’s Leading Contract Manufacturer
          </Typography>
          <br />
          <Typography variant="h6" >
            Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Nunc id  preti.
          </Typography>
          <Button size="large" variant="contained" color="primary" sx={{ px: '30px', marginTop: '50px' }}>
            Explore!
          </Button>
        </Box>
      </Container>
      <Box sx={{ width: '70%', position: 'absolute', right: '0', top: '-50px', zIndex: '10' }}>
        <img src={require("../../ui/assets/Banner/06 3.png")} alt="" style={{ width: '100%' }} />
      </Box>
      <Box sx={{ position: 'absolute', right: '0', top: '0', zIndex: '0' }}>
        <img src={require("../../ui/assets/Banner/wonder.png")} alt="" style={{ height: '100vh' }} />
      </Box>
      <Box sx={{ position: 'absolute', left: '20px', bottom: '10px', }}>
        <img src={require("../../ui/assets/Banner/Wonder Products.png")} alt="" />
      </Box>
    </Box>
  )
}

const Page2 = () => {
  return (
    <Box sx={{ position: 'relative', height: '100vh' }} bgcolor='#B4C9CE' >
      <Container fixed sx={{ padding: '100px 0' }}>
        <Box sx={{ width: '70%' }}>
          <Typography variant="h1" >
            Reasearch & Development
            <br />
            (R&D)
          </Typography>
          <br />
          <Typography variant="h6" >
            Tested to create leading Formulations
          </Typography>
          <Button size="large" variant="contained" color="primary" sx={{ px: '30px', marginTop: '50px' }}>
            Explore!
          </Button>
        </Box>
      </Container>
      <Box sx={{ position: 'absolute', right: '0', top: '5px', zIndex: '10' }}>
        <img src={require("../../ui/assets/Banner/pngaaa 1.png")} alt="" style={{ width: '70%' }} />
      </Box>
      <Box sx={{ position: 'absolute', right: '0', top: '0', zIndex: '0' }}>
        <img src={require("../../ui/assets/Banner/wonder.png")} alt="" style={{ height: '100vh' }} />
      </Box>
      <Box sx={{ position: 'absolute', left: '20px', bottom: '10px', }}>
        <img src={require("../../ui/assets/Banner/Wonder Products.png")} alt="" />
      </Box>
      <Box sx={{ position: 'absolute', left: '50%', top: '0.1%' }}  >
        <img src={require("../../ui/assets/Banner/Vector.png")} alt="" />
      </Box>
    </Box>
  )
}

const Page3 = () => {
  return (
    <Box sx={{ position: 'relative', height: '100vh' }} bgcolor='#B4C9CE' >
      <Container fixed sx={{ display:'flex', padding: '100px 0',  justifyContent: 'space-between', alignItems:'center' }}>
        <Box sx={{ width: '70%' }}>
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
        </Box>
        <Box sx={{  top: '80px', zIndex: '5' }} marginLeft={10} >
          <img src={require("../../ui/assets/Banner/132 1.png")} alt="" style={{ width: '100%' }} />
        </Box>
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
      <Box sx={{ position: 'absolute', left: '20%', bottom: '0.1%' }}  >
        <img src={require("../../ui/assets/Banner/Flower.png")} alt="" />
      </Box>
    </Box>
  )
}

const Page4 = () => {
  return (
    <>
      <Box sx={{ position: 'relative', height: '100vh' }} bgcolor='#B4C9CE' >
        
        <Grid
          container
          spacing={0}
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          alignContent="center"
          wrap="wrap"
        >
          <Grid item xl="3" md="3" xs="12" sx={{ padding: '100px 0 0 50px' }}>
            <Typography variant="h1" >
              Services
            </Typography>
            <br />
            <Typography variant="h6" >
              Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Nunc id  preti.
            </Typography>
            <Button size="large" variant="contained" color="primary" sx={{ px: '30px', mt: '50px' }}>
              Explore!
            </Button>
          </Grid>
          <Grid item xl="3" md="3" xs="12">
            <Box sx={{ background: '#FED5C3', height: '100vh', gap: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <img src={require("../../ui/assets/Banner/Rectangle 4355.png")} alt="" style={{ width: '50%', height: '60%' }} />
              <Typography variant="h6" fontFamily="cinzel" fontWeight='bold'>
                CONTRACT Manufacture
              </Typography>
            </Box>
          </Grid>
          <Grid item xl="3" md="3" xs="12" >
            <Box sx={{ height: '100vh', gap: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', }} >
              <img src={require("../../ui/assets/Banner/image 60.png")} alt="" style={{ width: '50%', height: '60%', top: '10' }} />
              <Typography variant="h6" sx={{ marginBottom: '20px' }} fontFamily="cinzel" fontWeight='bold'>
                PRIVATE LABEL Manufacture
              </Typography>
            </Box>
          </Grid>
          <Grid item xl="3" md="3" xs="12">
            <Box sx={{ background: '#FED5C3', height: '100vh', gap: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
              <img src={require("../../ui/assets/Banner/Rectangle 4317.png")} alt="" style={{ width: '40%', height: '60%' }} />
              <Typography variant="h6" fontFamily="cinzel" fontWeight='bold'>
                TURN KEY PROJECTS
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
