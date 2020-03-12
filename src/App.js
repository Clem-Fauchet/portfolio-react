import React, { useState, useReducer } from 'react'
import Modal from 'react-modal'
import './styles/App.scss'

import { FaSun } from 'react-icons/fa'
import { IoIosMoon } from 'react-icons/io'
import PopUp from './components/PopUp/PopUp'

export const LoadContext = React.createContext()

Modal.setAppElement('#root')

const initialState = {
  home: true,
  hogwarts: false,
  web: false,
  projects: false,
  previous: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'loadWeb':
      return {
        ...state,
        home: false,
        hogwarts: false,
        web: true,
        projects: false,
        previous: false,
      }

    case 'loadProjects':
      return {
        ...state,
        home: false,
        hogwarts: false,
        web: false,
        projects: true,
        previous: false,
      }

    case 'loadPrevious':
      return {
        ...state,
        home: false,
        hogwarts: false,
        web: false,
        projects: false,
        previous: true,
      }

    case 'loadHogwarts':
      return {
        ...state,
        home: false,
        hogwarts: true,
        web: false,
        projects: false,
        previous: false,
      }

    default:
      return initialState
  }
}

function App() {
  const [themeLight, setThemeLight] = useState(false)

  const changingTheme = () => {
    setThemeLight(!themeLight)
  }

  const [load, dispatch] = useReducer(reducer, initialState)

  return (
    <div className={`App ${themeLight ? 'theme--light' : 'theme--dark'}`}>
      <div className='mode'>
        {themeLight ? (
          <IoIosMoon className='icon' onClick={changingTheme} />
        ) : (
          <FaSun className='icon' onClick={changingTheme} />
        )}
      </div>

      <LoadContext.Provider value={{ loadState: load, loadDispatch: dispatch }}>
        <PopUp />
      </LoadContext.Provider>
    </div>
  )
}

export default App
