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
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-12">
          <div class="tile is-parent">
            <article class="tile is-child notification more-height has-text-right first-btn">
              <br />
              <br />
              <p class="title has-text-light">Informações Covid-19</p>
              <p class="subtitle"></p>
              <div class="content">
              </div>
            </article>
          </div>
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification second-btn">
                <br />
                <br />
                <br />
                <br />
                <p class="title is-2 has-text-black-ter cards-text">Oncologia</p>
                <p class="subtitle"></p>
              </article>
              <article class="tile is-child notification third-btn">
                <br />
                <br />
                <br />
                <br />
                <p class="title is-3 has-text-black-ter cards-text">Horários de Visita</p>
                <p class="subtitle"></p>
              </article>
            </div>
            <div class="tile is-parent">
              <Card
                image={ first.image }
                title={ first.title }
                subtitle={ first.subtitle }
                content={ first.content }
              />
            </div>
            <div class="tile is-parent">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBody;
