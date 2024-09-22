import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const routeName = location.pathname.replace('/', '').replace('-', ' ').toUpperCase();

  return (
    <div className="header">
      <h2>{routeName}</h2>
    </div>
  );
};

export default Header;
