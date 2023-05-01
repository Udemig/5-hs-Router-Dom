import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <h1 onClick={() => navigate('/')}>Kitap Dünyası</h1>
      <div>
        <NavLink to="/">Anasayfa</NavLink>
        <NavLink to={'/books'}>Kitaplar</NavLink>
      </div>
    </header>
  );
};

export default Header;

// 2. kullanım
/* 
  <NavLink to="/" className={({ isActive }) => isActive && 'aktif'}>
          Anasayfa
        </NavLink>
        <NavLink
          to={'/books'}
          className={({ isActive }) => isActive && 'aktif'}
        >
          Kitaplar
        </NavLink>
*/

// 3. kullanım

/*
 <NavLink
          to="/"
          style={({ isActive }) => ({ color: isActive ? 'blue' : 'red' })}
        >
          Anasayfa
        </NavLink>
        <NavLink
          to={'/books'}
          style={({ isActive }) => ({ color: isActive ? 'blue' : 'red' })}
        >
          Kitaplar
        </NavLink>

*/
