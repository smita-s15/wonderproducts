import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const WhyUs = () => {
  return (
    <Box height='35rem' bgcolor='#D2D1D7' alignContent='center' sx={{display:'flex', justifyContent:'space-between',flexDirection:'row' }}>
        <Box sx={{ width: '55%', display:'flex', justifyContent:'center', alignItems:'center',}}>
         
        <img src={require("../../ui/assets/WhyUs/unsplash_wawEfYdpkag (1).png")} alt="" style={{height:'104%', width:'80%'}}  />
        </Box>
        <Box sx={{ width: '45%' , display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'  }}>
          <Typography variant="h3" textAlign='left' width='100%' >
            Why Us
          </Typography>
          <Typography variant="body1" color='gray' >
            End-to-end solutions for all manufacturing needs. From researched & tested formulations to development, & packaging. With advanced infrastructure and trained professionals, we serve you with quality results.
          </Typography>
          <br />
          <Typography variant="body1" color='gray' >
            We bring to the table our expertise and dedication to manufacturing & produce innovative and workable solutions. We have International and domestic certifications, and dedicated research facilities to produce extraordinary-tested formulations.
          </Typography>
          <br />
          <Typography variant="body1" color='gray'>
            We believe in leading the FMCG industry with research & innovation.
          </Typography>
          <Box  sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', }} width='100%' marginTop={5}  >
            <Box >
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
                  300+
                </Typography>
                <Typography variant="h6" color='gray' >
                  Clients
                </Typography>
              </Box>
            </Box>
            <Box >
              <Box flexDirection='column'>
                <Typography variant="h3" fontFamily='Overpass'>
                  300+
                </Typography>
                <Typography variant="h6" color='gray' >
                  Clients
                </Typography>
              </Box>
              <Box flexDirection='column'>
                <Typography variant="h3" fontFamily='Overpass'>
                  300+
                </Typography>
                <Typography variant="h6" color='gray' >
                  Clients
                </Typography>
              </Box>
            </Box>
          </Box>

        </Box>
    </Box>
  )
}
