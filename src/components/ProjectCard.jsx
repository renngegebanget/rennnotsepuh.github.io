import React from 'react'

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className='group relative w-full sm:max-w-sm mx-auto overflow-hidden rounded-xl z-10 bg-white shadow-md md:bg-white'>
      {/* Gambar */}
      <div className='overflow-hidden'>
        <img
          src={image}
          alt={title}
          className='w-full md:h-48 h-60 object-cover transform transition duration-300 group-hover:scale-110'
        />
      </div>

      {/* Konten untuk layar md ke atas */}
      <div className='hidden md:block p-4 text-black z-20'>
        <h2 className='text-lg font-bold mb-2'>{title}</h2>
        <p className='text-gray-800 text-sm mb-4'>{description}</p>
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition duration-200'
        >
          Lihat Proyek
        </a>
      </div>

      {/* Konten animasi untuk layar sm ke bawah */}
      <div className='md:hidden absolute inset-0 flex flex-col justify-end text-center p-4 bg-black bg-opacity-70 rounded-lg transform translate-y-full group-hover:translate-y-0 transition duration-300 overflow-hidden z-20'>
        <h2 className='text-white text-lg font-bold mb-2'>{title}</h2>
        <p className='text-gray-300 text-sm mb-4'>{description}</p>
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition duration-200'
        >
          Lihat Proyek
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
