import React, { useState } from 'react'
import BubbleExp from './BubbleExp'

function ExperienceOne() {
  const [isShowing, setIsShowing] = useState(false)

  const handleDetails = () => {
    setIsShowing(!isShowing)
  }

  return (
    <div className='first-exp'>
      <BubbleExp
        title='Experimentation technician in geology lab'
        subTitle='Contribute in 2 scientific publications'
        showDetails={handleDetails}
      />

      <div className={`details ${isShowing ? 'show' : ''}`}>
        <ul>
          <li>. Projects around clay soils & geological studies </li>

          <li>
            . ‘Thermodynamic and crystallographic model for anion uptake by
            hydrated calcium aluminate (AFm): an example of molybdenum’
            <a
              href='https://www.nature.com/articles/s41598-018-26211-z'
              target='_blank'
              rel='noopener noreferrer'
            >
              Link
            </a>
          </li>

          <li>
            . ‘Weathering of an argillaceous rock in the presence of atmospheric
            conditions: a flow-through experiment and modeling study’
            <a
              href='https://www.sciencedirect.com/science/article/abs/pii/S0883292718301884'
              target='_blank'
              rel='noopener noreferrer'
            >
              Link
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ExperienceOne
