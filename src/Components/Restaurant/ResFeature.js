import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
const urll = process.env.REACT_APP_URL;

const ResFeature = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const restaurant_id = localStorage.getItem('restaurant_id');
  const [images, setimages] = useState([]);
  const [ima1, setima1] = useState([]);
  const [ima2, setima2] = useState([]);
  const [ima3, setima3] = useState([]);

  useEffect(() => {
    // console.log(email)
    const fetchOrders = async () => {
      try {
        const response = await fetch(`${urll}/api/about/about`, {
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

        if (tempdata.image != null) {
          const parsedImages = await JSON.parse(tempdata.image);
           setimages(parsedImages);
        }
        

      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, [restaurant_id]);

  const handleMouseOver = () => {
    setIsZoomed(true);
  };

  const handleMouseOut = () => {
    setIsZoomed(false);
  };
  useEffect(() => {
    if (images.length > 0) {
      setima1(images[0].url);
      setima2(images[1].url);
      setima3(images[2].url);
    }
  }, [images]);

  return (
    <div className="container" style={{paddingLeft : "0px !important"}}>
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
              src={ima1}
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
              src={ima2}
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
              src={ima3}
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
