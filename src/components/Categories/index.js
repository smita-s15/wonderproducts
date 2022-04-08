import React from 'react'
import { Container, Typography, Box } from '@mui/material/'

import { useStyles } from './Style'

export const Categories = () => {
    const classes = useStyles()
    const [active, setActive] = React.useState(false)
    const [activeComp, setActiveComp] = React.useState("")
    // console.log("hey", activeComp)
    return (
        <>
            <Container fixed sx={{ margin: '100px auto', }}>
                <Typography variant="h3" color="initial">
                    Categories
                </Typography>
                <br />
                <Box sx={{ display: 'flex', gap: '30px', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    {new Array(5).fill("").map((item, index, i) => (
                        <Box className={classes.card} onMouseOut={() => { setActive(false); setActiveComp("") }} 
                        onMouseOver={() => { setActive(true); setActiveComp(i) }} key={index} >
                            <img src={require("../../ui/assets/Categories/hygiene-products.png")} alt="" />
                            <Typography variant="h5" color="initial">
                                {i}
                            </Typography>
                        </Box>
                    ))}
                </Box>
                <Box
                    display={active ? ("block") : ("none")}
                    sx={{ height: '50vh', background: '#FED5C3', borderRadius: "10px", }}>
                    {Details.filter((Data) => Data.id === activeComp).map((item, i) => (
                        <>
                            <Box sx={{ padding: '20px' }}>
                                {item.value} : {item.id}
                            </Box>
                        </>
                    ))}
                </Box>
            </Container>
        </>
    )
}

const Data = [
    {
        name: '',
        image: ''
    },
    {
        name: '',
        image: ''
    },
    {
        name: '',
        image: ''
    },
    {
        name: '',
        image: ''
    },
    {
        name: '',
        image: ''
    },
]
const Details = [
    {
        id: 0,
        value: 'hey'
    },
    {
        id: 1,
        value: 'hey'
    },
    {
        id: 2,
        value: 'hey'
    },
    {
        id: 3,
        value: 'hey'
    },
    {
        id: 4,
        value: 'hey'
    },
    {
        id: 5,
        value: 'hey'
    },
    {
        id: 6,
        value: 'hey'
    },
    {
        id: 7,
        value: 'hey'
    },
    {
        id: 8,
        value: 'hey'
    },
    {
        id: 9,
        value: 'hey'
    },
]