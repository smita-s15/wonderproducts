import React from 'react'
import { About } from '../About'
import { Banner } from '../Banner'
import { Categories } from '../Categories'
import { Clients } from '../Clients'
import { Services } from '../Services'

export const Index = () => {
  return (
    <div>
        <Banner />
        <Categories />
        <About />
        <Services />
        <Clients />
    </div>
  )
}
