function MobileMenu({ show }) {
  return (
    <aside className={ show }>
      <ul className="menu-list">
        <li>
          <button className="button is-white is-small">
            A Fundação
          </button>
        </li>
        <li>
          <button className="button is-white is-small">
            Serviços Médicos
          </button>
        </li>
        <li>
          <button className="button is-white is-small">
            Especialidades
          </button>
        </li>
        <li>
          <button className="button is-white is-small">
            Processo Seletivo
          </button>
        </li>
        <li>
          <button className="button is-white is-small">
            Fale Conosco
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default MobileMenu;
