import React from 'react'

function ProgressBar({ name, icon, Progress }) {
  return (
    <div className='progressBar'>
      <div className='name'>{name}</div>
      <div className='iconBloc'>
        <img src={icon} alt='icon' />
      </div>
      <div className='bar'></div>
    </div>
  )
}

export default ProgressBar
