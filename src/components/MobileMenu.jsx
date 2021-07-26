import { Link } from 'react-router-dom';

function MobileMenu({ show }) {
  return (
    <aside className={ show }>
      <ul className="menu-list">
        <li>
          <Link to="/a-fundação" className="button is-white is-small">
            A Fundação
          </Link>
        </li>
        <li>
          <Link to="/serviços-médicos" className="button is-white is-small">
            Serviços Médicos
          </Link>
        </li>
        <li>
          <Link to="/especialidades" className="button is-white is-small">
            Especialidades
          </Link>
        </li>
        <li>
          <Link to="/processo-seletivo" className="button is-white is-small">
            Processo Seletivo
          </Link>
        </li>
        <li>
          <Link to="/fale-conosco" className="button is-white is-small">
            Fale Conosco
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default MobileMenu;
