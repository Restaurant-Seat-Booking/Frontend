import React from "react";
import SignupPage from "../Components/SignUp";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Signup(){
    return(
        <>
            <div style={{fontFamily: "'Faustina', serif"}}>
            <Header/>
            <SignupPage/>
            <Footer/>
            </div>
        </>
    )
}

export default Signup