import React, { Component } from 'react'
import Navbar from './componenets/Navbar'
import News from './componenets/News'


export default class App extends Component {

  render() {
    return (
      <>
        <Navbar />
        <News pagesize={6}/>
      </>
    )
  }
}

