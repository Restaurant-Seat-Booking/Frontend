import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useSelectedItems } from './SelectedItemsContext';
import app_logo from "./logo.png"
const url = process.env.REACT_APP_URL;

const ResOrderSummary = () => {

  const [seats1, setseats1] = useState([]);
  const { selectedItems } = useSelectedItems();
  const [selectedTime, setSelectedTime] = useState(null);
  const [totalSeats, setTotalSeats] = useState([]);
  const email = localStorage.getItem('userId'); // Retrieve user ID from localStorage
  const restaurant_id = localStorage.getItem('restaurant_id')
  // const restaurant_id = localStorage.getItem('myrestaurant_id')
  const [payment,setPayment]=useState(false);
  const [orderId,setOrderId]=useState("");
  const [paymentId,setPaymentId]=useState("");
  const [signature,setSignature]=useState("");
  // console.log(payment);

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
        if(tempdata.available_seats !=null) setTotalSeats(JSON.parse(tempdata.available_seats)[0])
        // console.log(seats1)
      } catch (error) {
        // console.error(error);
      }
    };

    fetchOrders();
  }, [restaurant_id]);

  

  const calculateTotalCost = () => {
    let totalCost = 0;
    selectedItems.forEach((item) => {
      let x = parseInt(item.price);
      totalCost += x;
    });
    return totalCost;
  };

  const handleButtonClick = (time) => {
    setSelectedTime(time);
  };

  const BuyNow=async()=>{ 
    // console.log("hello")
    let totalAmount = calculateTotalCost();
    // const res=await axiosIntance.get(`/order/${email}/${std_no}`);
    const res = await fetch(`${url}/api/order/placeorder`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ totalAmount }), // Send userId in the request body
    });
    const tempdata = await res.json();   
    // console.log(tempdata.order)
    if(res.status!=200)  return;
      
    const {amount,currency,id}=tempdata.order;
    
    var options = {
      "key": "rzp_test_ZbzAdM2rFQPnfZ", // Enter the Key ID generated from the Dashboard
      "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": currency,
      "name": "Flix the NetflixClone", //your business name
      "description": "Testing Transaction",
      "image": app_logo, 
      "order_id": id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response){
          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature);
          setOrderId(response.razorpay_order_id);
          setSignature(response.razorpay_signature);
          setPaymentId(response.razorpay_payment_id);
          setPayment(true);
          // console.log("payment ho gya")
      },
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
          "name": email.split("@")[0], //your customer's name
          "email": email, 
          "contact": "0123456789"  //Provide the customer's phone number for better conversion rates 
      },
      // "notes": {
      //     "address": "Razorpay Corporate Office"
      // },
      // "theme": {
      //     "color": "#3399cc"
      // }
  };
  var rzp1 = new window.Razorpay(options);
  rzp1.open();
  rzp1.on('payment.failed', function (response){
          // alert(response.error.code);
          // alert(response.error.description);
          // alert(response.error.source);
          // alert(response.error.step); 
          // alert(response.error.reason);
          // alert(response.error.metadata.order_id);
          // alert(response.error.metadata.payment_id);
          // console.log("payment nhi hua")
  });

  }

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
             <ul className="order-summary-list mt-2">
                {selectedItems.map((item, index) => (
                  <li key={index} className="order-summary-item d-flex justify-content-between align-items-center">
                    <div>{item.name}</div>
                    <div className="item-price">Rs {item.price}</div>
                  </li>
                ))}
                <li key={1} className="order-summary-item d-flex justify-content-between align-items-center">
                    <div><h4>Total : </h4></div>
                    <div className="item-price"><h4>Rs {calculateTotalCost()}</h4></div>
                </li>
              </ul>
              {totalSeatCount > 0 && (
                <Button  onClick={BuyNow} variant="primary" className="proceed-button">
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
