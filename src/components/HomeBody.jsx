import Card from "./Card";

import one from "../images/one.jpg";

function HomeBody() {
  const cards = {
    first: {
      image: one,
      title: 'Rafa Souza apresenta o Adote o Centenário à direção do Hospital',
      subtitle: '22 de junho de 2021, CFHC',
      content: 'Presidente Lilian Silva recebe projeto de lei que incentiva ações de melhoria para o Hospital Centenário.'
    }
  };

  const { first } = cards;
  return (
    <div className="home-body">
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-12">
          <div className="tile is-parent">
            <article className="tile is-child notification has-text-right first-btn more-height mouse-over">
              <br />
              <br />
              <p className="title has-text-light">Informações Covid-19</p>
              <p className="subtitle"></p>
              <div className="content">
              </div>
            </article>
          </div>
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification second-btn mouse-over">
                <br />
                <br />
                <br />
                <br />
                <p className="title is-2 has-text-black-ter cards-text">Oncologia</p>
                <p className="subtitle"></p>
              </article>
              <article className="tile is-child notification third-btn mouse-over">
                <br />
                <br />
                <br />
                <br />
                <p className="title is-3 has-text-black-ter cards-text">Horários de Visita</p>
                <p className="subtitle"></p>
              </article>
            </div>
            <div className="tile is-parent">
              <Card
                image={ first.image }
                title={ first.title }
                subtitle={ first.subtitle }
                content={ first.content }
              />
            </div>
            <div className="tile is-parent">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBody;
