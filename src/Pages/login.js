import React from "react";
import LoginCmp from "../Components/Login"
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Login(){
    return(
        <> 
            <Header/> 
            <LoginCmp/>
            <Footer/>
        </>
    )
}

export default Login