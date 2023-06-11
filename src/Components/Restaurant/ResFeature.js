import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const ResFeature = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleMouseOver = () => {
    setIsZoomed(true);
  };

  const handleMouseOut = () => {
    setIsZoomed(false);
  };

  return (
    <div className="container">
      <Carousel interval={5000} autoplay={true}>
        <Carousel.Item>
          <div
            className={`d-block w-100 ${isZoomed ? 'zoomed' : ''}`}
            style={{
              height: '400px',
              borderRadius: '8px 8px 0px 0px',
              overflow: 'hidden',
            }}
          >
            <img
              src="./images/food1.jpg"
              alt="Image 1"
              style={{
                objectFit: 'cover',
                width: '100%',
                transform: isZoomed ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.3s',
              }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          </div>
          <Carousel.Caption>
            <h5>Slide 1</h5>
            <p>Some text describing slide 1</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className={`d-block w-100 ${isZoomed ? 'zoomed' : ''}`}
            style={{
              height: '400px',
              borderRadius: '8px 8px 0px 0px',
              overflow: 'hidden',
            }}
          >
            <img
              src="./images/food2.jpg"
              alt="Image 2"
              style={{
                objectFit: 'cover',
                width: '100%',
                transform: isZoomed ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.3s',
              }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          </div>
          <Carousel.Caption>
            <h5>Slide 2</h5>
            <p>Some text describing slide 2</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className={`d-block w-100 ${isZoomed ? 'zoomed' : ''}`}
            style={{
              height: '400px',
              borderRadius: '8px 8px 0px 0px',
              overflow: 'hidden',
            }}
          >
            <img
              src="./images/food3.jpg"
              alt="Image 3"
              style={{
                objectFit: 'cover',
                width: '100%',
                transform: isZoomed ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.3s',
              }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          </div>
          <Carousel.Caption>
            <h5>Slide 3</h5>
            <p>Some text describing slide 3</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ResFeature;
