import React from 'react'
import { datas } from '../data'

const Footer = () => {
  const contacts = datas.contacts

  return (
    <div className='bg-white shadow mt-20' id='social'>
      <div className='container mx-auto px-4 flex items-center justify-between'>
        <p className='py-4'>
          © Copyright by <span className='font-bold'>Rennotsepuh</span>
        </p>
        <div className='social-footer flex items-center sm:gap-7 gap-3'>
          {contacts.map((contact, index) => (
            <a key={index} href={contact.link} target='_blank' rel='noopener noreferrer'>
              {contact.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer