import React from 'react'
import { About } from '../About'
import { Banner } from '../Banner'
import { Categories } from '../Categories'
import { Services } from '../Services'
import { Packaging } from '../Packaging'
import { Clients } from '../Clients'
import { FAQ } from '../FAQs'
import { Enquiry } from '../Enquiry'
import WhyUs from '../WhyUs'

export const Index = () => {
  return (
    <div>
        <Banner />
        <Categories />
        <About />
        <Services />
        <WhyUs />
        <Packaging />
        <Clients />
        {/* <FAQ /> */}
        <Enquiry />
    </div>
  )
}
