import React, { Component } from 'react'
import Book from './Book.gif'
export default class Spinnerbook extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Book} alt="book" />
      </div>
    )
  }
}
