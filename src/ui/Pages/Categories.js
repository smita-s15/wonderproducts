import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { useStyles } from '../../components/Categories/Style'
import { Clients } from '../../components/Clients'




export const Categories = () => {
    const classes = useStyles()
    const [active, setActive] = React.useState(false)
    const [activeComp, setActiveComp] = React.useState("")


    return (
        <>
         <Box className="half-banner" bgcolor='red' width='100%' sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} >
                <Container fixed sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center',  }} >
                    <img src={require("../../ui/assets/Categories/categories.png")} alt="" style={{ position: 'absolute', width: '80%', bottom: '10px', }} />
                    <Typography variant='h2' position='absolute'  sx={{marginBottom:'-10%'}}>
                        Categories
                    </Typography>
                </Container>
            </Box>
            <Box flexDirection='column' sx={{ display: 'flex', justifyContent: 'center', width: '100%', gap: '30px' }}  >
                <Container fixed sx={{ margin: '100px auto', }}>
                    <Box sx={{ display: 'flex', gap: '30px', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                        {new Array(5).fill("").map((item, index, i) => (
                            <Box className={classes.card} onMouseOut={() => { setActive(false); setActiveComp("") }}
                                onMouseOver={() => { setActive(true); setActiveComp(i) }} key={index} >
                                <img src={require("../../ui/assets/Categories/hygiene-products.png")} alt="" />
                                <Typography variant="h4" color="initial">
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
            </Box>
            <Box marginTop={10}>
                <Clients />
            </Box>
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
