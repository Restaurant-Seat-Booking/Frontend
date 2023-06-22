import React, { useEffect, useState } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import MyResGoogleMap from "./MyResGooglemap"
// import { url } from '../../constants';
const url = process.env.REACT_APP_URL;

const MyResAboutPage = () => {

  // const [aboutus, setaboutus] = useState([]);
  // const [featu, setfeatu] = useState([]);
  const email = localStorage.getItem('userId'); // Retrieve user ID from localStorage
  const [aboutText, setAboutText] = useState([]);
  const [isAboutEditing, setIsAboutEditing] = useState(false);
  const [restaurantFeatures, setRestaurantFeatures] = useState([
  ]);
  const restaurant_id = localStorage.getItem('myrestaurant_id');

  useEffect(() => {
    // console.log(email)
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
        setAboutText(tempdata.about_us);
        if(tempdata.features!=null) setRestaurantFeatures(JSON.parse(tempdata.features))
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, [restaurant_id]);


  
  const [isFeaturesEditing, setIsFeaturesEditing] = useState(false);
  const [newFeatureTitle, setNewFeatureTitle] = useState('');
  const [newFeatureDescription, setNewFeatureDescription] = useState('');

  const handleAboutEdit = () => {
    setIsAboutEditing(true);
  };

  const handleAboutSave = async () => {
    setIsAboutEditing(false);
    try {
      // const aboutJson = JSON.stringify(aboutText); // Convert aboutText to JSON string
      const response = await fetch(`${url}/api/about/aboutupdate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          abouttext: aboutText,
          restaurant_id
        }), // Use the JSON string as the request body
      });
      console.log(aboutText)
  
      if (!response.ok) {
        throw new Error('Failed to update profile');
      }
  
      // Handle the successful update
      // setShowModal(false);
    } catch (error) {
      console.error(error);
      // Handle the error
    }
  };
  
  

  const handleFeaturesEdit = () => {
    setIsFeaturesEditing(true);
  };

  const handleFeatureSave  = async () => {
    setIsFeaturesEditing(false);
    try {
      // const aboutJson = JSON.stringify(aboutText); // Convert aboutText to JSON string
      const response = await fetch(`${url}/api/about/featureupdate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          featur: restaurantFeatures,
          restaurant_id
        }), // Use the JSON string as the request body
      });
      // console.log(restaurantFeatures)
  
      if (!response.ok) {
        throw new Error('Failed to update profile');
      }
  
      // Handle the successful update
      // setShowModal(false);
    } catch (error) {
      console.error(error);
      // Handle the error
    }
    // Perform save logic for restaurantFeatures
  };

  const handleFeatureUpload = () => {
    const newFeature = {
      title: newFeatureTitle,
      description: newFeatureDescription,
    };
    setRestaurantFeatures((prevFeatures) => [...prevFeatures, newFeature]);
    setNewFeatureTitle('');
    setNewFeatureDescription('');
  };

  return (
    <div>
      <section className="about-section py-5">
      <Container>
        <Row>
          <Col>
            <div className="about-content">
              <h2>About Us</h2>
              {isAboutEditing ? (
                <textarea
                  value={aboutText}
                  onChange={(e) => setAboutText(e.target.value)}
                  className="form-control"
                  rows="5"
                />
              ) : (
                <p>{aboutText}</p>
              )}
              {isAboutEditing ? (
                <Button variant="primary" onClick={handleAboutSave}>
                  Save
                </Button>
              ) : (
                <Button variant="primary" onClick={handleAboutEdit}>
                  Edit About
                </Button>
              )}
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={isAboutEditing} onHide={() => setIsAboutEditing(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit About</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            value={aboutText}
            onChange={(e) => setAboutText(e.target.value)}
            className="form-control"
            rows="5"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsAboutEditing(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAboutSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
      <MyResGoogleMap/>
      <section className="features-section py-5">
  <Container>
    <Row>
      <Col>
        <div className="features-content">
          <h2 style={{ fontSize: '28px', color: '#333', marginBottom: '20px' }}>Restaurant Features</h2>
          {isFeaturesEditing ? (
            <div>
              {restaurantFeatures.map((feature, index) => (
                <div key={index} className="feature-box">
                  <input
                    type="text"
                    value={feature.title}
                    onChange={(e) =>
                      setRestaurantFeatures((prevFeatures) => {
                        const updatedFeatures = [...prevFeatures];
                        updatedFeatures[index].title = e.target.value;
                        return updatedFeatures;
                      })
                    }
                  />
                  <input
                    type="text"
                    value={feature.description}
                    onChange={(e) =>
                      setRestaurantFeatures((prevFeatures) => {
                        const updatedFeatures = [...prevFeatures];
                        updatedFeatures[index].description = e.target.value;
                        return updatedFeatures;
                      })
                    }
                  />
                </div>
              ))}
              <button style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' }} onClick={handleFeatureSave}>Save</button>
            </div>
          ) : (
            <div >
              <div className="features-grid">
              {restaurantFeatures != null && restaurantFeatures.map((feature, index) => (
                <div key={index} className="feature-item">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
              </div>
              <button style={{width:"100%", backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' }} onClick={handleFeaturesEdit}>Edit Reastaurant Feature</button>
            </div>
          )}
          {isFeaturesEditing && (
            <div>
              <input
                type="text"
                placeholder="Feature Title"
                value={newFeatureTitle}
                onChange={(e) => setNewFeatureTitle(e.target.value)}
              />
              <input
                type="text"
                placeholder="Feature Description"
                value={newFeatureDescription}
                onChange={(e) => setNewFeatureDescription(e.target.value)}
              />
              <button style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' }} onClick={handleFeatureUpload}>Upload</button>
            </div>
          )}
        </div>
      </Col>
    </Row>
  </Container>
</section>

    </div>
  );
};

export default MyResAboutPage;
