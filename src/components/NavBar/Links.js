import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
import { LoadContext } from '../../App'

function Links() {
  const loadContext = useContext(LoadContext)

  return (
    <div className='link'>
      <li
        onClick={() => loadContext.loadDispatch({ type: 'loadHogwarts' })}
        className={`${loadContext.loadState.hogwarts ? 'active' : ''}`}
      >
        Hogwarts
      </li>

      <li
        onClick={() => loadContext.loadDispatch({ type: 'loadProjects' })}
        className={`${loadContext.loadState.projects ? 'active' : ''}`}
      >
        Projects
      </li>

      <li
        onClick={() => loadContext.loadDispatch({ type: 'loadWeb' })}
        className={`${loadContext.loadState.web ? 'active' : ''}`}
      >
        Web Dev
      </li>

      <li
        onClick={() => loadContext.loadDispatch({ type: 'loadPrevious' })}
        className={`${loadContext.loadState.previous ? 'active' : ''}`}
      >
        Previous Life
      </li>
    </div>
  )
}

export default Links
