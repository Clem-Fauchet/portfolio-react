import React from 'react'

import NavBar from '../NavBar/NavBar'
import InfoBox from './Homepage/InfoBox'
import Footer from './Footer'
import Castle from './Homepage/Castle'

function CompleteLayout() {
  return (
    <div className='layout'>
      <NavBar />
      {/* <InfoBox /> */}
      <Castle />
      <Footer />
    </div>
  )
}

export default CompleteLayout
