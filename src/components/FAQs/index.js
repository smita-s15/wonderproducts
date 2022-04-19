import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import { Container, Grid } from '@mui/material';

export const FAQ = () => {
    return (
        <>
            <Container fixed sx={{ margin: '100px auto', }}>
                <Typography variant="h3" color="initial">
                    FAQs
                </Typography>
                <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '50px' }} >
                    {faq.map((item, index) =>
                        <Grid item xs='12' lg='6'  >
                            <Accordion key={index} sx={{ margin: '10px', boxShadow: '0', backgroundColor: '#FFFFFF' }}  >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography variant='body1'>{item.title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='body2' color='gray'>
                                        {item.desc}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    )}
                    <Grid item xs='12' lg='6'  >
                        {faq2.map((item, index) =>
                            <Accordion key={index} sx={{ margin: '10px', boxShadow: '0', backgroundColor: '#FFFFFF' }} >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography variant='body1'>{item.title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='body2' color='gray'>
                                        {item.desc}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

const faq = [
    {
        title: 'Question 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
        title: 'Question 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
        title: 'Question 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
        title: 'Question 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
        title: 'Question 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
]



const faq2 = [
    {
        title: 'Question 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
        title: 'Question 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
        title: 'Question 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
        title: 'Question 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
        title: 'Question 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
]

