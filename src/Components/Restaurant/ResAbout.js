import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutPage = () => {
  const restaurantFeatures = [
    {
      icon: 'fa fa-motorcycle fa-4x',
      title: 'Home Delivery',
      description: 'Enjoy the convenience of home delivery service.',
    },
    {
      icon: 'fa fa-smoking fa-4x',
      title: 'Smoking Area',
      description: 'Designated smoking area available for smokers.',
    },
    {
      icon: 'fa fa-snowflake fa-4x',
      title: 'Air Condition',
      description: 'Relax and dine in a comfortable air-conditioned environment.',
    },
    {
      icon: 'fa fa-shopping-bag fa-4x',
      title: 'Take-away',
      description: 'Order your favorite dishes for take-away.',
    },
    {
      icon: 'fa fa-music fa-4x',
      title: 'Live Music',
      description: 'Enjoy live music performances while dining.',
    },
    {
      icon: 'fa fa-tv fa-4x',
      title: 'Live Sports Screening',
      description: 'Catch live sports action on big screens.',
    },
  ];

  return (
    <div>
      <section className="about-section py-5">
        <Container>
          <Row>
            <Col>
              <h2>About Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor justo a erat tempus, ut scelerisque neque posuere.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

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
                  <i className={feature.icon}></i>
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
