import React from 'react'

import './App.css'

import Main from './components/Main/index'
import Nav from './components/Nav/index'
import Header from './components/Header/index'

export default (props) => {
  return (
    <div className="app">
      <Nav />
      <Header />
      <Main />
    </div>
  )
}