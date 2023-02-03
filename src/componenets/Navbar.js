import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Daily - News</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                   <Link className={`nav-link  `}aria-current="page" to="/">General</Link>
                                </li>
                                <li className="nav-item">
                                   <Link className="nav-link" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                   <Link className="nav-link" to="/technology">Technology</Link>
                                </li>
                                <li className="nav-item">
                                   <Link className="nav-link" to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                   <Link className="nav-link" to="/health">Health</Link>
                                </li>
                               
                              
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-primary" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
