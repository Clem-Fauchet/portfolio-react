import React, { useState } from 'react'

import NavBar from '../../NavBar/NavBar'
import Footer from '../Footer'

import InfoBox from './InfoBox'
import Castle from './Castle'

function HomepageLayout() {
  const [isCastleLoad, setIsCastleLoad] = useState(false)

  const loadCastle = () => {
    setIsCastleLoad(true)
  }

  return (
    <div className='layout' onClick={loadCastle}>
      <NavBar />
      {isCastleLoad ? <Castle /> : <InfoBox closeBox={loadCastle} />}
      <Footer />
    </div>
  )
}

export default HomepageLayout
