import React, { useContext } from 'react'
import { UserContext } from '../PopUp/PopUp'

import { FaHatWizard } from 'react-icons/fa'

function User() {
  const username = useContext(UserContext)

  return (
    <div className='user'>
      <FaHatWizard color='#FF9115' size='32px' />
      <h3>{username}</h3>
    </div>
  )
}

export default User
