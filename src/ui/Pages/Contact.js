import { Button, Container, TextareaAutosize, TextField, Typography } from '@mui/material'
import { Box, display } from '@mui/system'
import React from 'react'
import { Clients } from '../../components/Clients'
import { Footer } from '../../components/Footer'

export const Contact = () => {
  return (
    <>
      <Box flexDirection='column' sx={{ display: 'flex', justifyContent: 'center', width: '100%', gap: '30px' }}  >
        <Box width='100%' height='13rem' bgcolor='#B4C9CE' sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
          <img src={require("../../ui/assets/Contact/contact us.png")} alt="" style={{ width: '100%', height: '120px' }} />
        </Box>
        <Container  >
          <Box sx={{ display: 'flex', }} marginTop='-100px' marginLeft={5}>
            <Typography variant='h3'>
              Contact Us
            </Typography>
          </Box>
        </Container>
        <Box marginTop={20} >
          <Box position='absolute' bgcolor='#FED5C3' borderRadius={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', width: '50%', height: '45rem' }} marginLeft={10} marginTop={-7} >
            <Container >
              <Box padding={4}>
                <Typography variant='h4' textAlign='left' >
                  Get in touch
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: '10px', }} flexDirection='column' >
                <Typography variant='h6'> Name</Typography>
                <TextField placeholder="Enter Name" variant="outlined" style={{ width: '100%', backgroundColor: 'white', borderRadius: '5px' }} />

                <Typography variant='h6'> Email</Typography>
                <TextField placeholder="Enter Email" variant="outlined" style={{ width: '100%', backgroundColor: 'white', borderRadius: '5px' }} />

                <Typography variant='h6'> Number</Typography>
                <TextField placeholder="Enter Number" variant="outlined" style={{ width: '100%', backgroundColor: 'white', borderRadius: '5px' }} />

                <Typography variant='h6'> Message</Typography>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={4}
                  placeholder="Enter Message"
                  style={{ backgroundColor: 'white', borderRadius: '5px', width: '100%' }}
                />
                <Box>
                  <Button size="large" variant="contained" color="primary" sx={{ px: '30px', marginTop: '50px', mt: '20px' }}>
                    Send
                  </Button>

                </Box>
              </Box>
              <Box marginTop={3} flexDirection='row' sx={{ display: 'flex' }} width='100%' gap='10px'>
                <Box flexDirection='row' sx={{ width: '40%', alignContent: 'center', display: 'flex', gap: '10px' }}>
                  <img src={require("../../ui/assets/Contact/Group 1000001690.png")} alt="" style={{ width: '20px', height: '20px' }} />
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                </Box>
                <Box flexDirection='row' sx={{ width: '40%', alignContent: 'center', display: 'flex', gap: '10px' }}>
                  <img src={require("../../ui/assets/Contact/Group 1000001691.png")} alt="" style={{ width: '20px', height: '20px' }} />
                  <Typography>
                    wonderproduct@gmail.com
                  </Typography>
                </Box>
                <Box flexDirection='row' sx={{ width: '30%', alignContent: 'center', display: 'flex', gap: '10px' }}>
                  <img src={require("../../ui/assets/Contact/Group 1000001692.png")} alt="" style={{ width: '20px', height: '20px' }} />
                  <Typography>
                    9876543210
                  </Typography>
                </Box>
              </Box>
            </Container>
          </Box>
          <Box  >
            <img src={require("../../ui/assets/Contact/Mask group.png")} alt="" style={{ height: '600px', width: '100%' }} />
          </Box>
        </Box>
        <Box marginTop={10}>
          <Clients />
        </Box>
      </Box>
    </>

  )
}
