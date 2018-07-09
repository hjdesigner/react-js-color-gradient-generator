'use strict'
import React from 'react'
import { connect } from 'react-redux'
import { addColors } from 'reducers/colors/actions-creators.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEye, faMinus } from '@fortawesome/free-solid-svg-icons'
import './app.scss'

const App = ({ colors, handleClickAdd }) => (
  <div className='container' style={{ background: `linear-gradient(45deg, ${colors.map(item => item.color)}` }}>
    <main>
      <h1>Color Gradient Generator</h1>
      {colors.map((item) => (
        <div className='form-fields' key={item.id}>
          <input type='text' defaultValue={item.color} />
          <button>
            <FontAwesomeIcon icon={faEye} />
          </button>
        </div>
      ))}

      <div className='form-controls'>
        <button type='button' onClick={handleClickAdd}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <button>
          <FontAwesomeIcon icon={faMinus} />
        </button>
      </div>
    </main>
  </div>
)

const mapStateToProps = (state) => ({
  colors: state.colors
})

const mapDispatchToProps = (dispatch) => ({
  handleClickAdd: (e) => {
    dispatch(addColors())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
