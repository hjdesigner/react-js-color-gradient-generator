'use strict'
import React from 'react'
import { connect } from 'react-redux'
import Controls from 'components/controls'
import FieldsList from 'components/fields-list'
import Github from 'components/github'
import './app.scss'

const App = ({ colors }) => (
  <div className='container' style={{ background: `linear-gradient(45deg, ${getVisibility(colors).map(item => item.color)}` }}>
    <main>
      <h1>Color Gradient Generator React.js + Redux</h1>
      <FieldsList />
      <Controls />
    </main>
    <Github />
  </div>
)

const getVisibility = (colors) => {
  return colors.filter(item => item.visibility === true)
}
const mapStateToProps = (state) => ({
  colors: state.colors
})

export default connect(mapStateToProps)(App)
