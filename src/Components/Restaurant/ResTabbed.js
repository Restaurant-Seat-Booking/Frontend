import React, { useState } from 'react';
import ReviewsPage from './ResReview'
import AboutPage from './ResAbout';
import ResPhoto from './ResPhoto'
import ResMenu from './ResMenu'


const ResTabbed = () => {
  const [activeTab, setActiveTab] = useState('about');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <ul className="nav nav-tabs">
      <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => handleTabChange('about')}
          >
            About
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'menu' ? 'active' : ''}`}
            onClick={() => handleTabChange('menu')}
          >
            Menu
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'photo' ? 'active' : ''}`}
            onClick={() => handleTabChange('photo')}
          >
            Photo
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'review' ? 'active' : ''}`}
            onClick={() => handleTabChange('review')}
          >
            Review
          </button>
        </li>
        
      </ul>

      <div className="tab-content">
        {activeTab === 'about' && (
          <div className="tab-pane active">
            <h4>About</h4>
            <AboutPage />
          </div>
        )}
        {activeTab === 'menu' && (
          <div className="tab-pane active">
            <ResMenu/>
          </div>
        )}
        {activeTab === 'photo' && (
          <div className="tab-pane active">
            <ResPhoto/>  
            {/* Photo content goes here */}
          </div>
        )}
        {activeTab === 'review' && (
          <div className="tab-pane active">
            <h4>Review</h4>
            <ReviewsPage />
          </div>
        )}
        
      </div>
    </div>
  );
};

export default ResTabbed;
