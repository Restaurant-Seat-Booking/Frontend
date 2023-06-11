import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#343a40',
        padding: '20px 0',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // Box shadow
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <p style={{ margin: 0, color: '#ffffff' }}>© 2023 Your Website. All rights reserved.</p> {/* White text color */}
      </div>
    </footer>
  );
};

export default Footer;

