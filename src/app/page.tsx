import Hero from './sections/Hero'
import Benefits from './sections/Benefits'
import Pricing from './sections/Pricing'
import FAQ from './sections/FAQ'
import CTA from './sections/CTA'
import PortfolioGallery from './sections/PortfolioGallery'
import AboutSection from './sections/AboutSection'
import TeamSection from './sections/TeamSection'
import Stats from './sections/Stats'
import TechnologiesSection from './sections/TechnologiesSection'






export default function Page() {
  return (
    <>
      <Hero />
      <Benefits />
      <AboutSection/>
      <TechnologiesSection />
      <TeamSection/>
      <Stats/>
      {/* <PortfolioGallery/> */}
      {/* <Pricing /> */}
      <FAQ />
      <CTA />
    </>
  )
}
