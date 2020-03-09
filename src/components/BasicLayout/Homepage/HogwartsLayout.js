import React from 'react'

import NavBar from '../../NavBar/NavBar'
import Castle from './Castle'
import Footer from '../Footer'

function HogwartsLayout() {
  return (
    <div className='layout'>
      <NavBar />
      <Castle />
      <Footer />
    </div>
  )
}

export default HogwartsLayout
