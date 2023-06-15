import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Header from '../Components/Header';
import ResFeature from '../Components/Restaurant/ResFeature';
import ResDetails from '../Components/Restaurant/ResDetail';
import Footer from '../Components/Footer';
import ResTabbed from '../Components/Restaurant/ResTabbed';
import ResOrderSummary from '../Components/Restaurant/ResOrderSummary';
import { SelectedItemsProvider } from '../Components/Restaurant/SelectedItemsContext';

function Restaurant() {
  return (
    <SelectedItemsProvider>
      <div style={{ backgroundColor: '#eee', minHeight: '100vh', marginBottom: '20px' }}>
        <Header />
        <div className="container" style={{ marginTop: '60px' }}>
          <Row>
            <Col xs={12} md={8}>
              <ResFeature />
              <ResDetails />
              <ResTabbed />
            </Col>
            <Col xs={12} md={4}>
              <ResOrderSummary />
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    </SelectedItemsProvider>
  );
}

export default Restaurant;
