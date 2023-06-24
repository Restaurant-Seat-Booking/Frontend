
import React, { useEffect, useState } from 'react';
const url = process.env.REACT_APP_URL;;

function MyResDetails(){
    const [name, setname] = useState([]);
    const [openingtime, setopeningtime] = useState([]);
    const [closeingtime, setcloseingtime] = useState([]);
    const [location, setlocation] = useState([]);
    const email = localStorage.getItem('userId'); // Retrieve user ID from localStorage
    const restaurant_id = localStorage.getItem('myrestaurant_id');
    useEffect(() => {
        console.log(email)
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
                setname(tempdata.restaurant_name);
                setopeningtime(tempdata.opening_time);
                setcloseingtime(tempdata.closing_time);
                setlocation(tempdata.address);
                // setfeatu(JSON.parse(tempdata.features))
            } catch (error) {
                console.error(error);
            }
        };

        fetchOrders();
    }, [restaurant_id]);




    return (
        <div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <h5 style={{ marginRight: "10px" }}>Restaurant Name:</h5>
                <p>{name}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <h5 style={{ marginRight: "10px" }}>Time:</h5>
                <p>{openingtime} - {closeingtime}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <h5 style={{ marginRight: "10px" }}>Location:</h5>
                <p>{location}</p>
            </div>
        </div>
    );
}

export default MyResDetails