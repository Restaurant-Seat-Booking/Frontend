import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useSelectedItems } from './SelectedItemsContext';

const ResOrderSummary = () => {

  const [seats1, setseats1] = useState([]);
  const { selectedItems } = useSelectedItems();
  const [selectedTime, setSelectedTime] = useState(null);
  const [totalSeats, setTotalSeats] = useState([]);
  const email = localStorage.getItem('userId'); // Retrieve user ID from localStorage

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
        setTotalSeats(JSON.parse(tempdata.available_seats)[0])
        console.log(seats1)
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, [email]);

  

  const calculateTotalCost = () => {
    let totalCost = 0;
    selectedItems.forEach((item) => {
      totalCost += item.price;
    });
    return totalCost;
  };

  const handleButtonClick = (time) => {
    setSelectedTime(time);
  };

  const totalSeatCount = totalSeats[selectedTime] || 0;

  return (
    <>
      <Card>
        <Card.Header>Order Summary</Card.Header>
        <Card.Body>
          <div className="selected-time">Selected Time: {selectedTime}</div>
          <div className="seat-info">Total Seats: {totalSeatCount}</div>
          <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
            <div style={{ display: 'flex' }}>
              <div style={{ marginRight: '10px' }}>
                <Button
                  onClick={() => handleButtonClick('10:00 AM')}
                  className={`time-button ${selectedTime === '10:00 AM' ? 'selected' : ''}`}
                  style={{
                    marginRight: '10px',
                    backgroundColor: selectedTime === '10:00 AM' ? 'green' : '',
                    color: selectedTime === '10:00 AM' ? 'white' : ''
                  }}
                >
                   10:00 AM
                </Button>
              </div>
              <div style={{ marginRight: '10px' }}>
                <Button
                  onClick={() => handleButtonClick('12:00 PM')}
                  className={`time-button ${selectedTime === '12:00 PM' ? 'selected' : ''}`}
                  style={{
                    marginRight: '10px',
                    backgroundColor: selectedTime === '12:00 PM' ? 'green' : '',
                    color: selectedTime === '12:00 PM' ? 'white' : ''
                  }}
                >
                   12:00 PM
                </Button>
              </div>
              <div style={{ marginRight: '10px' }}>
                <Button
                  onClick={() => handleButtonClick('2:00 PM')}
                  className={`time-button ${selectedTime === '2:00 PM' ? 'selected' : ''}`}
                  style={{
                    marginRight: '10px',
                    backgroundColor: selectedTime === '2:00 PM' ? 'green' : '',
                    color: selectedTime === '2:00 PM' ? 'white' : ''
                  }}
                >
                   2:00 PM
                </Button>
              </div>
              <div style={{ marginRight: '10px' }}>
                <Button
                  onClick={() => handleButtonClick('4:00 PM')}
                  className={`time-button ${selectedTime === '4:00 PM' ? 'selected' : ''}`}
                  style={{
                    marginRight: '10px',
                    backgroundColor: selectedTime === '4:00 PM' ? 'green' : '',
                    color: selectedTime === '4:00 PM' ? 'white' : ''
                  }}
                >
                   4:00 PM
                </Button>
              </div>
            </div>
          </div>
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
              {totalSeatCount > 0 && (
                <Button variant="primary" className="proceed-button">
                  Proceed to Buy
                </Button>
              )}
            </>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default ResOrderSummary;
