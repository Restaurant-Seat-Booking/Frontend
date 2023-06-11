import React from "react";
import { Row, Col, Card } from 'react-bootstrap';

import Header from "../Components/Header";
import MyResFeature from "../Components/MyResFeature";
import MyResDetails from "../Components/MyResDetail";
import Footer from "../Components/Footer";
import MyResTabbed from "../Components/MyResTabbed";

function MyRestaurant(){
    return(
        <>
            <div style={{ backgroundColor : "#eee" , minHeight : "100vh"}}>
                <Header/>
                <div className="container mt-5">
                    <Row>
                        <Col xs={12} md={8} style={{ borderRadius: '10px', paddingRight: '0' }}>
                            <MyResFeature/>
                            <div style={{ padding : '0px 12px'}}>
                                <div style={{ backgroundColor : "#fff" , padding :"10px"}} >
                                    <MyResDetails/>  
                                    <hr/> 
                                    <MyResTabbed/>
                                </div>   
                            </div>
                        </Col>
                        <Col xs={12} md={4} style={{ paddingLeft: '0' }}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Card 2</Card.Title>
                                    <Card.Text>This card occupies 4 parts of the grid.</Card.Text>
                                    <p>rgi ig reoghreughroig hrehg reghod hoi chriuhurehgiurh girehgiureh guihrgiu rehgiuh egih eriguh rhhrg irehgurhg rehgiurh gehgurehgiure uhg iurehgiurh grehg qpuihgiuq hiue giur hgiuh giuehgiur gre rg hrgh re hcreghreuhg9hg ihfuehgirehgie hgeurhgpoqhu ghgruehg rgr  reh rehg rghre hrehggrehgehgrehg reurhurehg re gerqupghreug hregh reo19 fhehgruhger hreih regqp gi urehreh iuerhe hgih h rg hruigh d heiuughrpiguhreirhfe hre re rehg</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default MyRestaurant;
