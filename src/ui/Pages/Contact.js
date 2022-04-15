import { Button, Container, TextareaAutosize, TextField, Typography } from '@mui/material'
import { Box, display } from '@mui/system'
import React from 'react'
import { Clients } from '../../components/Clients'

export const Contact = () => {
  return (
    <>
      <Box className="half-banner" bgcolor='red' width='100%' sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} >
        <Container fixed sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', }} >
          <img src={require("../../ui/assets/Contact/contact us.png")} alt="" style={{ position: 'absolute', width: '80%', bottom: '10px', }} />
          <Typography variant='h1' position='absolute' sx={{ marginBottom: '-10%' }}>
            Contact Us
          </Typography>
        </Container>
      </Box>
      <Box flexDirection='column' sx={{ display: 'flex', justifyContent: 'center', width: '100%', gap: '30px' }}  >
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
                <TextField
                  multiline
                  rows={4}
                  placeholder="write message.."
                  style={{ backgroundColor: 'white', border: 'none', borderRadius: '4px', width: '100%', color: 'gray' }}
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
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.68137449518!2d73.72253441655795!3d18.524890170138075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1649487309551!5m2!1sen!2sin" width="100%" height="600px" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Box>
          </Box>
        </Box>
        <Box marginTop={10}>
          <Clients />
        </Box>
      </Box>
    </>

  )
}
