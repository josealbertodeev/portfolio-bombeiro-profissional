import Header from './components/Header'
import Hero from './components/Hero'
import Metrics from './components/Metrics'
import Specialties from './components/Specialties'
import TrajectorySection from './components/TrajectorySection'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Metrics />
        <Specialties />
        <TrajectorySection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
