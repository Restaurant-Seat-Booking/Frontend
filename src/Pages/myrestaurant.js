import React, { useEffect,useState } from "react";
import { Row, Col, Card } from 'react-bootstrap';

import Header from "../Components/Header";
import MyResFeature from "../Components/MyRestaurant/MyResFeature";
import MyResDetails from "../Components/MyRestaurant/MyResDetail";
import Footer from "../Components/Footer";
import MyResTabbed from "../Components/MyRestaurant/MyResTabbed";
import MyResAddRestaurant from "../Components/MyRestaurant/MyResAddRestaurant"
const url = process.env.REACT_APP_URL;

function MyRestaurant(){
    const myrestaurant_id = localStorage.getItem('myrestaurant_id')
    const [isAdded, setIsAdded] = useState(false);


    // useEffect(()=>{

    // })
    useEffect(() => {
      const fetchOrders = async () => {
          try {
            const response = await fetch(`${url}/api/addRes/isAdded`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ myrestaurant_id }), // Send userId in the request body
            });
            const data = await response.json();
            console.log(data.isAdded)
            setIsAdded(data.isAdded);
          } catch (error) {
            console.error(error);
          }
          
        };
    
        fetchOrders();
      }, [myrestaurant_id]);

    return(
        <>
            
            <div style={{ backgroundColor : "#eee" , minHeight : "100vh", marginBottom : "20px"}}>
                <Header/>
                
                <div className="container mt-5">
                {isAdded ? (
                  <section className="showRes">
                    <Row>
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
                        </Row>
                  </section>
                ) : (
                  <section className="addRes">
                    <MyResAddRestaurant/>
                  </section>
                )}

                    {/* <section className="addRes">
                        <MyResAddRestaurant/>
                    </section>
                    <section className="showRes">
                        <Row>
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
                        </Row>
                    </section> */}
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default MyRestaurant;
