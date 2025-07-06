import { useEffect, useState } from 'react'
import { HiMenu } from 'react-icons/hi' // Impor ikon HiMenu dari react-icons/hi

const Navbar = () => {
  const [show, setShow] = useState(false)
  const [scroll, setScroll] = useState(false)

  const handleClick = () => {
    setShow(!show)
  }
  let menuActive = show ? 'left-0' : '-left-full'

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 5) {
        setScroll(true)
        setShow(false)
      } else {
        setScroll(false)
      }
    })
  }, []) // Tambahkan dependency array kosong untuk memastikan useEffect hanya berjalan sekali

  const activeScroll = scroll ? 'py-6 bg-white shadow' : 'py-4'

  return (
    <div className={`navbar fixed w-full transition-all ${activeScroll} z-50`}>
      <div className='container mx-auto px-4'>
        <div className='navbar-box flex items-center justify-between'>
          <div className='logo'>
            <h1 className='sm:text-2xl text-xl font-bold'>Renn</h1>
          </div>
          <ul
            className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg bg-slate-100 font-bold text-teal-600 transition-all`}
          >
            <li>
              <a href='#home' className='font-medium opacity-75'>
                Home
              </a>
            </li>
            <li>
              <a href='#about' className='font-medium opacity-75'>
                About
              </a>
            </li>
                        <li>
              <a href='#skills' className='font-medium opacity-75'>
                Skills
              </a>
            </li>
            <li>
              <a href='#projects' className='font-medium opacity-75'>
                Projects
              </a>
            </li>
          </ul>
          <div className='social flex items-center gap-2'>
            <a href='#social' className='bg-teal-600 px-5 py-2 rounded-full text-white font-bold hover:bg-teal-700 transition-all'>
              Social Media
            </a>
            <HiMenu className='text-3xl md:hidden block' onClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
