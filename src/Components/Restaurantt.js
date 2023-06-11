import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardComponent = () => {
    const [activeTab, setActiveTab] = useState('about');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card" style={{ width: '50rem' }}>
                {/* Card Content */}
                <img src="./images/image.jpg" alt="No image" className="card-img-top" style={{ maxHeight: '400px', width: 'auto' }} />
                <div className="card-body">
                    <h5 className="card-title">Restaurant Name</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    {/* Tabbed Interface */}
                    <div className="stack_scroll bg-white padding-l-15 padding-r-15">
                        <ul className="nav nav-tabs">
                            {/* Tab 1: About */}
                            <li className="nav-item">
                                <a
                                    className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('about')}
                                    href="#"
                                    style={{ backgroundColor: activeTab === 'about' ? '#fa4617' : '' }}
                                >
                                    About
                                </a>
                            </li>
                            {/* Tab 2: Menu */}
                            <li className="nav-item">
                                <a
                                    className={`nav-link ${activeTab === 'menus' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('menus')}
                                    href="#"
                                    style={{ backgroundColor: activeTab === 'menus' ? '#fa4617' : '' }}
                                >
                                    Menu
                                </a>
                            </li>
                            {/* Tab 3: Reviews */}
                            <li className="nav-item">
                                <a
                                    className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('reviews')}
                                    href="#"
                                    style={{ backgroundColor: activeTab === 'reviews' ? '#fa4617' : '' }}
                                >
                                    Reviews
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Content for each tab */}
                    <div className="tab-content">
                        <div className={`tab-pane fade ${activeTab === 'about' ? 'show active' : ''}`} id="about">
                            {/* About Tab Content */}
                            <h3>About</h3>
                            <p>This is the about section.</p>
                        </div>
                        <div className={`tab-pane fade ${activeTab === 'menus' ? 'show active' : ''}`} id="menus">
                            {/* Menu Tab Content */}
                            <h3>Menu</h3>
                            <p>This is the menu section.</p>
                        </div>
                        <div className={`tab-pane fade ${activeTab === 'reviews' ? 'show active' : ''}`} id="reviews">
                            {/* Reviews Tab Content */}
                            <h3>Reviews</h3>
                            <p>This is the reviews section.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
