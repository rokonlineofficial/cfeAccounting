import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import GlobalMotion from './components/GlobalMotion.jsx'
import ScrollManager from './components/ScrollManager.jsx'
import Home from './pages/Home.jsx'

const About = lazy(() => import('./pages/About.jsx'))
const Services = lazy(() => import('./pages/Services.jsx'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail.jsx'))
const WhyChooseUs = lazy(() => import('./pages/WhyChooseUs.jsx'))
const Testimonials = lazy(() => import('./pages/Testimonials.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const Companies = lazy(() => import('./pages/Companies.jsx'))
const CompanyDetail = lazy(() => import('./pages/CompanyDetail.jsx'))
const Specialties = lazy(() => import('./pages/Specialties.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <GlobalMotion />
      <ScrollManager />
      <Navbar />
      <main id="main">
        <Suspense fallback={<div className="page-loading" aria-busy="true" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/companies/:slug" element={<CompanyDetail />} />
            <Route path="/specialties" element={<Specialties />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
