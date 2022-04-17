import React from 'react'
import { Container, Box, Grid, } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Clients } from '../../../../components/Clients'
import CircleIcon from '@mui/icons-material/Circle';
import Slider from "react-slick";
import { useStyles } from './style';
import Carousel from './Carousel';



export const Private = ({ children, props }) => {

    return (
        <>
            <Box className="half-banner" sx={{ display: 'flex', alignItems: { md: 'flex-end', xs: 'center' } }}>
                <Container fixed>
                    <img src={require("../../../../ui/assets/Services/privatelabel.png")} alt="" style={{ position: 'absolute', width: '80%', bottom: '10px', }} />
                </Container>
            </Box>
            <Container fixed sx={{ margin: { md: '-150px auto 50px auto', xs: '50px auto' } }}>
                <Grid
                    container
                    spacing={3}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                    sx={{ position: "relative" }}
                >
                    <Grid item xl="6" md="6" xs="12" sx={{ marginTop: '100px', marginTop:{md:'150px',xs:'auto'} }}>
                        <Typography gutterBottom variant="h1">
                            Our Services
                        </Typography>
                        <br />
                        <Typography variant="h6" sx={{ opacity: '0.6' }}>
                            Historically, outsourcing manufacturing was something brand marketers did when first getting started, when in a bind for capacity, or when launching a new product. In most instances, if the product were successful, manufacturing would be brought in house. But in a world of specialists, where the latest technologies are both necessary and expensive, and efficiencies of scale are often essential, contract manufacturing is growing as a normal, long term way to produce products for the cosmetics, fragrance and personal care markets.
                        </Typography>
                        <br />
                        {ArrContract.map((item, index) =>
                            <Box flexDirection='row' sx={{ opacity: '0.6', display: 'flex', gap: '20px', alignItems: 'center' }} marginTop={1} >
                                <CircleIcon sx={{ width: '10px', height: '10px' }} />

                                <Typography variant="h6"  >
                                    {item.title}
                                </Typography>
                            </Box>
                        )}
                    </Grid>
                    <Grid item xl="6" md="6" xs="12"  >
                        <img src={require("../../../../ui/assets/Services/privatelabel (1).cf1e5b65217c34e34122.png")} alt="" style={{ width:'100%' , mt:'-60px'}} />
                    </Grid>
                </Grid>
            <Container {...props}>
                {Arr.map((item, index) => {
                    return <Box key={index} >
                        <FirstComponent  >
                            {item.DataComponentOne}
                        </FirstComponent>
                        <SecondComponent  >
                            {item.DataComponentTwo}
                        </SecondComponent>
                    </Box>
                })}
            </Container>
                </Container>
            <Clients />
        </>
    )
}

