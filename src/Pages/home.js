import React from "react";
import Restaurant from "../Components/Restaurant"
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Home(){
    return(
        <>
            <Header/>
            <Restaurant />
            <Footer/>
        </>
    )
}

export default Home