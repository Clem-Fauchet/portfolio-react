import React from 'react'

import { ReactComponent as Hogwarts } from '../../../assets/castle.svg'

import { ReactComponent as Potion } from '../../../assets/potion.svg'
import { ReactComponent as Defense } from '../../../assets/defense.svg'
import { ReactComponent as History } from '../../../assets/history.svg'
import { ReactComponent as Trap } from '../../../assets/trap.svg'

function Castle() {
  return (
    <div className='castle'>
      <Hogwarts />

      <Potion />
      <Defense />
      <History />
      <Trap />
    </div>
  )
}

export default Castle
