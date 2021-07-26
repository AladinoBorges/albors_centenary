import { Link } from 'react-router-dom';

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
          <Link className="is-size-6" to={ url }>
            <span>{ name }</span>
          </Link>
        </li>
      );
    } else {
      return (
        <li>
          <Link className="is-size-6" to={ url }>
            <span>{ name }</span>
          </Link>
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
