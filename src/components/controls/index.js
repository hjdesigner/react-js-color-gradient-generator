'use strict'
import React from 'react'
import { connect } from 'react-redux'
import { addColors, removeColors } from 'reducers/colors/actions-creators.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const Controls = ({ colors, handleClickAdd, handleClickRemove }) => (
  <div className='form-controls'>
    <button type='button' onClick={handleClickAdd}>
      <FontAwesomeIcon icon={faPlus} />
    </button>
    {colors.length > 2 ? <button type='button' onClick={handleClickRemove(colors.slice(-1)[0].id)}><FontAwesomeIcon icon={faMinus} /></button> : false}
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

export default connect(mapStateToProps, mapDispatchToProps)(Controls)
