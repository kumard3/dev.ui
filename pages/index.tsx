/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/link-passhref */
import Button5 from '../app/components/button/Button5'
import HeroSection2 from '../app/components/Hero/HeroSection2'
import HomePage from '../layout/HomePage'
import Hero from '../website/components/Hero'

export default function Home() {
  return (
    <HomePage>
      <Hero />
      <HeroSection2 />
    </HomePage>
  )
}
