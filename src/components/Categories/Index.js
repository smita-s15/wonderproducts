import React from 'react'
import { Container, Typography,  } from '@mui/material/'
import One from './One'
import Two from './Two'
import MobileCtg from './Mbl'


const Categories = () => {
    return (
        <>
            <Container fixed sx={{ margin: '100px auto', display:{xs:'none', md:'block'} }}>
                <Typography variant="h3" color="initial">
                    Categories
                </Typography>
                <br />
                <One />
                <br />
                <Two />
            </Container>
            <Container fixed sx={{ margin: '100px auto', display:{xs:'block', md:'none'} }}>
            
                <MobileCtg />
            </Container>
        </>
    )
}

export default Categories