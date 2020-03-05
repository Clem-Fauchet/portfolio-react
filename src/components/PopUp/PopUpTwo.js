import React from 'react'

function PopUpTwo() {
  return (
    <>
      <div className='letter2'>
        <span className='cover2'></span>
        <h1>Welcome to Hogwarts</h1>
        <h3>Who are you?</h3>
        <label>
          <input type='text' placeholder='username' value='' />
        </label>
        <svg viewBox='0 0 30 30' width='30px'>
          <path d='M0 0 L15 15 L0 30'></path>
        </svg>
      </div>
    </>
  )
}

export default PopUpTwo
