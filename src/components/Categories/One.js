import React from 'react'
import { Typography, Box } from '@mui/material/'
import { useStyles } from './Style'
import Grid from '@mui/material/Grid'


const One = () => {
  const classes = useStyles()
  const [active, setActive] = React.useState(false)
  const [activeComp, setActiveComp] = React.useState("")
  // slider

  return (
    <>
      <Box sx={{ display: 'flex', gap: '30px', justifyContent: 'space-between', flexWrap: { md: 'nowrap', xs: 'wrap' } }}>
        {Data.map((item, i) => (
          <div>
            <Box className={classes.card} onMouseOut={() => { setActive(false); setActiveComp("") }}
              onMouseOver={() => { setActive(true); setActiveComp(i) }}  >
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

export default One

const Data = [
  {
    name: 'Hair Care',
    image: 'categories (4).png'
  },
  {
    name: 'Face Care',
    image: 'categories (0).png'
  },
  {
    name: 'Skin Care',
    image: 'categories (3).png'
  },
  {
    name: 'Mouth Care',
    image: 'categories (2).png'
  },
  {
    name: 'Hand Care',
    image: 'categories (1).png'
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
          Hair Vetilyzer
          <br /><br />
          Men hair gel
          <br /><br />
          Men Anti-Dandruff Styling Gel
          <br /><br />
          Hair Cleanser
          <br /><br />
          Daily use Shampoo
        </Grid>
        <Grid item xl="3" md="3">
          Anti Dandruff Shampoo
          <br /><br />
          HairSpaSfiaMpOO
          <br /><br />
          Color Protect Shampoo
          <br /><br />
          Hair Conditional
          <br /><br />
          Anti Dandrul Lotion
        </Grid>
        <Grid item xl="3" md="3">
          Hair Masque
          <br /><br />
          Hair 0iI
          <br /><br />
          Hair Tonic
          <br /><br />
          Hair Serum
          <br /><br />
          Hair Growth Sprays
        </Grid>
        <Grid item xl="3" md="3">
          Hair Cream
          <br /><br />
          Hair Gel
          <br /><br />
          Hair Lotion
          <br /><br />
          Hair Spray
          <br /><br />
          Hair Mask
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
          Face Cream (M/W)
          <br /><br />
          Sun Screen (Cream/ Gel/Lotion)
          <br /><br />
          Anti Acne Cream
          <br /><br />
          Anti Acne Face Pack
          <br /><br />
          Bleach Cream
          <br /><br />
          Lip Barn
        </Grid>
        <Grid item xl="3" md="3">
          Face Wash 6 Scrub
          <br /><br />
          Facial Kit
          <br /><br />
          Face Gel
          <br /><br />
          Face Lotion
          <br /><br />
          Shave Foam

        </Grid>
        <Grid item xl="3" md="3">
          Fairness Cream (M/\/Y)
          <br /><br />
          BB CREAM
          <br /><br />
          Shaving Cream
          <br /><br />
          Face Mask
          <br /><br />
          Face Powder
          <br /><br />
          Face Primer
        </Grid>
        <Grid item xl="3" md="3">
          Shaving Gel
          <br /><br />
          Tea Tree 0iI
          <br /><br />
          Eye Shadows
          <br /><br />
          After Shave
          <br /><br />
          Freshened Gel
        </Grid>
      </Grid>
    </>
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
          Bathing Bar
          <br /><br />
          Body Spray
          <br /><br />
          Body Wash
          <br /><br />
          Body Lotion
          <br /><br />
          Cold Cream
          <br /><br />
          Itch Cream
        </Grid>
        <Grid item xl="3"  md="3">
          Glycerine Soap
          <br /><br />
          Opaque Soap
          <br /><br />
          HdrRemoverCream
          <br /><br />
          Lotion
          <br /><br />
          Masque
          <br /><br />
          Massage 0iI
        </Grid>
        <Grid item xl="3" md="3">
          Shower Gel
          <br /><br />
          Skin Body Spray
          <br /><br />
          Skin Cream
          <br /><br />
          Skin Gel
          <br /><br />
          UnderEye Cream
          <br /><br />
          Vaginal Wash
        </Grid>
        <Grid item xl="3" md="3">
          Moisturieser
          <br /><br />
          Mosquito Repllant Gel
          <br /><br />
          Mosquito Control Products
          <br /><br />
          Mosquito Gel
          <br /><br />
          Mosquito Patches
          <br /><br />
          Mosquito Repellent
          <br /><br />
          Scrub
        </Grid>
      </Grid>
    </>
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
          Tooth Gel
          <br /><br />
          Tooth Paste
          <br /><br />
          Mouth Wash
        </Grid>
      </Grid>
    </>
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
          Hand 6 Shower Wash
          <br /><br />
          Hand Sanitizer
          <br /><br />
          Hand Wash
          <br /><br />
          Perineal Wash
          <br /><br />
          Soap(Transparent/Glycerine)
        </Grid>
      </Grid>
    </>
  },
]

