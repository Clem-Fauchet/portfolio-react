import React, { useContext } from 'react'
import { UserContext } from '../../PopUp/PopUp'

import { ReactComponent as Times } from '../../../assets/times.svg'

function InfoBox({ closeBox }) {
  const username = useContext(UserContext)

  return (
    <div className='info-box'>
      <Times onClick={closeBox} />
      <h2>Hi {username}!</h2>
      <h3>I'm Clem, I'm a front end developer and I am your host.</h3>
      <p>
        If you're here, I'm guessing you want to know more about me. As you can
        see I love to create stuff and play with animations. <br /> The best way
        to navigate through the site is by the castle. However feel free to use
        the shortcuts up there as long as you enjoy your visit.
      </p>
      <h4>
        To close this box and acceed to the castle, use the cross or click
        anywhere.
      </h4>
    </div>
  )
}

export default InfoBox
