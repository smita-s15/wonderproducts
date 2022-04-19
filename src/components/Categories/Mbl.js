import React from 'react'
import { Container, Typography, Box } from '@mui/material/'
import { useStyles } from './Style'
import Grid from '@mui/material/Grid'
import Slider from "react-slick";


const MobileCtg = () => {
    const classes = useStyles()
    const [active, setActive] = React.useState(false)
    const [activeComp, setActiveComp] = React.useState("")

    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 4,
        arrows: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <Container fixed sx={{ margin: { md: '100px auto', xs: '50px auto' }, }}>
                <Typography variant="h3" color="initial">
                    Categories
                </Typography>
                <br />
                <Slider {...settings}>
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
                </Slider>
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
            </Container>
        </>
    )
}

export default MobileCtg


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
            <Grid item xl="3" md="3" xs="12">
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
            <Grid item xl="3" md="3" xs="12">
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
            <Grid item xl="3" md="3" xs="12">
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
            <Grid item xl="3" md="3" xs="12">
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
            <Grid item xl="3" md="3" xs="12">
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
            <Grid item xl="3" md="3" xs="12">
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
            <Grid item xl="3" md="3" xs="12">
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
            <Grid item xl="3" md="3" xs="12">
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
            <Grid item xl="3" md="3" xs="6">
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
            <Grid item xl="3" md="3" xs="6">
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
            <Grid item xl="3" md="3" xs="6">
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
            <Grid item xl="3" md="3"  xs="6">
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
            <Grid item xl="3" md="3" xs="6">
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
            <Grid item xl="3" md="3" xs="6">
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
      {
        id: 5,
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
            <Grid item xl="3" md="3" xs="6">
              Foot Care Cream
              <br /><br />
              Foot Gel
            </Grid>
            <Grid item xl="3" md="3" xs="6">
            </Grid>
          </Grid>
        </>
      },
      {
        id: 6,
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
            <Grid item xl="3" md="3" xs="6">
              Baby Massage 0iI
              <br /><br />
              Nappi Rashes Cream
            </Grid>
            <Grid item xl="3" md="3" xs="6">
            </Grid>
          </Grid></>
      },
      {
        id: 7,
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
            <Grid item xl="3" md="3" xs="6">
              Deodrants
              <br /><br />
              Perms
              <br /><br />
              Deodrizer
            </Grid>
            <Grid item xl="3" md="3" xs="6">
            </Grid>
          </Grid></>
      },
      {
        id: 8,
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
            <Grid item xl="3" md="3" xs="6">
              Kitchen Cleaner
              <br /><br />
              Glass Cleaner
              <br /><br />
              Toilet Cleaner
              <br /><br />
              Woolen Cloth Cleaner
            </Grid>
            <Grid item xl="3" md="3" xs="6">
              Multipurpose Cleaner
              <br /><br />
              Auto Cleaner
              <br /><br />
              Silver Dip
              <br /><br />
              Tooth Powder
            </Grid>
            <Grid item xl="3" md="3" xs="6">
              Shoe Polish
              <br /><br />
              Detergent Powders
              <br /><br />
              Scoring Powder
              <br /><br />
              Detergent Cake
            </Grid>
            <Grid item xl="3" md="3" xs="12">
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
        id: 9,
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
            <Grid item xl="3" md="3" xs="6">
              Industrial Maintainance Sprays
              <br /><br />
              Pain Removal Spray
              <br /><br />
              Tick & Flea Shampoo
              <br /><br />
              Black Coat, White Coat, Brown Coat,
            </Grid>
            <Grid item xl="3" md="3" xs="6">
              Short Coat, Long Coat Shampoo
              <br /><br />
              Conditioner
              <br /><br />
              Itch Relief Spray
              <br /><br />
              Tick Repellent 0iIs Spray
            </Grid>
            <Grid item xl="3" md="3" xs="6">
              Paw Cream
              <br /><br />
              Dry Shampoo
              <br /><br />
              Waterless Shampoo (Flea Shampoo)
              <br /><br />
              Waterless Spray Shampoo
            </Grid>
            <Grid item xl="3" md="3" xs="6">
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
 