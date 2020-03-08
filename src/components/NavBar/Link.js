import React from 'react'
import {BrowerRouter as Router, Switch, Route} from 'react-router-dom'

function Link() {
  return (
    <div className='link'>
      <li style={{ color: '#FF9115' }}>Hogwarts</li>
      <li>Projects</li>
      <li>Web Dev</li>
      <li>Previous Life</li>
    </div>
  )
}

export default Link
