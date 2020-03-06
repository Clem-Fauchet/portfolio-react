import React from 'react'

import NavBar from '../NavBar/NavBar'
import InfoBox from './Homepage/InfoBox'
import Footer from './Footer'

function CompleteLayout() {
  return (
    <div className='layout'>
      <NavBar />
      <InfoBox />
      <Footer />
    </div>
  )
}

export default CompleteLayout
