import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';


const Home = () => {
    const handleClick1 = () => {
        // Save the restaurant ID in local storage
        localStorage.setItem('restaurant_id', '1');
    };
    const handleClick2 = () => {
        // Save the restaurant ID in local storage
        localStorage.setItem('restaurant_id', '2');
    };
    const handleClick3 = () => {
        // Save the restaurant ID in local storage
        localStorage.setItem('restaurant_id', '4');
    };
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


            <div className="container marketing">

                <div class="row">
                    <div className="col-lg-4">
                        <div className="card card1">
                            <div className="circle-container">
                            <img src="./images/res3.jpg" className="bd-placeholder-img rounded-circle" width="140" height="140" alt="n" />
                            </div>
                            <div className="text-container">
                            <h2 className="fw-normal">Hotel Capsicum</h2>
                            {/* <div style={{ textAlign: 'justify' }}> */}
                            <p>At Hotel Capsicum, we are passionate about showcasing the rich tapestry of flavors from around the world. Our talented team of chefs masterfully crafts each dish, drawing inspiration from global cuisines while adding their unique twist.</p>
                            {/* </div> */}
                            <p>
                                <Link to="/restaurant" className="btn btn-primary" onClick={handleClick1}>
                                View Restaurant »
                                </Link>
                            </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card card1">
                        <div class="circle-container">
                        <img src='./images/res1.webp' class="bd-placeholder-img rounded-circle" width="140" height="140" alt='nn'/>
                        </div>
                        <div className="text-container">
                            <h2 className="fw-normal">Food Studio</h2>
                            <p>Fill your plate up at one of the best continental restaurants in Bangalore at this incredible restaurant located in the heart of the city. A jolly ambience, lively staff, and aromatic food waiting to be gorged upon await you at The Only Place</p>
                            <p>
                                <Link to="/restaurant" className="btn btn-primary" onClick={handleClick2}>
                                View Restaurant »
                                </Link>
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card card1">
                        <div class="circle-container">
                        <img src='./images/res2.webp' class="bd-placeholder-img rounded-circle" width="140" height="140" alt='nn'/>
                        </div>
                        <div className="text-container">
                            <h2 className="fw-normal">Kiyan, The Roseate</h2>
                            <p>At Kiyan, we believe that dining is an experience that engages all the senses. From the moment you step into our restaurant, you will be enchanted by the captivating ambiance, where modern design seamlessly merges with the lush natural surroundings.</p>
                            <p>
                                <Link to="/restaurant" className="btn btn-primary" onClick={handleClick3}>
                                View Restaurant »
                                </Link>
                            </p>
                        </div>
                        </div>
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-body-secondary">It’ll blow your mind.</span></h2>
                        <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                    </div>
                    <div className="col-md-5">
                    <img src="./images/res1.jpg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" style={{ height: '500px', width: '400px' }} alt="Slide 1"  />
                        {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg> */}
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span className="text-body-secondary">See for yourself.</span></h2>
                        <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                    <img src="./images/res2.jpg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" style={{ height: '500px', width: '400px' }} alt="Slide 2"  />
                        {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg> */}
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">And lastly, this one. <span className="text-body-secondary">Checkmate.</span></h2>
                        <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
                    </div>
                    <div className="col-md-5">
                    <img src="./images/res3.jpg" classNameName="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" style={{ height: '500px', width: '400px' }} alt="Slide 3" />
                        {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg> */}
                    </div>
                </div>

                <hr className="featurette-divider" />


            </div>


        </>

    );
};

export default Home;
