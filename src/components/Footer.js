import React from 'react';

function Footer() {
  const year = 2021; // the year I built this
  
  return (
    <footer>
      <p>copyright <span className="copy">&copy;</span>{year} <span>Radu Farcas</span></p>
    </footer>
  );
};

export default Footer;
