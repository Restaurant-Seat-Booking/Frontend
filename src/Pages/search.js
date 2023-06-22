import React from "react";
import Header from "../Components/Header";
import Searchcmp from "../Components/Search/Search";
import Footer from "../Components/Footer";

function Search(){
    return(
        <>
        <div style={{fontFamily: "'Faustina', serif"}}>
            <Header/>
            <Searchcmp/>
            <Footer/>
        </div>
        </>
    )
}

export default Search