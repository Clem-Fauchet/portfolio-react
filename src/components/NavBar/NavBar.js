import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Links from './Links'

import User from './User'

function NavBar() {
  return (
    <Router>
      <div className='nav'>
        <Links />
        <User />
      </div>
    </Router>
  )
}

export default NavBar
