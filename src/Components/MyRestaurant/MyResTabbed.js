import React, { useState } from 'react';
import MyResReviewsPage from './MyResReview'
import MyResAboutPage from './MyResAbout';
import MyResPhoto from './MyResPhoto'
import MyResMenu from './MyResMenu'


const MyResTabbed = () => {
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
            
            <MyResAboutPage />
          </div>
        )}
        {activeTab === 'menu' && (
          <div className="tab-pane active">
            <MyResMenu/>
          </div>
        )}
        {activeTab === 'photo' && (
          <div className="tab-pane active">
            <MyResPhoto/>  
            {/* Photo content goes here */}
          </div>
        )}
        {activeTab === 'review' && (
          <div className="tab-pane active">
            <MyResReviewsPage />
          </div>
        )}
        
      </div>
    </div>
  );
};

export default MyResTabbed;
