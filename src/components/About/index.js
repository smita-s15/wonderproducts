import { Button, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const About = () => {
  return (
    <Box position='relative'  bgcolor='#FED5C3' display='flex' alignContent='center' justifyContent="center" marginTop={10}>
      <Container fixed  sx={{ padding: '100px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <Grid container xs='10' sm='12' md='12' lg='12' xl='12' sx={{ padding: '100px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
          <Grid item xs='10' sm='12' md='7' lg='6' xl='6'  >
            <Typography variant="h3"  >
              About Wonder Products
            </Typography>
            <br />
            <Typography variant='h6'>
              We are leading players in manufacturing a range of liquid products, consumer goods packaging & white label contract manufacturing of personal care, hair care, oral care, home care, aerosol, soaps & detergent, derma cosmetics, pharmaceuticals, industrial spray. We have operational manufacturing sites across the globe.
            </Typography>
            <Button size="large" variant="contained" color="primary" sx={{ px: '30px', marginTop: '50px' }}>
              Explore!
            </Button>
          </Grid>
          <Grid item xs='10' sm='12' md='7' lg='6' xl='6'  >
            <Box sx={{  display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
              <img src={require("../../ui/assets/About/set-skincare-bottles-containers 2 (1).png")} alt="" style={{width:'100%'}} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
