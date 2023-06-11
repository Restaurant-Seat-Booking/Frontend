import React, { useState } from 'react';

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
            <h4>About</h4>
            {/* About content goes here */}
          </div>
        )}
        {activeTab === 'menu' && (
          <div className="tab-pane active">
            <h4>Menu</h4>
            {/* Menu content goes here */}
          </div>
        )}
        {activeTab === 'photo' && (
          <div className="tab-pane active">
            <h4>Photo</h4>
            {/* Photo content goes here */}
          </div>
        )}
        {activeTab === 'review' && (
          <div className="tab-pane active">
            <h4>Review</h4>
            {/* Review content goes here */}
          </div>
        )}
        
      </div>
    </div>
  );
};

export default MyResTabbed;
