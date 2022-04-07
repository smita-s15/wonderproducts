import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const Packaging = () => {
    return (
        <Box flexDirection='column' sx={{ display: 'flex', justifyContent: 'center', width: '100%', gap: '30px' }} marginTop={10} >
            <Box>
                <Typography variant='h3' ml={5}>
                    Packaging
                </Typography>
            </Box>
            <Stack direction='row' sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <Box  bgcolor='#B4C9CE17' sx={{ display:'flex', alignItems:'center', justifyContent:'center', p:'10px '}}>
                    <img src={require("../../ui/assets/Packaging/0-5-oz-cream-tube-mockup-front-view0 1.png")} alt="" style={{ width: '200px', height: '300px' }} />
                </Box>
                <Box  bgcolor='#B4C9CE17' sx={{ display:'flex', alignItems:'center', justifyContent:'center' , p:'10px '}}>
                    <img src={require("../../ui/assets/Packaging/M003T109_Roll_On_Deodorant_010 1.png")} alt="" style={{ width: '200px', height: '300px' }} />
                </Box>
                <Box  bgcolor='#B4C9CE17' sx={{ display:'flex', alignItems:'center', justifyContent:'center', p:'10px '}}>
                    <img src={require("../../ui/assets/Packaging/jar-022.png")} alt="" style={{ width: '150px', height: '200px' }} />
                </Box>
                <Box  bgcolor='#B4C9CE17' sx={{ display:'flex', alignItems:'center', justifyContent:'center', p:'10px '}}>
                    <img src={require("../../ui/assets/Packaging/shampoo-0.png")} alt="" style={{ width: '150px', height: '200px' }} />
                </Box>
            </Stack>
        </Box>
    )
}
