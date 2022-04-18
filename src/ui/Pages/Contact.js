import { Button, Container, Grid, TextareaAutosize, TextField, Typography } from '@mui/material'
import { Box, display } from '@mui/system'
import React from 'react'
import { Clients } from '../../components/Clients'

export const Contact = () => {
  return (
    <>
      <Box className="half-banner" sx={{ display: 'flex', alignItems: { md: 'flex-end', xs: 'center' } }}>
        <Container fixed>
          <img src={require("../../ui/assets/Contact/contact.png")} alt="" style={{ position: 'absolute', width: '80%', bottom: '10px', }} />
        </Container>
      </Box>

      <Container fixed sx={{ margin: { md: '100px auto', xs: '50px auto' } }}>
        <Grid
          container
          spacing={0}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
        >
          <Grid item xl="6" md="6" xs="12">
            <ContactForm />
          </Grid>
          <Grid item xl="6" md="6" xs="12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235527.45446938823!2d75.72376397472755!3d22.72391173166939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1649059885493!5m2!1sen!2sin"
              style={{ width: '100%', height: '100vh', border: '0px' }}
              allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Grid>
        </Grid>
      </Container>
      <Box marginTop={10}>
        <Clients />
      </Box>
    </>

  )
}

const ContactForm = () => {
  return (


    <Box sx={{ background: '#FED5C3', padding: '20px', borderRadius: '8px' }}>
      <form action="">
        <Typography variant="h3" color="initial">
          Get in touch
        </Typography>
        <br />
        <div>
          <Typography gutterBottom variant="body1" color="initial">
            Name
          </Typography>
          <TextField
            id=""
            placeholder="Enter Name"
            sx={{ background: '#fff', borderRadius: '6px', width: '100%' }}
          />
        </div>
        <br />
        <div>
          <Typography gutterBottom variant="body1" color="initial">
            Email
          </Typography>
          <TextField
            id=""
            placeholder="Enter Email"
            sx={{ background: '#fff', borderRadius: '6px', width: '100%' }}
          />
        </div>
        <br />
        <div>
          <Typography gutterBottom variant="body1" color="initial">
            Number
          </Typography>
          <TextField
            id=""
            placeholder="Enter Number"
            sx={{ background: '#fff', borderRadius: '6px', width: '100%' }}
          />
        </div>
        <br />
        <div>
          <Typography gutterBottom variant="body1" color="initial">
            Message
          </Typography>
          <TextField
            id=""
            placeholder="Enter Message"
            multiline
            rows="4"
            sx={{ background: '#fff', borderRadius: '6px', width: '100%' }}
          />
        </div>
        <br /><br />
        <Button size="large" variant="contained" color="primary">
          Submit
        </Button>
        <br /><br />
        <Box display="flex" alignItems="flex-start" gap="10px" justifyContent="space-between" flexWrap="wrap">
          <Box display="flex" alignItems="flex-start" gap="10px" sx={{ width: { md: '30%', xs: '100%' } }}>
            <img src={require("../../ui/assets/Contact/Group 1000001690.png")} alt="" style={{ width: '20px', height: '20px' }} />
            <Typography variant="body1" color="initial">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Box>
          <Box display="flex" alignItems="flex-start" gap="10px" sx={{ width: { md: '30%', xs: '100%' } }}>
            <img src={require("../../ui/assets/Contact/Group 1000001691.png")} alt="" style={{ width: '20px', height: '20px' }} />
            <Typography variant="body1" color="initial">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Box>
          <Box display="flex" alignItems="flex-start" gap="10px" sx={{ width: { md: '30%', xs: '100%' } }}>
            <img src={require("../../ui/assets/Contact/Group 1000001692.png")} alt="" style={{ width: '20px', height: '20px' }} />
            <Typography variant="body1" color="initial">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Box>
        </Box>
      </form>
    </Box>


  )
}

