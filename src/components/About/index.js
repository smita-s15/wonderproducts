import { Button, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const About = () => {
  return (
    <Box position='relative' height='40rem' bgcolor='#FED5C3' alignContent='center'>
      <Container fixed sx={{ padding: '100px 0' }}>
        <Box sx={{ width: '70%' }}>
          <Typography variant="h2" >
          About Wonder Products
          </Typography>
          <br />
        <Typography variant='h6'>
          We are leading players in manufacturing a range of liquid products, consumer goods packaging & white label contract manufacturing of personal care, hair care, oral care, home care, aerosol, soaps & detergent, derma cosmetics, pharmaceuticals, industrial spray. We have operational manufacturing sites across the globe.
        </Typography>
        <Button size="large" variant="contained" color="primary" sx={{ px: '30px', marginTop: '50px' }}>
          Explore!
        </Button>
        </Box>
      </Container>
        <Box sx={{ width: '40%', position: 'absolute', right: '0', zIndex: '10' ,marginBottom:'10px' }}>
        <img src={require("../../ui/assets/About/set-skincare-bottles-containers 2 (1).png")} alt="" style={{ width: '100%' }} />
        </Box>
    </Box>
  )
}
