import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

export const Categories = () => {
  return (
      <Box fullwidth='true' flexDirection='column' >
          <Typography variant='h3' ml={10}>
            Categories
          </Typography>
          <Box sx={{marginX:'auto', display:'flex', justifyContent:'center', alignItems:'center', marginTop:'20px'}}>
            <Grid container md={8} lg={12} sx={{ justifyContent: 'space-between', alignItems: 'center', display: 'flex', width:'100%'}} >
            {Category.map((item, index) => 
          <Grid item md={2} xl={2} m='10px' >
              <Box key={index} bgcolor='#FED5C3' sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center', height: '150px' }} borderRadius={5} flexDirection='column' >
                <img src={require("../../ui/assets/Categories/Mask Group.png")} alt="" /> 
                <Typography variant='body1' fontWeight='bold' marginTop={2} textAlign='center' >
                  {item.title}
                </Typography>
              </Box>
          </Grid>
            )}
        </Grid>
        </Box>
      </Box>
  )
}

const Category = [
  {
    title: 'Hair Care',
    image: '../../ui/assets/Categories/Mask Group.png'
  },
  {
    title: 'Face Care',
    image: '../../ui/assets/Categories/Mask Group (1).png'
  },
  {
    title: 'Skin Care',
    image: '../../ui/assets/Categories/hygiene-products.png'
  },
  {
    title: 'Mouth Care',
    image: '../../ui/assets/Categories/mouth.png'
  },
  {
    title: 'Hand Care',
    image: '../../ui/assets/Categories/washing-hands.png'
  },
  {
    title: 'Foot Care',
    image: '../../ui/assets/Categories/pedicure.png'
  },
  {
    title: 'Baby Care',
    image: '../../ui/assets/Categories/mother (1).png'
  },
  {
    title: 'Fragrance ',
    image: '../../ui/assets/Categories/perfume.png'
  },
  {
    title: 'Daily Use Products',
    image: '../../ui/assets/Categories/basket.png'
  },
  {
    title: 'Veternary Products',
    image: '../../ui/assets/Categories/hygiene-products.png'
  },
]
