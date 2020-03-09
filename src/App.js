import React, { useState } from 'react'
import './styles/App.scss'

import { FaSun } from 'react-icons/fa'
import { IoIosMoon } from 'react-icons/io'
import PopUp from './components/PopUp/PopUp'
import HomepageLayout from './components/BasicLayout/Homepage/HomepageLayout'

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
      {/* <PopUp /> */}
      <HomepageLayout />
    </div>
  )
}

export default App
