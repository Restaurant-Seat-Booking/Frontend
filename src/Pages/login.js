import React from "react";
import LoginCmp from "../Components/Login"
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Login(){
    return(
        <> 
        <div style={{fontFamily: "'Faustina', serif"}}>
            <Header/> 
            <LoginCmp/>
            <Footer/>
        </div>
        </>
    )
}



export default Login