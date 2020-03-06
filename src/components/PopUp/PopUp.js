import React, { useState, useEffect, useRef } from 'react'
import CompleteLayout from '../BasicLayout/CompleteLayout'

export const UserContext = React.createContext()

function PopUp() {
  const [isOpen, setIsOpen] = useState(false)
  const [username, setUsername] = useState('')

  const [loadingLayout, setLoadingLayout] = useState(false)

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const openingLetter = () => {
    setTimeout(() => {
      setIsOpen(true)
    }, 2500)
  }

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const submitUser = (e) => {
    e.preventDefault()
    setLoadingLayout(true)
  }

  if (loadingLayout) {
    return (
      <UserContext.Provider value={username}>
        <CompleteLayout />
      </UserContext.Provider>
    )
  } else {
    return (
      <div className='container' onMouseMove={openingLetter}>
        <div className={`letter ${isOpen ? 'open' : ''}`}>
          <span className='cover'></span>
          <h1>Welcome to Hogwarts</h1>
          <h3>Who are you?</h3>
          <form onSubmit={submitUser}>
            <label>
              <input
                type='text'
                placeholder='username'
                value={username}
                onChange={handleUsername}
                maxLength={15}
                ref={inputRef}
              />
            </label>
          </form>
          <svg viewBox='0 0 30 30' width='30px' onClick={submitUser}>
            <path d='M0 0 L15 15 L0 30'></path>
          </svg>
        </div>
      </div>
    )
  }
}

export default PopUp
