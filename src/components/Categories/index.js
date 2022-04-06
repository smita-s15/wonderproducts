import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

export const Categories = () => {
  return (
    <Box height='40rem' >
      <Container fullwidth='true' >
        <Box>
          <Typography variant='h3'>
            Categories
          </Typography>
        </Box>
        <Grid container md={8} xl={12}>
          <Grid item md={3} xl={2} >
            {Category.map((data, index) => {
              return
              <Box key={index} bgcolor='pink' sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center', height: '200px' }} borderRadius={5} flexDirection='column' >

                <img src={data.image} alt='' />
                <Typography variant='body1' fontWeight='bold' marginTop={2} >
                  {data.title}
                </Typography>
              </Box>
            })}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

const Category = [
  {
    title: 'Hair Care',
    image: '"../../ui/assets/Categories/Mask Group.png"'
  },
  {
    title: 'Face Care',
    image: '"../../ui/assets/Categories/Mask Group (1).png"'
  },
  {
    title: 'Skin Care',
    image: '"../../ui/assets/Categories/hygiene-products.png"'
  },
  {
    title: 'Mouth Care',
    image: '"../../ui/assets/Categories/mouth.png"'
  },
  {
    title: 'Hand Care',
    image: '"../../ui/assets/Categories/washing-hands.png"'
  },
  {
    title: 'Foot Care',
    image: '"../../ui/assets/Categories/pedicure.png"'
  },
  {
    title: 'Baby Care',
    image: '"../../ui/assets/Categories/mother (1).png"'
  },
  {
    title: 'Fragrance ',
    image: '"../../ui/assets/Categories/perfume.png"'
  },
  {
    title: 'Daily Use Products',
    image: '"../../ui/assets/Categories/basket.png"'
  },
  {
    title: 'Veternary Products',
    image: '"../../ui/assets/Categories/hygiene-products.png"'
  },
]
