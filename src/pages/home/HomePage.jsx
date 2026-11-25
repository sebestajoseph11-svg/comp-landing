import AboutSection from './sections/AboutSection/AboutSection'
import ContactSection from './sections/ContactSection/ContactSection'
import EngageSection from './sections/EngageSection/EngageSection'
import HeroSection from './sections/HeroSection/HeroSection'
import ServicesSection from './sections/ServicesSection/ServicesSection'
import TestimonialsSection from './sections/TestimonialsSection/TestimonialsSection'
import WorkSection from './sections/WorkSection/WorkSection'
import './HomePage.css'

export default function HomePage() {
  return (
    <main className="home-page">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <EngageSection />
      <WorkSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}
