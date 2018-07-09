'use strict'
import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import { ADD_COLORS, TOGGLE_COLORS, NEW_COLORS } from './actions'
import colors from './index'

it('should add colors item', () => {
  const firstColor = Math.random().toString(16).slice(2, 8)
  const secondColor = Math.random().toString(16).slice(2, 8)
  const newColor = Math.random().toString(16).slice(2, 8)
  const before = deepFreeze([
    { id: 0, color: firstColor, visibility: true },
    { id: 1, color: secondColor, visibility: true }
  ])
  const action = deepFreeze({
    type: ADD_COLORS,
    payload: { id: 2, color: newColor }
  })
  const after = deepFreeze([
    { id: 0, color: firstColor, visibility: true },
    { id: 1, color: secondColor, visibility: true },
    { id: 2, color: newColor, visibility: true }
  ])
  expect(colors(before, action)).to.be.deep.equal(after)
})
it('should add a new colors item', () => {
  const firstColor = Math.random().toString(16).slice(2, 8)
  const secondColor = Math.random().toString(16).slice(2, 8)
  const thirdColor = Math.random().toString(16).slice(2, 8)
  const newColor = Math.random().toString(16).slice(2, 8)
  const before = deepFreeze([
    { id: 0, color: firstColor, visibility: true },
    { id: 1, color: secondColor, visibility: true },
    { id: 2, color: thirdColor, visibility: true }
  ])
  const action = deepFreeze({
    type: ADD_COLORS,
    payload: { id: 3, color: newColor }
  })
  const after = deepFreeze([
    { id: 0, color: firstColor, visibility: true },
    { id: 1, color: secondColor, visibility: true },
    { id: 2, color: thirdColor, visibility: true },
    { id: 3, color: newColor, visibility: true }
  ])
  expect(colors(before, action)).to.be.deep.equal(after)
})
it('should toggle first color', () => {
  const before = deepFreeze([
    { id: 0, color: '#6a78d1', visibility: true },
    { id: 1, color: '#00bda5', visibility: true }
  ])
  const action = deepFreeze({
    type: TOGGLE_COLORS,
    payload: { id: 0 }
  })
  const after = deepFreeze([
    { id: 0, color: '#6a78d1', visibility: false },
    { id: 1, color: '#00bda5', visibility: true }
  ])
  expect(colors(before, action)).to.be.deep.equal(after)
})
it('should toggle second color', () => {
  const before = deepFreeze([
    { id: 0, color: '#6a78d1', visibility: false },
    { id: 1, color: '#00bda5', visibility: true }
  ])
  const action = deepFreeze({
    type: TOGGLE_COLORS,
    payload: { id: 1 }
  })
  const after = deepFreeze([
    { id: 0, color: '#6a78d1', visibility: false },
    { id: 1, color: '#00bda5', visibility: false }
  ])
  expect(colors(before, action)).to.be.deep.equal(after)
})
it('should new value first color', () => {
  const firstColor = Math.random().toString(16).slice(2, 8)
  const secondColor = Math.random().toString(16).slice(2, 8)
  const newColor = Math.random().toString(16).slice(2, 8)
  const before = deepFreeze([
    { id: 0, color: firstColor, visibility: true },
    { id: 1, color: secondColor, visibility: true }
  ])
  const action = deepFreeze({
    type: NEW_COLORS,
    payload: { id: 0, color: newColor }
  })
  const after = deepFreeze([
    { id: 0, color: newColor, visibility: true },
    { id: 1, color: secondColor, visibility: true }
  ])
  expect(colors(before, action)).to.be.deep.equal(after)
})
it('should new value second color', () => {
  const firstColor = Math.random().toString(16).slice(2, 8)
  const secondColor = Math.random().toString(16).slice(2, 8)
  const newColor = Math.random().toString(16).slice(2, 8)
  const before = deepFreeze([
    { id: 0, color: firstColor, visibility: true },
    { id: 1, color: secondColor, visibility: true }
  ])
  const action = deepFreeze({
    type: NEW_COLORS,
    payload: { id: 1, color: newColor }
  })
  const after = deepFreeze([
    { id: 0, color: firstColor, visibility: true },
    { id: 1, color: newColor, visibility: true }
  ])
  expect(colors(before, action)).to.be.deep.equal(after)
})
