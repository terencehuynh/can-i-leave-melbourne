import React from 'react'
import Hero from '../components/Hero'
import Warning from '../components/Warning'
import Travelling from '../components/Travelling'
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
      <Travelling locations={locations} />
    </>
  )
}

export const getStaticProps = async () => {
  const files = TRAVELLING_LIST.map((location) => getLocationMarkdown(location))
  const locations = await Promise.all(files)
  return { props: { locations } }
}

export default Home
