import { Box, Container, } from '@mui/material'
import React from 'react'
import Categories from '../../components/Categories/Index'
import { useStyles } from '../../components/Categories/Style'
import { Clients } from '../../components/Clients'



export const Categories1 = () => {
    const classes = useStyles()


    return (
        <>
            <Box className="half-banner" sx={{ display: 'flex', alignItems: { md: 'flex-end', xs: 'center' } }}>
                <Container fixed>
                    <img src={require("../../ui/assets/Categories/categories.png")} alt="" style={{ width: '100%', bottom: '10px', }} />
                </Container>
            </Box>

            <Box flexDirection='column' sx={{ display: 'flex', justifyContent: 'center', width: '100%', gap: '30px' }}  >
                <Container fixed sx={{ margin: { md: '100px auto', xs: '50px auto' } }}>
                    <Categories />
                </Container>
            </Box>
            <Box marginTop={10}>
                <Clients />
            </Box>
        </>
    )
}

