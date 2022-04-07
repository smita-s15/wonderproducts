import { Button, Container, TextField, Typography } from '@mui/material'
import { borderRadius, Box, height } from '@mui/system'
import React from 'react'




export const Enquiry = () => {
    return (
        <Box position='relative' height='30rem' bgcolor='#FED5C3' alignContent='center' marginTop={10}>
            <Container fixed sx={{ padding: '100px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box flexDirection='column' sx={{ width: '50%', height:'20rem', display:'flex' ,mt:'10px', mr:'20px'}}>
                    <Typography variant="h4" >
                        Enquiry Now
                    </Typography>
                    <br />
                    <Typography variant='body1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pharetra vestibulum vitae nibh rhoncus, amet, sit. Nunc maecenas mauris massa eget viverra.
                    </Typography>
                </Box>
                <Container sx={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
                    <form >
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '15px', }}>
                            <Box>
                                <Typography variant='h6'> First Name</Typography>
                                <TextField placeholder="Enter First Name" variant="outlined" style={{ backgroundColor: 'white', borderRadius: '5px' }} />
                            </Box>
                            <Box>
                                <Typography variant='h6'> Last Name</Typography>
                                <TextField placeholder="Enter Last Name" variant="outlined" style={{ backgroundColor: 'white', borderRadius: '5px' }} />
                            </Box>

                        </Box>

                        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '15px', }} marginTop={3}  >
                            <Box>
                                <Typography variant='h6'> Phone </Typography>
                                <TextField placeholder="Enter Phone " variant="outlined" style={{ backgroundColor: 'white', borderRadius: '5px' }} />
                            </Box>
                            <Box>
                                <Typography variant='h6'> First Name</Typography>
                                <TextField placeholder="Enter Email Adress" variant="outlined" style={{ backgroundColor: 'white', borderRadius: '5px' }} />
                            </Box>

                        </Box>
                        <Box marginTop={3} flexDirection='column' >

                            <Typography variant='h6'> Message</Typography>
                            <TextField placeholder="Enter Message" variant="outlined" fullWidth='true' style={{ backgroundColor: 'white', borderRadius: '5px' }} />

                            <Button size="large" variant="contained" color="primary" sx={{ px: '30px', marginTop: '50px', mt:'20px' }}>
                               Send
                            </Button>
                        </Box>
                    </form>
                </Container>
            </Container>
        </Box>
    )
}
