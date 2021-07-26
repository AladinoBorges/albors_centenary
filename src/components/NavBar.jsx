import { useState } from 'react';
import { Link } from 'react-router-dom';

import MobileMenu from './MobileMenu';

function NavBar({ selected }) {
  const [navBurger, setNavBurger] = useState(false);

  const navbarData = [
    'A Fundação',
    'Serviços Médicos',
    'Especialidades',
    'Processo Seletivo',
    'Fale Conosco'
  ];

  const createNavbarLinks = navbarData.map((string) => {
    if (string === selected) {
      return (
        <Link
          to={
            string.replace(/ /g, '-').toLowerCase()
          }
          className="navbar-item is-active"
        >
          { string }
        </Link>
      );
    } else {
      return (
        <Link
          to={
            string.replace(/ /g, '-').toLowerCase()
          }
          className="navbar-item"
        >
          { string }
        </Link>
      );
    }
  });

  const handleClickOrMouseOver = () => {
    setNavBurger(!navBurger);
  };

  return (
    <nav className="navbar is-white">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item logo">
          </Link>
          <span
            onClick={ handleClickOrMouseOver }
            className={ !navBurger ? 'navbar-burger burger' : 'navbar-burger is-active' }
            data-target="navbarMenuHeroA"
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
          <MobileMenu show={ !navBurger ? 'menu navbar-dropdown is-hidden' : 'menu navbar-dropdown' } />
        </div>
        <div id="navbarMenuHeroA" className="navbar-menu">
          <div className="navbar-end">
            { createNavbarLinks }
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
