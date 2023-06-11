import React from 'react'
import Bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary ">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src='' width="30" height="24" class="d-inline-block align-text-top"></img>
                    Resto</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                    <ul class="navbar-nav  ms-auto">
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
                <div class="mx-2" >
                    <button type="button" class="btn btn-outline-success ml-auto ">Log In</button>
                    
                    <button type="button" class="btn btn-danger ml-2">Sign Up</button>
                </div>
            </div>
        </nav>
        
        // <!-- Login Modal -->
        // <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        //   <div class="modal-dialog">
        //     <div class="modal-content">
        //       <div class="modal-header">
        //         <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        //         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        //       </div>
        //       <div class="modal-body">
        //       <p>Modal body text goes here.</p>
        //       </div>
        //       <div class="modal-footer">
        //         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        //         <button type="button" class="btn btn-primary">Save changes</button>
        //       </div>
        //     </div>
        //   </div>
        // </div>
    )
}