import React from 'react';
import ResMenu from './ResMenu';
import ResAbout from "./ResAbout"
import ResPhoto from "./ResPhoto"
import ResReview from "./ResReview"
import { Tab, Nav } from 'react-bootstrap';

const ResTabbed = () => {
  const renderTabContent = (activeTab) => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="tab-pane active">
            <ResAbout/>
          </div>
        );
      case 'menu':
        return (
          <div className="tab-pane active">
            <ResMenu />
          </div>
        );
      case 'photo':
        return (
          <div className="tab-pane active">
            <ResPhoto/>
          </div>
        );
      case 'review':
        return (
          <div className="tab-pane active">
            <ResReview/>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Tab.Container defaultActiveKey="about">
      <div style={{paddingLeft : "15px"}}>
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link eventKey="about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="menu">Menu</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="photo">Photo</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="review">Review</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="about">{renderTabContent('about')}</Tab.Pane>
          <Tab.Pane eventKey="menu">{renderTabContent('menu')}</Tab.Pane>
          <Tab.Pane eventKey="photo">{renderTabContent('photo')}</Tab.Pane>
          <Tab.Pane eventKey="review">{renderTabContent('review')}</Tab.Pane>
        </Tab.Content>
      </div>
    </Tab.Container>
  );
};

export default ResTabbed;
