import React from 'react'
import { ReactComponent as Chococard } from '../../assets/chococard.svg'

function AdminWord({ word }) {
  return (
    <div className='adminWord'>
      <Chococard />
      <div className='message'>
        <p>{word}</p>
      </div>
    </div>
  )
}

export default AdminWord
