'use strict'
import React from 'react'
import { connect } from 'react-redux'
import { addColors, removeColors } from 'reducers/colors/actions-creators.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEye, faMinus } from '@fortawesome/free-solid-svg-icons'
import './app.scss'

const App = ({ colors, handleClickAdd, handleClickRemove }) => (
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
        {colors.length > 2 ? <button type='button' onClick={handleClickRemove(colors.slice(-1)[0].id)}><FontAwesomeIcon icon={faMinus} /></button> : false}
      </div>
    </main>
  </div>
)

const mapStateToProps = (state) => ({
  colors: state.colors
})

const mapDispatchToProps = (dispatch) => ({
  handleClickAdd: () => {
    dispatch(addColors())
  },
  handleClickRemove: (id) => () => {
    dispatch(removeColors(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
