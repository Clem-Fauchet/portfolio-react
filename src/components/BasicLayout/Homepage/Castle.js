import React, { useContext } from 'react'
import { LoadContext } from '../../../App'

import { ReactComponent as Hogwarts } from '../../../assets/castle.svg'

import { ReactComponent as Potion } from '../../../assets/potion.svg'
import { ReactComponent as Defense } from '../../../assets/defense.svg'
import { ReactComponent as History } from '../../../assets/history.svg'
import { ReactComponent as Trap } from '../../../assets/trap.svg'

function Castle() {
  const loadContext = useContext(LoadContext)
  return (
    <div className='castle'>
      <Hogwarts />

      <Potion
        onClick={() => loadContext.loadDispatch({ type: 'loadPrevious' })}
      />
      <Defense
        onClick={() => loadContext.loadDispatch({ type: 'loadProjects' })}
      />
      <History onClick={() => loadContext.loadDispatch({ type: 'loadWeb' })} />
      <Trap />
    </div>
  )
}

export default Castle
