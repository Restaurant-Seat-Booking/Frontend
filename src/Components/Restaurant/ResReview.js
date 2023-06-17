import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const [count, setCount] = useState(0);
  const restaurantid = localStorage.getItem('restaurant_id');
  const email = localStorage.getItem('userId');

  useEffect(() => {
    console.log("okkkkkkk")
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:7000/api/review/review', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, restaurantid }),
        });
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const data = await response.json();
        const tempdata = data.data;
        const cnt = data.count;
        setCount(cnt);
        setReviews(JSON.parse(tempdata.review));
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviews();
  }, [email]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleReviewChange = (e) => {
    setReviewText(e.target.value);
  };

  const saveReview = async () => {
    try {
      closeModal();
      console.log(reviewText)
      // const response = await fetch('http://localhost:7000/api/review/save', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ review: reviewText }),
      // });

      // if (!response.ok) {
      //   throw new Error('Failed to save review');
      // }

      // const newReview = {
      //   author: 'User',
      //   review: reviewText,
      // };

      // setReviews([...reviews, newReview]);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="reviews-section py-5">
      <Container>
        <section className="addreview ">
        <Button className='text-center' variant="primary" onClick={openModal} style={{ display: count > 0 ? 'block' : 'none' }}>
            Add Review
        </Button>

          <Modal show={showModal} onHide={closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Add Review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <textarea
                className="review-input"
                placeholder="Enter your review"
                value={reviewText}
                onChange={handleReviewChange}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="success" onClick={saveReview}>
                Save
              </Button>
              <Button variant="danger" onClick={closeModal}>
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        </section>
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
