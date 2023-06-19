import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ResGoogleMap from './ResGooglemap'
const url = process.env.REACT_APP_URL;

const AboutPage = () => {
  const [aboutus, setaboutus] = useState([]);
  const [featu, setfeatu] = useState([]);
  const email = localStorage.getItem('userId'); // Retrieve user ID from localStorage
  const restaurant_id = localStorage.getItem('restaurant_id')

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`${url}/api/about/about`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ restaurant_id }), // Send userId in the request body
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
  }, [restaurant_id]);


  const restaurantFeatures = featu;
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
