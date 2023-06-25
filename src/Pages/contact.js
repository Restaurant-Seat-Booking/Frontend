import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Contact1 from "../Components/Contact"

function Contact(){
    return(
        <>
            <div style={{fontFamily: "'Faustina', serif"}}>
                <Header/>
                <Contact1/>
                <Footer/>
            </div>
        </>
    )
}

export default Contact;