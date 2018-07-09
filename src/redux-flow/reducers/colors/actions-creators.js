'use strict'
import { ADD_COLORS, REMOVE_COLORS, TOGGLE_COLORS, NEW_COLORS } from './actions'
import { v4 } from 'uuid'

export const addColors = () => ({
  type: ADD_COLORS,
  payload: {
    id: v4(),
    color: `#${Math.random().toString(16).slice(2, 8)}`
  }
})

export const toggleColors = (id) => ({
  type: TOGGLE_COLORS,
  payload: { id }
})

export const removeColors = (id) => ({
  type: REMOVE_COLORS,
  payload: { id }
})

export const newColors = (id, color) => ({
  type: NEW_COLORS,
  payload: { id, color }
})
