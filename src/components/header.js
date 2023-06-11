import React from 'react'
import Bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary ">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src='https://source.unsplash.com/1600*900/?nature' width="30" height="24" class="d-inline-block align-text-top"></img>
                    Resto</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                    <ul class="navbar-nav  me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
                {/* <div  >
                    <button type="button" class="btn btn-outline-success ml-auto">Log In</button>
                    <button type="button" class="btn btn-danger ml-2">Sign Up</button>
                </div> */}
            </div>
        </nav>
    )
}