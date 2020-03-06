import React from 'react'

import { FaLinkedin, FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <>
      <svg className='footer'>
        <path
          width={180}
          height={100}
          d='M 180 0
           L 180 100
           L 0 100
           Q 0 0 180 0'
        />
      </svg>

      <div className='icons'>
        <a
          target='_blank'
          href='https://github.com/Clem-Fauchet'
          rel='noopener noreferrer'
        >
          <FaGithub className='link' />
        </a>

        <a
          target='_blank'
          href='https://www.linkedin.com/in/cl%C3%A9mencefauchet23/'
          rel='noopener noreferrer'
        >
          <FaLinkedin className='link' />
        </a>
      </div>
    </>
  )
}

export default Footer
