import React from 'react'
import { About } from '../About'
import { Banner } from '../Banner'
import { Categories } from '../Categories'
import { Services } from '../Services'
import { FAQ } from '../FAQs'
import { Enquiry } from '../Enquiry'
import { Clients } from '../Clients'
import WhyUs from '../WhyUs'
import Packaging from '../Packaging'
import { Box } from '@mui/material'


export const Index = () => {
  return (
    < >
        <Banner />
        <Categories />
        <About />
        <Services />
        <WhyUs />
        <Packaging />
        <Clients />
        <FAQ />
        <Enquiry />
    </>
  )
}
