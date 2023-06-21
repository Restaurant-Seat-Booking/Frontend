import React, { useState } from "react";
const url  =  process.env.REACT_APP_URL

function MyResAddRestaurant() {
  const [restaurantData, setRestaurantData] = useState({
    name: "",
    openingTime: "",
    closingTime: "",
    latitude: "",
    longitude: "",
    address: "",
    images: [{ url: "", alt: "" }],
  });
  // const myrestaurant_id = localStorage.getItem('myrestaurant_id');

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name === "url" || name === "alt") {
      const images = [...restaurantData.images];
      images[index][name] = value;
      setRestaurantData({ ...restaurantData, images });
    } else if (name === "latitude" || name === "longitude") {
      const numericValue = parseFloat(value);
      setRestaurantData({ ...restaurantData, [name]: numericValue });
    } else {
      setRestaurantData({ ...restaurantData, [name]: value });
    }
  };

  const handleAddImage = () => {
    const images = [...restaurantData.images, { url: "", alt: "" }];
    setRestaurantData({ ...restaurantData, images });
  };
  const myrestaurant_id = localStorage.getItem("myrestaurant_id")
  const handleSave = async() => {
    try {
        console.log(restaurantData)
        console.log(myrestaurant_id);
      // const response = await fetch(`${url}/api/addRes/addRes`, {
        const response = await fetch(`${url}/api/addRes/addRes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          restaurantData,
          myrestaurant_id
        }), // Use the JSON string as the request body
      });
        
      if (!response.ok) {
        throw new Error('Failed to update profile');
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Restaurant</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Restaurant Name:
          </label>
          <input
            type="text"
            id="name"
            autoComplete="off"
            className="form-control"
            name="name"
            value={restaurantData.name}
            onChange={handleChange}
          />
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="openingTime" className="form-label">
              Opening Time:
            </label>
            <input
              type="text"
              autoComplete="off"
              id="openingTime"
              className="form-control"
              name="openingTime"
              value={restaurantData.openingTime}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <label htmlFor="closingTime" className="form-label">
              Closing Time:
            </label>
            <input
              type="text"
              autoComplete="off"
              id="closingTime"
              className="form-control"
              name="closingTime"
              value={restaurantData.closingTime}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="latitude" className="form-label">
              Latitude:
            </label>
            <input
              type="number"
              autoComplete="off"
              id="latitude"
              className="form-control"
              name="latitude"
              value={restaurantData.latitude}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <label htmlFor="longitude" className="form-label">
              Longitude:
            </label>
            <input
              type="number"
              autoComplete="off"
              id="longitude"
              className="form-control"
              name="longitude"
              value={restaurantData.longitude}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address:
          </label>
          <input
            type="text"
            id="address"
            autoComplete="off"
            className="form-control"
            name="address"
            value={restaurantData.address}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Images:</label>
          {restaurantData.images.map((image, index) => (
            <div className="row mb-3" key={index}>
              <div className="col">
                <input
                  type="text"
                  autoComplete="off"
                  className="form-control"
                  name="url"
                  value={image.url}
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Image Link"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  autoComplete="off"
                  className="form-control"
                  name="alt"
                  value={image.alt}
                  onChange={(e) => handleChange(e, index)}
                  placeholder="altText"
                />
              </div>
            </div>
          ))}
          <div className="row mb-3">
            <div className="col-6">
              <button
                type="button"
                className="btn btn-secondary w-100"
                onClick={handleAddImage}
              >
                Add More Image
              </button>
            </div>
            <div className="col-6">
              <button
                type="button"
                className="btn btn-primary w-100"
                onClick={handleSave}
              >
                Add My Restaurant
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MyResAddRestaurant;
