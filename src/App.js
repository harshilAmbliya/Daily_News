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
            <Route index exact path='/' key="general" element={<News setProgress={this.setProgress} pagesize={6} category="general" />} />
            <Route exact path='sports' key="sports" element={<News setProgress={this.setProgress} pagesize={6} category="sports" />} />
            <Route exact path='technology' key="technology" element={<News setProgress={this.setProgress} pagesize={6} category="technology" />} />
            <Route exact path='business' key="business" element={<News setProgress={this.setProgress} pagesize={6} category="business" />} />
            <Route exact path='health' key="health" element={<News setProgress={this.setProgress} pagesize={6} category="health" />} />
            <Route exact path='entertainment' key="entertainment" element={<News setProgress={this.setProgress} pagesize={6} category="entertainment" />} />
          </Routes>
        </BrowserRouter>

      </>
    )
  }
}

