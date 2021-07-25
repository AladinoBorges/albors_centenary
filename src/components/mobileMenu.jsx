function MobileMenu({ show }) {

  return (
    <aside className={ show }>
      <ul className="menu-list">
        <li>
          <button className="button is-white is-small">
            Institucional
          </button>
        </li>
        <li>
          <button className="button is-white is-small">
            Notícias
          </button>
        </li>
        <li>
          <button className="button is-white is-small">
            Editais
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
