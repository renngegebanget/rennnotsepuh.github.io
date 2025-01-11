import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <div className='absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]'>
      {/* Navbar */}
      <Navbar />
      {/* HomePage */}
      <HomePage />

      {/* Footer */}
      <Footer />
    </div>
  )
}
