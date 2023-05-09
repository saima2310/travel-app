import React from 'react'
import { Navbar, Hero, Footer, Memory, Explore, Advertise, Pricing, Banner, Newsletter } from './components'
import { bannerAPI, brands, footerAPI, hero, memory, navlinks, placesAPI, pricingapi } from './data/travingodata'
const App = () => {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Memory memory={memory} />
      <Explore title="Explore the Beauty Of World" placesAPI={placesAPI} />
      <Advertise brands={brands} />
      <Pricing pricingapi={pricingapi} />
      <Banner bannerAPI={bannerAPI} />
      <Newsletter />
      <Footer footerAPI={footerAPI} />
    </>
  )
}

export default App
