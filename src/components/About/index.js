import { Button, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const About = () => {
  return (
    <Box position='relative' bgcolor='#FED5C3' display='flex' alignContent='center' justifyContent="center" marginTop={10}>
      <Container fixed sx={{ padding: '100px 0',   display: 'flex',justifyContent: 'center', alignItems: 'center', }}>
        <Grid container xs='10' sm='12' md='12' lg='12' xl='12'  >
          <Grid item xs='10' sm='12' md='7' lg='5' xl='6'  >
            <b>
            <Typography variant="h3"  >
              About wonder <br /> products
            </Typography>
            <br />
            <Typography variant='h6'>
              One Stop Solution for White Label Contract Manufacturing of Personal Care, Hair Care, Oral Care, Home Care, Aerosol, Soaps & Detergents, Derma Cosmetics, Pharmaceuticals, Industrial Spray. We Work for Leading Cosmetics Companies From Both Domestic and International Locations.
            </Typography>
            </b>
            <Button size="large" variant="contained" color="primary" sx={{ px: '30px', marginTop: '50px' }}>
              About
            </Button>
          </Grid>
          <Grid item xs='10' sm='12' md='7' lg='7' xl='6'  >
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
              <img src={require("../../ui/assets/About/set-skincare-bottles-containers 2 (1).png")} alt="" style={{ width: '100%' }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
