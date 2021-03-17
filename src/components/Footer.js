import React from 'react';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  
  return (
    <footer>
      <p>Copyright <span className="copy">&copy;</span> {year} <span>Radu Farcas</span></p>
    </footer>
  );
};

export default Footer;
