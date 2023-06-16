import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MyResAboutPage = () => {

  // const [aboutus, setaboutus] = useState([]);
  // const [featu, setfeatu] = useState([]);
  const email = localStorage.getItem('userId'); // Retrieve user ID from localStorage
  const [aboutText, setAboutText] = useState([]);
  const [isAboutEditing, setIsAboutEditing] = useState(false);
  const [restaurantFeatures, setRestaurantFeatures] = useState([
    // {
    //   icon: 'fa fa-motorcycle fa-4x',
    //   title: 'Home Delivery',
    //   description: 'Enjoy the convenience of home delivery service.',
    // },
    // {
    //   icon: 'fa fa-smoking fa-4x',
    //   title: 'Smoking Area',
    //   description: 'Designated smoking area available for smokers.',
    // },
    // {
    //   icon: 'fa fa-snowflake fa-4x',
    //   title: 'Air Condition',
    //   description: 'Relax and dine in a comfortable air-conditioned environment.',
    // },
    // {
    //   icon: 'fa fa-shopping-bag fa-4x',
    //   title: 'Take-away',
    //   description: 'Order your favorite dishes for take-away.',
    // },
    // {
    //   icon: 'fa fa-music fa-4x',
    //   title: 'Live Music',
    //   description: 'Enjoy live music performances while dining.',
    // },
    // {
    //   icon: 'fa fa-tv fa-4x',
    //   title: 'Live Sports Screening',
    //   description: 'Catch live sports action on big screens.',
    // },
  ]);

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
        setAboutText(tempdata.about_us);
        setRestaurantFeatures(JSON.parse(tempdata.features))
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, [email]);


  
  const [isFeaturesEditing, setIsFeaturesEditing] = useState(false);
  const [newFeatureTitle, setNewFeatureTitle] = useState('');
  const [newFeatureDescription, setNewFeatureDescription] = useState('');

  const handleAboutEdit = () => {
    setIsAboutEditing(true);
  };

  const handleAboutSave = async () => {
    setIsAboutEditing(false);
    try {
      const aboutJson = JSON.stringify(aboutText); // Convert aboutText to JSON string
      const response = await fetch('http://localhost:7000/api/about/aboutupdate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: aboutJson, // Use the JSON string as the request body
      });
  
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

  const handleFeatureSave = () => {
    setIsFeaturesEditing(false);
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
                  />
                ) : (
                  <p>{aboutText}</p>
                )}
                {isAboutEditing ? (
                  <button onClick={handleAboutSave}>Save</button>
                ) : (
                  <button onClick={handleAboutEdit}>Edit</button>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="features-section py-5">
        <Container>
          <Row>
            <Col>
              <div className="features-content">
                <h2>Restaurant Features</h2>
                {isFeaturesEditing ? (
                  <div>
                    {restaurantFeatures.map((feature, index) => (
                      <div key={index}>
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
                    <button onClick={handleFeatureSave}>Save</button>
                  </div>
                ) : (
                  <div className="features-grid">
                    {restaurantFeatures.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                      </div>
                    ))}
                    <button onClick={handleFeaturesEdit}>Edit</button>
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
                    <button onClick={handleFeatureUpload}>Upload</button>
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
