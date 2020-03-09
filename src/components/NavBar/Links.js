import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LoadContext } from '../../App'

function Links() {
  const loadContext = useContext(LoadContext)

  return (
    <div className='link'>
      <Link to='/'>
        <li
          style={{ color: '#FF9115' }}
          onClick={() => loadContext.loadDispatch({ type: 'default' })}
        >
          Hogwarts
        </li>
      </Link>
      <Link to='/projects'>
        <li onClick={() => loadContext.loadDispatch({ type: 'loadProjects' })}>
          Projects
        </li>
      </Link>
      <Link to='./web-dev'>
        <li onClick={() => loadContext.loadDispatch({ type: 'loadWeb' })}>
          Web Dev
        </li>
      </Link>
      <Link to='./previous-life'>
        <li onClick={() => loadContext.loadDispatch({ type: 'loadPrevious' })}>
          Previous Life
        </li>
      </Link>
    </div>
  )
}

export default Links
