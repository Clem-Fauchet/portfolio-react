import React from 'react'

import AdminWord from '../AdminWord'
import { admin } from '../admin'
import Book from './Book'

import NavBar from '../../NavBar/NavBar'
import Footer from '../Footer'

function WebDevLayout() {
  const word = admin.map((message) => message.word)

  return (
    <div className='layout'>
      <NavBar />
      <div className='content'>
        {' '}
        <AdminWord word={word[0]} />
        <Book />
      </div>

      <Footer />
    </div>
  )
}

export default WebDevLayout
