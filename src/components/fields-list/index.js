'use strict'
import React from 'react'
import { connect } from 'react-redux'
import { toggleColors, newColors } from 'reducers/colors/actions-creators.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const FieldsList = ({ colors, handleValue, handleClickEye }) => (
  <div className='fields'>
    {colors.map((item) => (
      <div className='form-fields' key={item.id}>
        <input type='text' style={{ color: item.color }} maxLength='7' defaultValue={item.color} onChange={handleValue(item.id)} />
        <button type='button' className={item.visibility === true ? 'true' : 'false'} onClick={handleClickEye(item.id)}>
          <FontAwesomeIcon className='eye' icon={faEye} />
          <FontAwesomeIcon className='eye-slash' icon={faEyeSlash} />
        </button>
      </div>
      ))}
  </div>
)

const mapStateToProps = (state) => ({
  colors: state.colors
})

const mapDispatchToProps = (dispatch) => ({
  handleClickEye: (id) => () => {
    dispatch(toggleColors(id))
  },
  handleValue: (id) => (e) => {
    dispatch(newColors(id, e.target.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FieldsList)
