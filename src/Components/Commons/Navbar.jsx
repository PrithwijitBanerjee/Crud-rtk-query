import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <a className="navbar-brand text-white" href="#!">CRUD-APP-RTK-QUERY</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link text-white" to='/'>Students</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to='/addStudent'>Add</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Navbar