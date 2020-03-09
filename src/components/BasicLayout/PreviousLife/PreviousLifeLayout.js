import React from 'react'

import AdminWord from '../AdminWord'

import NavBar from '../../NavBar/NavBar'
import Footer from '../Footer'
import { admin } from '../admin'

function PreviousLifeLayout() {
  const word = admin.map((message) => message.word)
  return (
    <div className='layout'>
      <NavBar />
      <AdminWord word={word[2]} />

      <Footer />
    </div>
  )
}

export default PreviousLifeLayout
