import React from 'react'
import { Link } from 'react-router-dom'

function Links() {
  return (
    <div className='link'>
      <Link to='/'>
        <li style={{ color: '#FF9115' }}>Hogwarts</li>
      </Link>
      <Link to='/projects'>
        <li>Projects</li>
      </Link>
      <Link to='./web-dev'>
        <li>Web Dev</li>
      </Link>
      <Link to='./previous-life'>
        <li>Previous Life</li>
      </Link>
    </div>
  )
}

export default Links
