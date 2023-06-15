import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useSelectedItems } from './SelectedItemsContext';

const ResOrderSummary = () => {
  const { selectedItems } = useSelectedItems();

  const calculateTotalCost = () => {
    let totalCost = 0;
    selectedItems.forEach((item) => {
      totalCost += item.price;
    });
    return totalCost;
  };

  return (
    <>
      <Card>
        <Card.Header>Order Summary</Card.Header>
        <Card.Body>
          {selectedItems.length === 0 ? (
            <div>No items selected</div>
          ) : (
            <>
              <ul className="order-summary-list">
                {selectedItems.map((item, index) => (
                  <li key={index} className="order-summary-item">
                    <div>{item.name}</div>
                    <div className="item-price">${item.price}</div>
                  </li>
                ))}
              </ul>
              <div className="total-cost">Total: ${calculateTotalCost()}</div>
              <Button variant="primary" className="proceed-button">Proceed to Buy</Button>
            </>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default ResOrderSummary;
