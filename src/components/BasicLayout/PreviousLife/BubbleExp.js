import React from 'react'

const Circle = () => (
  <svg width='300' height='300'>
    <circle
      cx='150'
      cy='150'
      r='145'
      fill='none'
      stroke-width='10'
      stroke='#FF9115'
    />
  </svg>
)

function BubbleExp({ title, subTitle, showDetails }) {
  return (
    <div className='circle'>
      <Circle />
      <div className='text'>
        <h3>{title}</h3>
        <h4>{subTitle}</h4>
        <button onClick={showDetails}>Details</button>
      </div>
    </div>
  )
}

export default BubbleExp
