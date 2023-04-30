import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Kitap Dünyası</h1>
      <div>
        <Link to="/">Anasayfa</Link>
        <Link to={'/books'}>Kitaplar</Link>
      </div>
    </header>
  );
};

export default Header;
