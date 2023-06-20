import React from "react";
import { Row, Col, Card } from 'react-bootstrap';

import Header from "../Components/Header";
import MyResFeature from "../Components/MyRestaurant/MyResFeature";
import MyResDetails from "../Components/MyRestaurant/MyResDetail";
import Footer from "../Components/Footer";
import MyResTabbed from "../Components/MyRestaurant/MyResTabbed";
import MyResAddRestaurant from "../Components/MyRestaurant/MyResAddRestaurant"

function MyRestaurant(){
    return(
        <>
            
            <div style={{ backgroundColor : "#eee" , minHeight : "100vh", marginBottom : "20px"}}>
                <Header/>
                
                <div className="container mt-5">
                    <MyResAddRestaurant/>
                    {/* <Row>
                        <Col xs={12} md={12} style={{ borderRadius: '10px', paddingRight: '0' }}>
                            <MyResFeature/>
                            <div style={{ padding : '0px 12px'}}>
                                <div style={{ backgroundColor : "#fff" , padding :"10px"}} >
                                    <MyResDetails/>  
                                    <hr/> 
                                    <MyResTabbed/>
                                </div>   
                            </div>
                        </Col>
                    </Row> */}
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default MyRestaurant;
