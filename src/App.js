import React, { Component } from 'react'
import LoadingBar from 'react-top-loading-bar'
import Navbar from './componenets/Navbar'
import News from './componenets/News'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {

  state = {
    progress: 0,
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <>

        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress} />
          <Routes>
            <Route index exact path='/'  element={<News key="general" setProgress={this.setProgress} pagesize={6} category="general" />} />
            <Route exact path='sports'  element={<News key="sports" setProgress={this.setProgress} pagesize={6} category="sports" />} />
            <Route exact path='technology'  element={<News key="technology" setProgress={this.setProgress} pagesize={6} category="technology" />} />
            <Route exact path='business'  element={<News key="business" setProgress={this.setProgress} pagesize={6} category="business" />} />
            <Route exact path='health'  element={<News key="health" setProgress={this.setProgress} pagesize={6} category="health" />} />
            <Route exact path='entertainment'  element={<News key="entertainment" setProgress={this.setProgress} pagesize={6} category="entertainment" />} />
          </Routes>
        </BrowserRouter>

      </>
    )
  }
}

