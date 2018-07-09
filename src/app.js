'use strict'
import React from 'react'
import { connect } from 'react-redux'
import { addColors, toggleColors, removeColors, newColors } from 'reducers/colors/actions-creators.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEye, faMinus, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import './app.scss'

const App = ({ colors, handleClickAdd, handleClickRemove, handleClickEye, handleValue }) => (
  <div className='container' style={{ background: `linear-gradient(45deg, ${getVisibility(colors).map(item => item.color)}` }}>
    <main>
      <h1>Color Gradient Generator</h1>
      {colors.map((item) => (
        <div className='form-fields' key={item.id}>
          <input type='text' maxLength='7' defaultValue={item.color} onChange={handleValue(item.id)} />
          <button type='button' className={item.visibility === true ? 'true' : 'false'} onClick={handleClickEye(item.id)}>
            <FontAwesomeIcon className='eye' icon={faEye} />
            <FontAwesomeIcon className='eye-slash' icon={faEyeSlash} />
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

const getVisibility = (colors) => {
  return colors.filter(item => item.visibility === true)
}
const mapStateToProps = (state) => ({
  colors: state.colors
})

const mapDispatchToProps = (dispatch) => ({
  handleClickAdd: () => {
    dispatch(addColors())
  },
  handleClickRemove: (id) => () => {
    dispatch(removeColors(id))
  },
  handleClickEye: (id) => () => {
    dispatch(toggleColors(id))
  },
  handleValue: (id) => (e) => {
    dispatch(newColors(id, e.target.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
