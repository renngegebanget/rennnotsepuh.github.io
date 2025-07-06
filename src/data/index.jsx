import React from 'react'
import rennLogo from '/jagadrenata.png'
import { FaNodeJs, FaReact, FaBootstrap, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { SiTailwindcss, SiSupabase, SiFirebase, SiCplusplus } from 'react-icons/si'

export const datas = {
  projects: [
    {
      title: 'RenEnglish',
      description: 'A vocabulary learning web app with smart spaced repetition system.',
      image: rennLogo,
      link: 'https://renenglish.my.id',
    },
    {
      title: 'Ocoffe',
      description: 'Initial project using React and React Bootstrap.',
      image: rennLogo,
      link: 'https://ocoffe.vercel.app',
    },
    {
      title: 'Portfolio Website',
      description: 'Portfolio website with React and Tailwind CSS.',
      image: rennLogo,
      link: 'https://renn.biz.id',
    },
  ],
  skills: [
    { name: 'Node.js', icon: <FaNodeJs className='text-4xl text-teal-600' /> },
    { name: 'React', icon: <FaReact className='text-4xl text-teal-600' /> },
    { name: 'Bootstrap', icon: <FaBootstrap className='text-4xl text-teal-600' /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className='text-4xl text-teal-600' /> },
    { name: 'Supabase', icon: <SiSupabase className='text-4xl text-teal-600' /> },
    { name: 'Firebase', icon: <SiFirebase className='text-4xl text-teal-600' /> },
    { name: 'C++', icon: <SiCplusplus className='text-4xl text-teal-600' /> },
  ],
  contacts: [
    {
      name: 'YouTube',
      link: 'https://youtube.com/@XioDev',
      icon: <FaYoutube className='text-2xl' />,
    },
    {
      name: 'Instagram',
      link: 'https://instagram.com/rennnotsepuh',
      icon: <FaInstagram className='text-2xl' />,
    },
    {
      name: 'WhatsApp',
      link: 'https://wa.me/62882006186099',
      icon: <FaWhatsapp className='text-2xl' />,
    },
  ],
}
