function MobileMenu({ show }) {
  return (
    <aside className={ show }>
      <ul className="menu-list">
        <li>
          <a href="/a-fundação" className="button is-white is-small">
            A Fundação
          </a>
        </li>
        <li>
          <a href="/serviços-médicos" className="button is-white is-small">
            Serviços Médicos
          </a>
        </li>
        <li>
          <a href="/especialidades" className="button is-white is-small">
            Especialidades
          </a>
        </li>
        <li>
          <a href="/processo-seletivo" className="button is-white is-small">
            Processo Seletivo
          </a>
        </li>
        <li>
          <a href="/fale-conosco" className="button is-white is-small">
            Fale Conosco
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default MobileMenu;
