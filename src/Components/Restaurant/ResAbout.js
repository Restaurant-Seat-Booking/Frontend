import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ResGoogleMap from './ResGooglemap'

const AboutPage = () => {
  const [aboutus, setaboutus] = useState([]);
  const [featu, setfeatu] = useState([]);
  const email = localStorage.getItem('userId'); // Retrieve user ID from localStorage

  useEffect(() => {
    // console.log(email)
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:7000/api/about/about', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }), // Send userId in the request body
        });
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        const tempdata = data.data
        setaboutus(tempdata.about_us);
        setfeatu(JSON.parse(tempdata.features))
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, [email]);


  const restaurantFeatures = featu;
  // [
  //   {
  //     icon: 'fa fa-motorcycle fa-4x',
  //     title: 'Home Delivery',
  //     description: 'Enjoy the convenience of home delivery service.',
  //   },
  //   {
  //     icon: 'fa fa-smoking fa-4x',
  //     title: 'Smoking Area',
  //     description: 'Designated smoking area available for smokers.',
  //   },
  //   {
  //     icon: 'fa fa-snowflake fa-4x',
  //     title: 'Air Condition',
  //     description: 'Relax and dine in a comfortable air-conditioned environment.',
  //   },
  //   {
  //     icon: 'fa fa-shopping-bag fa-4x',
  //     title: 'Take-away',
  //     description: 'Order your favorite dishes for take-away.',
  //   },
  //   {
  //     icon: 'fa fa-music fa-4x',
  //     title: 'Live Music',
  //     description: 'Enjoy live music performances while dining.',
  //   },
  //   {
  //     icon: 'fa fa-tv fa-4x',
  //     title: 'Live Sports Screening',
  //     description: 'Catch live sports action on big screens.',
  //   },
  // ];

  return (
    <div>
      <section className="about-section py-5">
        <Container>
          <Row>
            <Col>
              <h2>About Us</h2>
              <p>
                {aboutus}
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <ResGoogleMap/>
      <section className="features-section py-5">
        <Container>
          <Row>
            <Col>
              <h2>Restaurant Features</h2>
            </Col>
          </Row>
          <Row>
            {restaurantFeatures.map((feature, index) => (
              <Col md={4} key={index}>
                <div className="feature">
                  {/* <i className={feature.icon}></i> */}
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutPage;
