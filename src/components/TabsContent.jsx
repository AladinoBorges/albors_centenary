function Tabs({ selectTab }) {
  const tabsData = [
    { name: 'Home', url: '/' },
    { name: 'Institucional', url: '/institucional' },
    { name: 'Eventos e Notícias', url: '/eventos-e-notícias' },
    { name: 'Editais', url: '/editais' },
    { name: 'Escalas', url: '/escalas' },
    { name: 'Pacientes Não Identificados', url: '/pacientes-sem-identificação' }
  ];

  const generateTabs = tabsData.map(({ name, url }) => {
    if (name === selectTab) {
      return (
        <li className="is-active">
          <a className="is-size-6" href={ url }>
            <span>{ name }</span>
          </a>
        </li>
      );
    } else {
      return (
        <li>
          <a className="is-size-6" href={ url }>
            <span>{ name }</span>
          </a>
        </li>
      );
    }
  });

  return (
    <div className="tabs is-centered is-boxed">
      <ul>
        { generateTabs }
      </ul>
    </div>
  );
}

export default Tabs;
