import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Carousel = () => {
    return (
        <>

            <div id="myCarousel" className="carousel slide mb-4 mt-5" data-bs-ride="carousel" data-bs-theme="light" style={{ width: '80%', margin: 'auto' }}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" className="active" aria-label="Slide 2" aria-current="true"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" className="" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img src="./images/food1.jpg" className="d-block w-100" alt="Slide 1" style={{ height: '400px' }} />
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>Example headline.</h1>
                                <p className="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
                                <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src="./images/food1.jpg" className="d-block w-100" alt="Slide 2" style={{ height: '400px' }} />
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Another example headline.</h1>
                                <p>Some representative placeholder content for the second slide of the carousel.</p>
                                <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./images/food1.jpg" className="d-block w-100" alt="Slide 3" style={{ height: '400px' }} />
                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1>One more for good measure.</h1>
                                <p>Some representative placeholder content for the third slide of this carousel.</p>
                                <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            <div class="container marketing">

                <div class="row">
                    <div class="col-lg-4">
                        <div class="card">
                        <div class="circle-container">
                            <img src='./images/res3.jpg' class="bd-placeholder-img rounded-circle" width="140" height="140" alt='n'/>
                        </div>
                        <div class="text-container">
                            <h2 class="fw-normal">Heading</h2>
                            <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                            <p><a class="btn btn-secondary" href="#">View details »</a></p>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card">
                        <div class="circle-container">
                        <img src='./images/res1.webp' class="bd-placeholder-img rounded-circle" width="140" height="140" alt='nn'/>
                        </div>
                        <div class="text-container">
                            <h2 class="fw-normal">Heading</h2>
                            <p>Another exciting bit of dfkj dgjfgkjrepresentative placeholder content. This time, we've moved on to the second column.</p>
                            <p><a class="btn btn-secondary" href="#">View details »</a></p>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card">
                        <div class="circle-container">
                        <img src='./images/res2.webp' class="bd-placeholder-img rounded-circle" width="140" height="140" alt='nn'/>
                        </div>
                        <div class="text-container">
                            <h2 class="fw-normal">Heading</h2>
                            <p>And lastly, this is the third column of representative placeholder content where user can do anything.</p>
                            <p><a class="btn btn-secondary" href="#">View details »</a></p>
                        </div>
                        </div>
                    </div>
                </div>




                <hr class="featurette-divider" />

                <div className="row featurette">
  <div className="col-md-7">
    <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-body-secondary">It’ll blow your mind.</span></h2>
    <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
  </div>
  <div className="col-md-5">
    <img src="./images/res1.jpg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" style={{ maxWidth: "500px", maxHeight: "500px" }} alt="Slide 1" />
  </div>
</div>

                <hr class="featurette-divider" />

                <div class="row featurette">
                    <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span class="text-body-secondary">See for yourself.</span></h2>
                        <p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
                    </div>
                    <div class="col-md-5 order-md-1">
                    <img src="./images/res2.jpg" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" alt="Slide 2"  />
                    </div>
                </div>

                <hr class="featurette-divider" />

                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading fw-normal lh-1">And lastly, this one. <span class="text-body-secondary">Checkmate.</span></h2>
                        <p class="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
                    </div>
                    <div class="col-md-5">
                    <img src="./images/res3.jpg" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" alt="Slide 3"  />
                    </div>
                </div>

                <hr class="featurette-divider" />


            </div>


        </>

    );
};

export default Carousel;
