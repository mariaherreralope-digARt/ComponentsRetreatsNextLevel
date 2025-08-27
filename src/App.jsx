import './App.css'

import Navbar from './components/navbar/Navbar'
import Hero from './components/HeroVideo'
import AboutMe from './components/AboutMe'
import Cursos from './components/Cursos'
import ImageSlider from './components/ImageSlider'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import CookieConsentBanner from './components/CookieConsentBanner'
import Coaching from './components/Coaching'

import { ModalProvider } from './components/ModalContext'
import GlobalModal from './components/GlobalModal.jsx'

function App() {
  return (
    <ModalProvider>
      <main className="relative min-h-screen overflow-x-hidden">
        <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-red-800/20 to-yellow-600/20 rounded-full blur-[80px] -z-10"></div>
        <div className="overflow-hidden">
          <Navbar />
          <Hero />
          {/* <AboutMe />
          <Cursos />
          <ImageSlider />
          <Coaching />
          <Testimonials /> */}
          <Newsletter />
          {/* <Footer /> */}
          <CookieConsentBanner />
          <GlobalModal />
        </div>
      </main>
    </ModalProvider>
  )
}

export default App
