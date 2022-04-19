import { Button, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const About = () => {
  return (
    <Box position='relative' bgcolor='#FED5C3' display='flex' alignContent='center' justifyContent="center" >
      <Container fixed sx={{  padding: { md: '100px auto', xs: '50px auto' }, display: 'flex', justifyContent: 'center', alignItems: 'center', marginY:'30px' }}>
        <Grid container  >
          <Grid item xs='12' md='6'   >
            <Typography variant="h3"  ><b>
              About wonder <br /> products
            </b>
            </Typography>
            <br />
            <Typography variant='h6'>
              One Stop Solution for White Label Contract Manufacturing of Personal Care, Hair Care, Oral Care, Home Care, Aerosol, Soaps & Detergents, Derma Cosmetics, Pharmaceuticals, Industrial Spray. We Work for Leading Cosmetics Companies From Both Domestic and International Locations.
            </Typography>

            <Button size="large" variant="contained" color="primary" sx={{ px: '30px', marginTop: '50px' }}>
              About
            </Button>
          </Grid>
          <Grid item xs='12'  md='6' sx={{marginY:'30px'}}   >
              <img src={require("../../ui/assets/About/set-skincare-bottles-containers 2 (1).png")} alt="" style={{ width: '100%' }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
