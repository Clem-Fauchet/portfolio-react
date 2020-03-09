import React, { useState, useContext, useEffect, useRef } from 'react'
import { LoadContext } from '../../App'

import HomepageLayout from '../BasicLayout/Homepage/HomepageLayout'
import HogwartsLayout from '../BasicLayout/Homepage/HogwartsLayout'
import WebDevLayout from '../BasicLayout/WebDev/WebDevLayout'
import ProjectsLayout from '../BasicLayout/Projects/ProjectsLayout'
import PreviousLifeLayout from '../BasicLayout/PreviousLife/PreviousLifeLayout'

export const UserContext = React.createContext()

function PopUp() {
  const [isOpen, setIsOpen] = useState(false)
  const [username, setUsername] = useState('')

  const loadContext = useContext(LoadContext)
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

  if (loadingLayout && username !== '' && loadContext.loadState.home) {
    return (
      <UserContext.Provider value={username}>
        <HomepageLayout />
      </UserContext.Provider>
    )
  } else if (
    loadingLayout &&
    username !== '' &&
    loadContext.loadState.hogwarts
  ) {
    return (
      <UserContext.Provider value={username}>
        <HogwartsLayout />
      </UserContext.Provider>
    )
  } else if (
    loadingLayout &&
    username !== '' &&
    loadContext.loadState.projects
  ) {
    return (
      <UserContext.Provider value={username}>
        <ProjectsLayout />
      </UserContext.Provider>
    )
  } else if (loadingLayout && username !== '' && loadContext.loadState.web) {
    return (
      <UserContext.Provider value={username}>
        <WebDevLayout />
      </UserContext.Provider>
    )
  } else if (
    loadingLayout &&
    username !== '' &&
    loadContext.loadState.previous
  ) {
    return (
      <UserContext.Provider value={username}>
        <PreviousLifeLayout />
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
