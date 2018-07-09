'use strict'
import { ADD_COLORS, TOGGLE_COLORS, NEW_COLORS, REMOVE_COLORS } from './actions'
import createReducer from '../create-reducer'

const initialState = [
  { id: 0, color: '#6a78d1', visibility: true },
  { id: 1, color: '#00bda5', visibility: true }
]

const colors = createReducer(initialState, {
  [ADD_COLORS]: (state, action) => state.concat({
    id: action.payload.id,
    color: action.payload.color,
    visibility: true
  }),
  [TOGGLE_COLORS]: (state, action) => state.map((colors) => {
    if (colors.id !== action.payload.id) {
      return colors
    }
    return {
      ...colors,
      visibility: !colors.visibility
    }
  }),
  [NEW_COLORS]: (state, action) => state.map((colors) => {
    if (colors.id !== action.payload.id) {
      return colors
    }
    return {
      ...colors,
      color: action.payload.color
    }
  }),
  [REMOVE_COLORS]: (state, action) => state.filter(colors => colors.id !== action.payload.id)
})

export default colors
