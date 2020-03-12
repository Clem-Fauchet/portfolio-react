import React, { useState, useContext } from 'react'
import { LoadContext } from '../../../App'
import Modal from 'react-modal'

import { ReactComponent as Hogwarts } from '../../../assets/castle.svg'

import { ReactComponent as Potion } from '../../../assets/potion.svg'
import { ReactComponent as Defense } from '../../../assets/defense.svg'
import { ReactComponent as History } from '../../../assets/history.svg'
import { ReactComponent as Trap } from '../../../assets/trap.svg'

const customStyle = {
  overlay: {
    zIndex: 999999999,
  },
}

function Castle() {
  const loadContext = useContext(LoadContext)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const message = 'Choose wisely'

  return (
    <>
      <div className='castle'>
        <Hogwarts />

        <div className='castle-items'>
          <Potion
            onClick={() => loadContext.loadDispatch({ type: 'loadPrevious' })}
            className={`potionSvg ${
              loadContext.loadState.previous ? 'active' : ''
            }`}
          />
          <Defense
            onClick={() => loadContext.loadDispatch({ type: 'loadProjects' })}
            className={`defenseSvg ${
              loadContext.loadState.projects ? 'active' : ''
            }`}
          />
          <History
            onClick={() => loadContext.loadDispatch({ type: 'loadWeb' })}
            className={`historySvg ${
              loadContext.loadState.web ? 'active' : ''
            }`}
          />
          <Trap onClick={() => setModalIsOpen(true)} />
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(true)}
        style={customStyle}
      >
        <div className='explanation'>
          <h2>
            Did you try to find a bug on my website? Well well well. Sorry but I
            locked the window, you need to find the right button to exit this
            page. Have fun!
          </h2>
        </div>
        <button className='btn' onClick={() => alert('Not this one')}>
          {message}
        </button>
        <button className='btn' onClick={() => alert('Oops try again')}>
          {message}
        </button>
        <button className='btn' onClick={() => alert('Most obvious huh?')}>
          {message}
        </button>
        <button className='btn' onClick={() => alert('Sorry not sorry')}>
          {message}
        </button>
        <button className='btn' onClick={() => alert('Wrong button')}>
          {message}
        </button>
        <button
          className='btn'
          onClick={() => alert("What's up with this one?")}
        >
          {message}
        </button>
        <button className='btn' onClick={() => setModalIsOpen(false)}>
          {message}
        </button>
        <button
          className='btn'
          onClick={() => alert("Guess it's not this one")}
        >
          {message}
        </button>
      </Modal>
    </>
  )
}

export default Castle
