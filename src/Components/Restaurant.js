import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function FeaturedPost() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-12">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative" style={{ height: "500px" }}>
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary-emphasis">World</strong>
              <h3 className="mb-0">Restaurant Name</h3>
              <div className="mb-1 text-body-secondary">Nov 12</div>
              <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                Continue reading
                <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
              </a>
            </div>
            <div className="col-lg-5 d-none d-lg-block bg-white shadow">
              <img  src="./images/image.jpg" alt="No image" />
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPost;
