import React from 'react'

import NavBar from '../../NavBar/NavBar'
import Footer from '../Footer'
import AdminWord from '../AdminWord'

function PreviousLifeLayout() {
  return (
    <div className='layout'>
      <NavBar />
      <AdminWord />
      <p style={{ color: 'white', zIndex: 999 }}>Previous Life</p>
      <Footer />
    </div>
  )
}

export default PreviousLifeLayout
