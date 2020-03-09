import React from 'react'
import ProgressBar from './ProgressBar'

import { competence } from './competence'

function Skills() {
  const skill = competence.map((skill) => (
    <ProgressBar
      name={skill.tool}
      icon={skill.icon}
      key={skill.id}
      progress={skill.done}
    />
  ))

  return <div className='skills'>{skill}</div>
}

export default Skills
