import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ReviewsPage = () => {
  const reviews = [
    {
      author: 'John Doe',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac turpis non dolor dignissim accumsan. Nulla facilisi. Sed euismod justo vel aliquet finibus.',
    },
    {
      author: 'Jane Smith',
      review: 'Suspendisse potenti. In iaculis nulla in metus commodo, sit amet congue leo blandit. Sed a felis gravida, mattis nisi eget, venenatis erat.',
    },
    {
      author: 'David Johnson',
      review: 'Curabitur ac ligula nec lorem efficitur vulputate. Integer vitae ultrices mauris. Aliquam sodales ipsum ut malesuada pellentesque.',
    },
  ];

  return (
    <section className="reviews-section py-5">
      <Container>
        <h2 className="text-center mb-5">Customer Reviews</h2>
        <Row>
          {reviews.map((review, index) => (
            <Col md={4} key={index}>
              <div className="review-card">
                <h4 className="review-author">{review.author}</h4>
                <p className="review-text">{review.review}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ReviewsPage;
