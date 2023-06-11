import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function FeaturedPost() {
  return (
    <>


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
                <img className="bd-placeholder-img" width="100%" height="100%" src="./images/image.jpg" alt="No image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class=" container p-4 p-md-3 mb-4 rounded text-body-emphasis bg-body-primary">
        <div class="col-lg-6 px-0">
          <h1 class="display-4 fst-italic">Menu</h1>
          <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
          <p class="lead mb-0"><a href="#" class="text-body-emphasis fw-bold">Continue reading...</a></p>
        </div>
      </div>
    </>
  );
}

export default FeaturedPost;
