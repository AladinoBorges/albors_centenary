import { useState } from 'react';

import logo from '../images/logo.png';
import MobileMenu from './mobileMenu';

function Hero() {
  const [navBurger, setNavBurger] = useState(false);

  const handleClickOrMouseOver = () => {
    setNavBurger(!navBurger);
  };

  return (
    <section className="hero is-large">
      { /* Hero head: will stick at the top */ }
      <div className="hero-head">
        <nav className="navbar is-white">
          <div className="container">
            <div className="navbar-brand">
              <a href="/" className="navbar-item">
                <img src={ logo } alt="logo hospital centenário" />
              </a>
              <span
                onClick={ handleClickOrMouseOver }
                className={ !navBurger ? 'navbar-burger' : 'navbar-burger is-active'}
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
                <a href="/" className="navbar-item is-active">
                  Institucional
                </a>
                <a href="/noticias" className="navbar-item">
                  Notícias
                </a>
                <a href="/editais" className="navbar-item">
                  Editais
                </a>
                <a href="/processo-seletivo" className="navbar-item">
                  Processo Seletivo
                </a>
                <a href="/contato" className="navbar-item">
                  Fale Conosco
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      { /* Hero content: will be in the middle */ }
      <div className="header-image">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title has-text-white-ter has-text-left my-4 pt-6 is-size-2 is-size-4-mobile have-shadows">
              Fundação Hospital Centenário
            </p>
            <p className="subtitle has-text-white-ter has-text-left is-size-4 is-size-6-mobile have-shadows">
              esperança inspira, agir transforma.
            </p>
            <figure className="image is-128x128">
              <img src={ logo } alt="logo hospital centenário" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
