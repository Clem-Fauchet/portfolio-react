import React, { useState } from 'react'

function PopUp() {
  const [isOpen, setIsOpen] = useState(false)

  const openingLetter = () => {
    setTimeout(() => {
      setIsOpen(true)
    }, 2500)
  }

  return (
    <div class='container' onMouseMove={openingLetter}>
      <div className={`letter ${isOpen ? 'open' : ''}`}>
        <span className='cover'></span>
        <h1>Welcome to Hogwarts</h1>
        <h3>Who are you?</h3>
        <label>
          <input type='text' placeholder='username' />
        </label>
        <svg viewBox='0 0 30 30' width='30px'>
          <path d='M0 0 L15 15 L0 30'></path>
        </svg>
      </div>
    </div>
  )
}

export default PopUp
