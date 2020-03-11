import React from 'react'

import AdminWord from '../AdminWord'
import Recipe from './Recipe'
import ExperienceOne from './ExperienceOne'
import ExperienceTwo from './ExperienceTwo'
import { ReactComponent as Cauldron } from '../../../assets/cauldron.svg'

import NavBar from '../../NavBar/NavBar'
import Footer from '../Footer'
import { admin } from '../admin'

function PreviousLifeLayout() {
  const word = admin.map((message) => message.word)
  return (
    <div className='layout'>
      <NavBar />
      <div className='content'>
        <AdminWord word={word[2]} />
        <div className='first-bloc'>
          <Recipe />
          <ExperienceOne />
        </div>
        <div className='second-bloc'>
          <ExperienceTwo />
          <div className='cauldron'>
            <span className='flex-cauldron'>
              {' '}
              <Cauldron />
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default PreviousLifeLayout
