import React from 'react'
import Hero from '../components/Hero'
import Warning from '../components/Warning'
import GoingOutside from '../components/GoingOutside'
import Travelling from '../components/Travelling'
import Footer from '../components/Footer'

import { TRAVELLING_LIST } from '../constants'

import { getLocationMarkdown, LocationMarkdown } from '../utils/content'

type HomeProps = {
  locations: LocationMarkdown[]
}

const Home: React.FC<HomeProps> = ({ locations }) => {
  return (
    <>
      <Hero />
      <Warning />
      <GoingOutside />
      <Travelling locations={locations} />
      <Footer />
    </>
  )
}

export const getStaticProps = async () => {
  const files = TRAVELLING_LIST.map((location) => getLocationMarkdown(location))
  const locations = await Promise.all(files)
  return { props: { locations } }
}

export default Home
