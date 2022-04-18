import React from 'react'
import { Typography, Box } from '@mui/material/'
import { useStyles } from './Style'
import Grid from '@mui/material/Grid'


const Two = () => {
  const classes = useStyles()
  const [active, setActive] = React.useState(false)
  const [activeComp, setActiveComp] = React.useState("")
 

  return (
    <>

      <Box sx={{ display: 'flex', gap: '30px', justifyContent: 'space-between', flexWrap: { md: 'nowrap', xs: 'wrap' } }}>
        {Data.map((item, i) => (
          <div>
            <Box className={classes.card} onMouseOut={() => { setActive(false); setActiveComp("") }}
              onMouseOver={() => { setActive(true); setActiveComp(i) }} >
              <img src={require(`../../ui/assets/Categories/${item.image}`)} alt="" />
              <Typography variant="h5" color="initial">
                {item.name}
              </Typography>
            </Box>
          </div>
        ))}
      </Box>
      <Box
        display={active ? ("block") : ("none")}
        className={classes.hover_box}
      >
        {Details.filter((Data) => Data.id === activeComp).map((item, i) => (
          <>
            <Box sx={{ padding: '20px' }}>
              {item.value}
            </Box>
          </>
        ))}
      </Box>
    </>
  )
}

export default Two

const Data = [
  {
    name: 'Foot Care',
    image: 'categories (5).png'
  },
  {
    name: 'Baby Care',
    image: 'categories (6).png'
  },
  {
    name: 'Fragnance',
    image: 'categories (7).png'
  },
  {
    name: 'Daily User Products',
    image: 'categories (8).png'
  },
  {
    name: 'Veterinary Products',
    image: 'categories (9).png'
  },
]
const Details = [
  {
    id: 0,
    value: <>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        alignContent="center"
        wrap="wrap"
      >
        <Grid item xl="3" md="3">
          Foot Care Cream
          <br /><br />
          Foot Gel
        </Grid>
        <Grid item xl="3" md="3">
        </Grid>
      </Grid>
    </>
  },
  {
    id: 1,
    value: <>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        alignContent="center"
        wrap="wrap"
      >
        <Grid item xl="3" md="3">
          Baby Massage 0iI
          <br /><br />
          Nappi Rashes Cream
        </Grid>
        <Grid item xl="3" md="3">
        </Grid>
      </Grid></>
  },
  {
    id: 2,
    value: <>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        alignContent="center"
        wrap="wrap"
      >
        <Grid item xl="3" md="3">
          Deodrants
          <br /><br />
          Perms
          <br /><br />
          Deodrizer
        </Grid>
        <Grid item xl="3" md="3">
        </Grid>
      </Grid></>
  },
  {
    id: 3,
    value: <>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        alignContent="center"
        wrap="wrap"
      >
        <Grid item xl="3" md="3">
          Kitchen Cleaner
          <br /><br />
          Glass Cleaner
          <br /><br />
          Toilet Cleaner
          <br /><br />
          Woolen Cloth Cleaner
        </Grid>
        <Grid item xl="3" md="3">
          Multipurpose Cleaner
          <br /><br />
          Auto Cleaner
          <br /><br />
          Silver Dip
          <br /><br />
          Tooth Powder
        </Grid>
        <Grid item xl="3" md="3">
          Shoe Polish
          <br /><br />
          Detergent Powders
          <br /><br />
          Scoring Powder
          <br /><br />
          Detergent Cake
        </Grid>
        <Grid item xl="3" md="3">
          Room Freshner(0f All Flavours)
          <br /><br />
          Industrial Maintainance Sprays
          <br /><br />
          Pain Removal Spray
          <br /><br />
          Pharmaceutical Sprays
        </Grid>
      </Grid></>
  },
  {
    id: 4,
    value: <>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        alignContent="center"
        wrap="wrap"
      >
        <Grid item xl="3" md="3">
          Industrial Maintainance Sprays
          <br /><br />
          Pain Removal Spray
          <br /><br />
          Tick & Flea Shampoo
          <br /><br />
          Black Coat, White Coat, Brown Coat,
        </Grid>
        <Grid item xl="3" md="3">
          Short Coat, Long Coat Shampoo
          <br /><br />
          Conditioner
          <br /><br />
          Itch Relief Spray
          <br /><br />
          Tick Repellent 0iIs Spray
        </Grid>
        <Grid item xl="3" md="3">
          Paw Cream
          <br /><br />
          Dry Shampoo
          <br /><br />
          Waterless Shampoo (Flea Shampoo)
          <br /><br />
          Waterless Spray Shampoo
        </Grid>
        <Grid item xl="3" md="3">
          Waterless Paw Cleaning Foam
          <br /><br />
          Stain 6 Odor Removing Spray
          <br /><br />
          Tangle Fix Spray	 Odor Kill 6
          <br /><br />
          Anti Bacterial Floor Cleaner
        </Grid>
      </Grid>
    </>
  },
]
