import React, { useState } from 'react'

const Bar = ({ progress }) => {
  const [style, setStyle] = useState({ height: 0 })

  setTimeout(() => {
    const newStyle = { height: `${progress}%` }

    setStyle(newStyle)
  }, 5000)

  return (
    <div className='bar'>
      <div className='progress-bar' style={style}></div>
    </div>
  )
}

function ProgressBar({ name, icon, progress }) {
  return (
    <div className='progressBar'>
      <div className='name'>
        <h3>{name}</h3>
      </div>
      <div className='iconBloc'>
        <img src={icon} alt='icon' />
        <span>
          <h3>{progress}%</h3>
        </span>
      </div>
      <Bar progress={progress} />
    </div>
  )
}

export default ProgressBar
