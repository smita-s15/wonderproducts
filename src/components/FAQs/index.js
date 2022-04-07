import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import { Box, Container, Grid } from '@mui/material';
import { display } from '@mui/system';

export const FAQ = () => {
    return (
        <Box flexDirection='column' sx={{ display: 'flex', justifyContent: 'center', width: '100%', }}  height='40rem' >
            <Box>
                <Typography variant='h3' ml={5}>
                   FAQs
                </Typography>
            </Box>
            <Grid container md={12}  sx={{display:'flex', justifyContent:'center', alignItems:'center' , gap:'20px'}} >
                {faq.map((item, index)=> 
                <Grid item  md={5}  >
                <Accordion key={index} >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>{item.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {item.desc}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                </Grid>
            )} 
            </Grid>
        </Box>
    )
}

const faq = [
    {
        title:'Accordion 1',
        desc:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
        title:'Accordion 1',
        desc:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
        title:'Accordion 1',
        desc:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
        title:'Accordion 1',
        desc:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
        title:'Accordion 1',
        desc:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
        title:'Accordion 1',
        desc:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
        title:'Accordion 1',
        desc:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
        title:'Accordion 1',
        desc:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
        title:'Accordion 1',
        desc:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
        title:'Accordion 1',
        desc:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
]
