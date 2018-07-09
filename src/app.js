'use strict'
import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEye, faMinus } from '@fortawesome/free-solid-svg-icons'
import './app.scss'

const App = () => (
  <div className='container' style={{ background: `linear-gradient(45deg, #6A78D1, #00BDA5` }}>
    <main>
      <h1>Color Gradient Generator</h1>
      <div className='form-fields'>
        <input type='text' />
        <button>
          <FontAwesomeIcon icon={faEye} />
        </button>
      </div>
      <div className='form-fields'>
        <input type='text' />
        <button>
          <FontAwesomeIcon icon={faEye} />
        </button>
      </div>
      <div className='form-controls'>
        <button>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <button>
          <FontAwesomeIcon icon={faMinus} />
        </button>
      </div>
    </main>
  </div>
)

export default App
