import React from 'react'

import Link from './Link'
import Theme from './Theme'
import User from './User'

function NavBar() {
  return (
    <div className='nav'>
      <Link />
      <Theme />
      <User />
    </div>
  )
}

export default NavBar
