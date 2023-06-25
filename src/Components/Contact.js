import React, { useState } from 'react';
const url = process.env.REACT_APP_URL;

const Contact = () => {
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const userData = {
        email: email,
        query: query
      };
  
      fetch(`${url}/api/contact/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
        .then(response => response.json())
        .then(data => {
          
        })
        .catch(error => {
          console.error('Error:', error);
        });
        setEmail('');
        setQuery('');
  };

  return (
    <>
      <section className="section" style={{minHeight : "86vh", background : "#f7f7f7"}}>


      <div className="container mt-3">
      <input type="hidden" id="page_type" value="other" />
      <input type="hidden" name="_token" value="NyYUyPTJ9kjeYXmEMXe624f7NMV5nps1VXsXlgXL" />
      <div className="bg-white">
        <div className="img2-7">
          <img  style={{width : "100%"}} src="https://d4t7t8y8xqo0t.cloudfront.net/resized/1080X400/pages%2F3%2Fimage20170306083306.jpg" alt="Background" />
        </div>
        <div className="px-4">
          <h1 className="text-center h1 text-bold grey-dark h1 margin-t-20">Contact Us</h1>

          <div className="margin-t-30 static-p margin-t-30">
            <p>You can reach us at <b>restro.booking62@gmail.com</b></p>
            <p>For booking related queries/issues, kindly call our 24 hours concierge at 8077769856 or mail to us at <a href="mailto:booking@eazydiner.com"><b>restro.booking62@gmail.com</b></a></p>
            <p><br /></p>
            <p><b>For Kharagpur Customers</b></p>
            <p>Name of the company: Restro</p>
            <p>E-mail address: restro.booking62@gmail.com</p>
            <p>Phone number: +91 8077769856</p>
            <p>Office Address: B block, Nehru Hall of Residence, IIT Kharagpur, West Bengal, India</p>
            <p><br /></p>
            <p><br /></p>
          </div>
          <div
          className="p-4 bg-white shadow"
          style={{ borderRadius: '10px', maxWidth: '500px', margin: '0 auto' }}
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="query" className="form-label">
                Query:
              </label>
              <textarea
                id="query"
                className="form-control"
                value={query}
                onChange={handleQueryChange}
                required
              ></textarea>
            </div>
            <button type="submit" style={{width : "100%"}} className="btn btn-primary">
              Send Query
            </button>
          </form>
        </div>
        <br/>
        <br/>

        </div>
      </div>

      <div className="margin-t-30" id="restaurant-listing">
        <div className="grid gutter-grid"></div>
      </div>
    </div>
    <br/>
    <br/>
    <br/>

      </section>
    </>
  );
};

export default Contact;
