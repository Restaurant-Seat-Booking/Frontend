import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { url } from '../../constants';

const MyReviewsPage = () => {
  const [reviews, setreviews] = useState([]);
  const restaurantid = localStorage.getItem('restaurant_id'); // Retrieve user ID from localStorage
  const email = localStorage.getItem('userId');

  useEffect(() => {
    // console.log(email)
    const fetchOrders = async () => {
      try {
        const response = await fetch(`${url}/api/review/review`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email,restaurantid }), // Send userId in the request body
        });
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const data = await response.json();
        const tempdata = data.data
        setreviews(JSON.parse(tempdata.review));
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, [email]);

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

export default MyReviewsPage;
