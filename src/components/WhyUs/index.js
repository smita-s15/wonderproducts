import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const WhyUs = () => {
  return (
    <Box  bgcolor='#D2D1D7' alignContent='center' sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems:'center',}}>
      <Container fixed  sx={{ padding: '50px 0' , display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems:'center' }}>
        <Box sx={{ width: '55%', height:'27rem', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>

          <img src={require("../../ui/assets/WhyUs/unsplash_wawEfYdpkag (1).png")} alt="" style={{ height: '160%', width: '90%' }} />
        </Box>
        <Box sx={{ width: '45%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Box>
            <Typography variant="h3" textAlign='left' width='100%' >
              Why Us
            </Typography>
            <br />
            <Typography variant="body1" textAlign='left' color='gray' >
              End-to-end solutions for all manufacturing needs. From researched & tested formulations to development, & packaging. With advanced infrastructure and trained professionals, we serve you with quality results.
            </Typography>
            <br />
            <Typography variant="body1" textAlign='left' color='gray' >
              We bring to the table our expertise and dedication to manufacturing & produce innovative and workable solutions. We have International and domestic certifications, and dedicated research facilities to produce extraordinary-tested formulations.
            </Typography>
            <br />
            <Typography variant="body1" textAlign='left' color='gray'>
              We believe in leading the FMCG industry with research & innovation.
            </Typography>

          </Box>


          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', }}  marginTop={5}    >
            <Box width='50%' >
              <Box flexDirection='column' >
                <Typography variant="h3" fontFamily='Overpass'>
                  300+
                </Typography>
                <Typography variant="h6" color='gray' >
                  Clients
                </Typography>
              </Box>
              <Box flexDirection='column'>
                <Typography variant="h3" fontFamily='Overpass'>
                  5000+
                </Typography>
                <Typography variant="h6" color='gray' >
                  Products manufactured
                </Typography>
              </Box>
            </Box>
            <Box width='50%' >
              <Box flexDirection='column'>
                <Typography variant="h3" fontFamily='Overpass'>
                  10+
                </Typography>
                <Typography variant="h6" color='gray' >
                  Manufacturing Units
                </Typography>
              </Box>
              <Box flexDirection='column'>
                <Typography variant="h3" fontFamily='Overpass'>
                  2500+
                </Typography>
                <Typography variant="h6" color='gray' >
                  Products Packaged
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
