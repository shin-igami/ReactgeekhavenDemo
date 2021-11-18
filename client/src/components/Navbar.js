import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">GeekHaven</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item mx-3">
                            <Link class="nav-link " aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item mx-3">
                            <Link class="nav-link" to="/Teams">Teams</Link>
                        </li>
                        <li class="nav-item mx-3">
                            <Link class="nav-link" to="/Projects">Projects</Link>
                        </li>
                        <li class="nav-item mx-3">
                            <Link class="nav-link" to="/Blogs">Blogs</Link>
                        </li>
                        <li class="nav-item mx-3">
                            <Link class="nav-link" to="/Contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
