import React from 'react'
import rennLogo from '/jagadrenata.png'
import rennHome from '/developer-activity.png'
import rennAbout from '/about.png'
import ProjectCard from '../components/ProjectCard'

const HomePage = () => {
  const projects = [
    {
      title: 'Ocoffe',
      description: 'Proyek awal menggunakan React dan React Bootstrap.',
      image: rennLogo, //400×300
      link: 'https://ocoffe.vercel.app',
    },
    {
      title: 'Portfolio Website',
      description: 'Website portofolio dengan React dan tailwind css.',
      image: rennLogo, //400×300
      link: 'https://renn.biz.id',
    },
  ]

  return (
    <div className='Homepage pb-10'>
      <div className='container mx-auto px-4'>
        <div className='hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32'>
          <div className='box'>
            <h1 className='lg:text-5xl/tight text-3xl font-bold mb-3'>I'm Jagad Renata</h1>
            <h1 className='md:text-xl text-md font-medium mb-4'>
              I'm an
              <span className='text-teal-600'> Front-End Developer</span>
            </h1>
            <p className='font-base/8 mb-7'>
              Halo, saya Jagad Renata, desainer dan pengembang web berusia 14 tahun dari Yogyakarta. Saya memiliki keahlian di bidang front-end dan back-end development, serta minat dalam desain dan
              teknologi.
            </p>
            <a href='#tentang' className='bg-teal-600 hover:bg-teal-500 transition-all py-2 px-4 text-white shadow rounded-full'>
              tentang
            </a>
          </div>
          <div className='box'>
            <img src={rennHome} alt='Jagad Renata' className='md:w-auto w-[400px] md:mx-0 mx-auto' />
          </div>
        </div>

        <div className='about grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32' id='about'>
          <div className='box'>
            <img src={rennAbout} alt='Jagad Renata' className='md:w-auto w-[400px] md:mx-0 mx-auto' />
          </div>
          <div className='box'>
            <h1 className='lg:text-5xl/tight text-3xl font-bold mb-7'>I'm Jagad Renata</h1>
            <p className='font-base/8 mb-7'>
              Halo, saya Jagad Renata, seorang desainer dan pengembang web muda berusia 14 tahun, saya tinggal di Yogyakarta. Saya memiliki minat besar dalam dunia desain dan pengembangan perangkat
              lunak. Hobi saya jalan-jalan dan ngoding, dengan keahlian dalam front-end dan back-end development. Saya berkomitmen untuk terus belajar dan mengembangkan keterampilan saya untuk
              menciptakan solusi digital yang inovatif dan bermanfaat.
            </p>
            <hr />
            <div className='mt-3 flex gap-2'>
              <a href='#' className='bg-teal-600 hover:bg-teal-700 transition-all pt-2 px-10 text-white rounded-full font-medium'>
                My CV
              </a>
              <a href='#' className='bg-white border-2 border-teal-600 hover:bg-teal-500 transition-all py-2 px-7 text-teal-600 rounded-full font-medium'>
                Hire Now
              </a>
            </div>
          </div>
        </div>

        <div className='projects p-4 lg:mt-36 mt-20' id='projects'>
          <h1 className='text-3xl font-bold text-gray-800 text-center mb-6'>Proyek Saya</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {projects.map((project, index) => (
              <ProjectCard key={index} title={project.title} description={project.description} image={project.image} link={project.link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
