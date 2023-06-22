import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import HomeP from '../Components/Home'

function Home(){
    return(
        <>
        <div style={{fontFamily: "'Faustina', serif"}}>
            <Header/>
            <HomeP/>
            <Footer/>
        </div>
        </>
    )
}

export default Home