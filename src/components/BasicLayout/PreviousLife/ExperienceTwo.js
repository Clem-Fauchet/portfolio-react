import React, { useState } from 'react'

import BubbleExp from './BubbleExp'

function ExperienceTwo() {
  const [isShowing, setIsShowing] = useState(false)

  const handleDetails = () => {
    setIsShowing(!isShowing)
  }

  return (
    <div className='second-exp'>
      <BubbleExp
        title='Technician student in R&D lab'
        subTitle='Project developed for future use on Curiosity rover'
        showDetails={handleDetails}
      />

      <div className={`details ${isShowing ? 'show' : ''}`}>
        <ul>
          <li>. Internship as a chemistry technician </li>

          <li>
            . Subject: ‘study and research of optimal reaction conditions for a
            new functionalization agent in order to detect traces of organic
            molecules in a mineral matrix’
          </li>

          <li>
            It was expected to use this agent with Curiosity Rover on Mars
            mineral matrix in the future.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ExperienceTwo
