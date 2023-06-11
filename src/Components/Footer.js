import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#343a40',
        padding: '20px 0',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // Box shadow
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff', // White text color
      }}
    >
      <p style={{ margin: 0 }}>© 2023 Your Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
