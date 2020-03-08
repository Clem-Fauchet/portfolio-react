import React, { useState } from 'react'
import './styles/App.scss'

import { FaSun } from 'react-icons/fa'
import { IoIosMoon } from 'react-icons/io'
import PopUp from './components/PopUp/PopUp'
import BasicLayout from './components/BasicLayout/BasicLayout'

function App() {
  const [themeLight, setThemeLight] = useState(false)

  const changingTheme = () => {
    setThemeLight(!themeLight)
  }

  return (
    <div className={`App ${themeLight ? 'theme--light' : 'theme--dark'}`}>
      <div className='mode'>
        {themeLight ? (
          <IoIosMoon className='icon' onClick={changingTheme} />
        ) : (
          <FaSun className='icon' onClick={changingTheme} />
        )}
      </div>
      <PopUp />
      {/* <BasicLayout /> */}
    </div>
  )
}

export default App
