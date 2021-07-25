function Tabs() {
  
  return (
    <div className="tabs is-centered is-boxed">
      <ul>
      <li>
          <a className="is-size-6" href="/">
            <span>Institucional</span>
          </a>
        </li>
        <li>
          <a className="is-size-6" href="/">
            <span>Serviços Médicos</span>
          </a>
        </li>
        <li>
          <a className="is-size-6" href="/">
            <span>Especialidades</span>
          </a>
        </li>
        <li>
          <a className="is-size-6" href="/">
            <span>Escalas</span>
          </a>
        </li>
        <li>
          <a className="is-size-6" href="/">
            <span>A Fundação</span>
          </a>
        </li>
        <li className="is-active">
          <a className="is-size-6" href="/">
            <span>Últimas Notícias</span>
          </a>
        </li>
        <li>
          <a className="is-size-6" href="/">
            <span>Eventos</span>
          </a>
        </li>
        <li>
          <a className="is-size-6" href="/">
            <span>Informações Gerais</span>
          </a>
        </li>
        <li>
          <a className="is-size-6" href="/">
            <span>Pacientes Não Identificados</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Tabs;
