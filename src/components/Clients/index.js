import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const Clients = () => {
    return (
        <Box flexDirection='column' height='20rem' sx={{ display: 'flex', justifyContent: 'center', width: '100%', gap:'30px' }} marginTop={10} >
            <Box>
                <Typography variant='h3' ml={5}>
                    Clients
                </Typography>
            </Box>
            <Stack direction='row' sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <img src={require("../../ui/assets/Clients/image 74.png")} alt="" />
                <img src={require("../../ui/assets/Clients/image 75.png")} alt=""   />
                <img src={require("../../ui/assets/Clients/Group 1000001768.png")} alt=""  />
                <img src={require("../../ui/assets/Clients/PngItem_1057053 1.png")} alt=""   />
                <img src={require("../../ui/assets/Clients/image 78.png")} alt=""  />
                <img src={require("../../ui/assets/Clients/image 79.png")} alt=""   />
            </Stack>
        </Box>
    )
}
