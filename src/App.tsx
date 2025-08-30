import { ThemeProvider } from "./components/ui/theme-provider"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import ServicesSection from "./components/ServicesSection"
import TrainersSection from "./components/TrainersSection"
import GallerySection from "./components/GallerySection"
import TestimonialsSection from "./components/TestimonialsSection"
import ContactSection from "./components/ContactSection"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vision-fitness-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <TrainersSection />
          <GallerySection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App