const ArrContract = [
    {
        title: 'Graphics Design & Assistance'
    },
    {
        title: 'Branding & Maketing Strategy Consultation'
    },
    {
        title: 'Packaging Procurement & Selection'
    },
    {
        title: 'Labelling & Printing Services'
    },
    {
        title: 'Fullfillment'
    },
    {
        title: 'Quality Control-Including Microbiology'
    },
    {
        title: 'Shipping & Deliivery'
    },
]
const DataComponent = (props) => {
    const classes = useStyles();
    const { title, text1, text2, text3, image, ...rest } = props

    const settings = {
        arrows: false,
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplayspeed: 2000,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

    return (
        <>
            <Grid item lg="7" md="6" xs="12"  >
                <Typography variant="h2" color="initial" opacity='0.6'>
                    {title}
                </Typography>
                <Typography variant='h6'>
                    {text1}
                </Typography>
                <br />
                <Typography variant='h6'>
                    {text2}
                </Typography>
                <br />
                <Typography variant='h6'>
                    {text2}
                </Typography>
            </Grid>
            <Grid item lg="5" md="6" xs="12" sx={{ padding: '20px' }} >
                <Carousel />
            </Grid>

        </>

    )
}



const FirstComponent = ({ children }) => {
    return (
        <Grid container sx={{ flexDirection: 'row', mt:'100px' }} >
            {children}
        </Grid>
    )
}

const SecondComponent = ({ children }) => {
    return (
        <Grid container sx={{ flexDirection: 'row-reverse', mt:'100px' }}  >
            {children}
        </Grid>
    )
}
const Arr = [
    {
        DataComponentOne: <DataComponent
            title='Hair Care'
            text1=' Hair Care Products are our specialty, with over 10,000 proven formulations used by the top brands in the Industry, we are positive we can create a Hair care line to suit your needs.'
            text2='Our products are created using only the best ingredients and formulations as well as quality control, microbiology and salon testing, to make sure our clients only receive the best products, and the best results, every time.'
            text3='Constant research and development, makes us extremely competitive as we come up with new products to revolutionize the market and improve the quality of lives of the end user.'
            image={<img src={require("../../../../ui/assets/Services/A7111 1.png")} alt="" />}
        />,

        DataComponentTwo: <DataComponent
            title='Face Care'
            text1=' Hair Care Products are our specialty, with over 10,000 proven formulations used by the top brands in the Industry, we are positive we can create a Hair care line to suit your needs.'
            text2='Our products are created using only the best ingredients and formulations as well as quality control, microbiology and salon testing, to make sure our clients only receive the best products, and the best results, every time.'
            text3='Constant research and development, makes us extremely competitive as we come up with new products to revolutionize the market and improve the quality of lives of the end user.'
            image={<img src={require("../../../../ui/assets/Services/A7111 1.png")} alt="" />}
        />
    },
    {
        DataComponentOne: <DataComponent
            title='Skin & Body Care'
            text1=' Hair Care Products are our specialty, with over 10,000 proven formulations used by the top brands in the Industry, we are positive we can create a Hair care line to suit your needs.'
            text2='Our products are created using only the best ingredients and formulations as well as quality control, microbiology and salon testing, to make sure our clients only receive the best products, and the best results, every time.'
            text3='Constant research and development, makes us extremely competitive as we come up with new products to revolutionize the market and improve the quality of lives of the end user.'
            image={<img src={require("../../../../ui/assets/Services/A7111 1.png")} alt="" />}
        />,

        DataComponentTwo: <DataComponent
            title='Mouth Care'
            text1=' Hair Care Products are our specialty, with over 10,000 proven formulations used by the top brands in the Industry, we are positive we can create a Hair care line to suit your needs.'
            text2='Our products are created using only the best ingredients and formulations as well as quality control, microbiology and salon testing, to make sure our clients only receive the best products, and the best results, every time.'
            text3='Constant research and development, makes us extremely competitive as we come up with new products to revolutionize the market and improve the quality of lives of the end user.'
            image={<img src={require("../../../../ui/assets/Services/A7111 1.png")} alt="" />}
        />
    },
    {
        DataComponentOne: <DataComponent
            title='Hands Care'
            text1=' Hair Care Products are our specialty, with over 10,000 proven formulations used by the top brands in the Industry, we are positive we can create a Hair care line to suit your needs.'
            text2='Our products are created using only the best ingredients and formulations as well as quality control, microbiology and salon testing, to make sure our clients only receive the best products, and the best results, every time.'
            text3='Constant research and development, makes us extremely competitive as we come up with new products to revolutionize the market and improve the quality of lives of the end user.'
            image={<img src={require("../../../../ui/assets/Services/A7111 1.png")} alt="" />}
        />,

        DataComponentTwo: <DataComponent
            title='Foot Care'
            text1=' Hair Care Products are our specialty, with over 10,000 proven formulations used by the top brands in the Industry, we are positive we can create a Hair care line to suit your needs.'
            text2='Our products are created using only the best ingredients and formulations as well as quality control, microbiology and salon testing, to make sure our clients only receive the best products, and the best results, every time.'
            text3='Constant research and development, makes us extremely competitive as we come up with new products to revolutionize the market and improve the quality of lives of the end user.'
            image={<img src={require("../../../../ui/assets/Services/A7111 1.png")} alt="" />}
        />
    },
    {
        DataComponentOne: <DataComponent
            title='Baby Care'
            text1=' Hair Care Products are our specialty, with over 10,000 proven formulations used by the top brands in the Industry, we are positive we can create a Hair care line to suit your needs.'
            text2='Our products are created using only the best ingredients and formulations as well as quality control, microbiology and salon testing, to make sure our clients only receive the best products, and the best results, every time.'
            text3='Constant research and development, makes us extremely competitive as we come up with new products to revolutionize the market and improve the quality of lives of the end user.'
            image={<img src={require("../../../../ui/assets/Services/A7111 1.png")} alt="" />}
        />,

        DataComponentTwo: <DataComponent
            title='Fragnance'
            text1=' Hair Care Products are our specialty, with over 10,000 proven formulations used by the top brands in the Industry, we are positive we can create a Hair care line to suit your needs.'
            text2='Our products are created using only the best ingredients and formulations as well as quality control, microbiology and salon testing, to make sure our clients only receive the best products, and the best results, every time.'
            text3='Constant research and development, makes us extremely competitive as we come up with new products to revolutionize the market and improve the quality of lives of the end user.'
            image={<img src={require("../../../../ui/assets/Services/A7111 1.png")} alt="" />}
        />
    },
    {
        DataComponentOne: <DataComponent
            title='Daily Use Products'
            text1=' Hair Care Products are our specialty, with over 10,000 proven formulations used by the top brands in the Industry, we are positive we can create a Hair care line to suit your needs.'
            text2='Our products are created using only the best ingredients and formulations as well as quality control, microbiology and salon testing, to make sure our clients only receive the best products, and the best results, every time.'
            text3='Constant research and development, makes us extremely competitive as we come up with new products to revolutionize the market and improve the quality of lives of the end user.'
            image={<img src={require("../../../../ui/assets/Services/A7111 1.png")} alt="" />}
        />,

        DataComponentTwo: <DataComponent
            title='Veterinary Products'
            text1=' Hair Care Products are our specialty, with over 10,000 proven formulations used by the top brands in the Industry, we are positive we can create a Hair care line to suit your needs.'
            text2='Our products are created using only the best ingredients and formulations as well as quality control, microbiology and salon testing, to make sure our clients only receive the best products, and the best results, every time.'
            text3='Constant research and development, makes us extremely competitive as we come up with new products to revolutionize the market and improve the quality of lives of the end user.'
            image={<img src={require("../../../../ui/assets/Services/A7111 1.png")} alt="" />}
        />
    },
]


