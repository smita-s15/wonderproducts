import { Button, Container, Grid, TextareaAutosize, TextField, Typography } from '@mui/material'
import { Box, } from '@mui/system'
import React from 'react'




export const Enquiry = () => {
    return (
        <Box bgcolor='#FED5C3' alignContent='center' marginTop={10} padding='10px 0'>
            <Container fixed sx={{ margin: { md: '100px auto', xs: '50px auto' } }}>
                <Grid
                    container
                    spacing={10}
                    sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}
                >
                    <Grid item xl="6" lg='6' md="12" xs="12" >
                        <Typography variant="h3" >
                            Enquiry now
                        </Typography>
                        <br />
                        <Typography variant='body1'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pharetra vestibulum vitae nibh rhoncus, amet, sit. Nunc maecenas mauris massa eget viverra.
                        </Typography>
                    </Grid>
                    <Grid item xl="6" lg='6' md="12" xs="12" >
                        <Form />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

const Form = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs='12' md='6'>
                <Typography variant='h6' > First Name</Typography>
                <TextField placeholder="Enter First Name" variant="outlined" size="small" style={{ backgroundColor: 'white', border: 'none', borderRadius: '4px', width: '100%', color: 'gray' }} />
            </Grid>
            <Grid item xs='12' md='6'>
                <Typography variant='h6'> Last Name</Typography>
                <TextField placeholder="Enter Last Name" variant="outlined" size="small" style={{ backgroundColor: 'white', border: 'none', borderRadius: '4px', width: '100%', color: 'gray' }} />
            </Grid>
            <Grid item xs='12' md='6'>
                <Typography variant='h6'> Phone </Typography>
                <TextField placeholder="Enter Phone " variant="outlined" size="small" style={{ backgroundColor: 'white', border: 'none', borderRadius: '4px', width: '100%', color: 'gray' }} />
            </Grid>
            <Grid item xs='12' md='6'> 
                <Box>
                    <Typography variant='h6'> First Name</Typography>
                    <TextField placeholder="Enter Email Adress" variant="outlined" size="small" style={{ backgroundColor: 'white', border: 'none', borderRadius: '4px', width: '100%', color: 'gray' }} />
                </Box>
            </Grid>
            <Grid item xs='12'>
                <Typography variant='h6'> Message</Typography>
                <TextField
                    multiline
                    rows={4}
                    placeholder="Write Message"
                    style={{ backgroundColor: 'white', border: 'none', borderRadius: '4px', width: '100%', color: 'gray' }}
                />
                <Box>
                    <Button size="large" variant="contained" color="primary" sx={{ px: '30px', marginTop: '50px', mt: '20px' }}>
                        Send
                    </Button>
                </Box>
            </Grid>
        </Grid>
    )
}