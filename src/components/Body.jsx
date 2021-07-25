import { useState } from 'react';

function Body() {
  const [isHidden] = useState(false);

  return (
    <main className={ isHidden ? 'is-hidden' : 'main-content'}>
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child box">
                <p className="title is-size-4">Hospital Centenário cria Ambulatório de Especialidades Ginecológicas</p>
                <p className="subtitle is-size-7">6 de julho de 2021, CFHC</p>
                <div className="content">
                  <p>
                    Para uma atenção maior e melhor qualidade à saúde da mulher, o Hospital Centenário criou o Ambulatório de Especialidades Ginecológicas para procedimentos cirúrgicos de doenças benignas e, assim, suprir a demanda reprimida na Rede Municipal de Saúde.
                  </p>
                  <p>...</p>
                </div>
              </article>
              <article className="tile is-child box">
                <p className="title is-size-4">Rafa Souza apresenta o Adote o Centenário à direção do Hospital</p>
                <p className="subtitle is-size-7">22 de junho de 2021, CFHC</p>
                <div className="content">
                  <p>
                    O vereador Rafa Souza (PDT) apresentou na segunda-feira, 21, à presidente do Hospital Centenário, Lilian Silva, a proposta do projeto de lei que cria o Adote o Centenário, programa que vai incentivar empresas e sociedade a participarem de ações que promovam melhorias na instituição.
                  </p>
                  <p>...</p>
                </div>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                <p className="title is-size-4">Em seis meses Centenário investiu mais de R$ 3 milhões em kit intubação</p>
                <p className="subtitle is-size-7">22 de junho de 2021, CFHC</p>
                <figure className="image is-4by3 one" />
                <div className="content">
                  <p>
                    Desde janeiro deste ano o Hospital Centenário, em São Leopoldo, já investiu em medicamentos que compõem o kit intubação R$ 3.127,792. Neste período foram adquiridas, e utilizadas, 113,840 mil doses de anestésicos, sedativos e bloqueadores para atender a demanda da instituição, especialmente a Área Covid.
                  </p>
                  <p>...</p>
                </div>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="title is-size-4">Centenário recebe emenda para aquisição de equipamentos</p>
              <p className="subtitle is-size-7">9 de junho de 2021, CFHC</p>
              <div className="content">
                <p>
                  Nesta quarta-feira, 9 de junho, o vereador Fabiano Haubert (PDT) entregou à presidente da instituição, Lilian Silva, a indicação de emenda parlamentar no valor de R$ 150 mil do deputado federal, Afonso Motta (PDT/RS), a ser investida em equipamentos. “Temos um carinho especial pelo Centenário e nosso compromisso é seguir ajudando a instituição’’, ressaltou o vereador.
                  </p>
                  <p>...</p>
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <div className="content">
              <p className="title is-size-4">Hospital Centenário recebe doação de equipamentos de TI da STIHL</p>
              <p className="subtitle is-size-7">9 de junho de 2021, CFHC</p>
              <figure className="image is-4by3 second" />
              <div className="content">
                <p>
                  Nesta quarta-feira, 9, o Hospital Centenário recebeu da empresa STIHL a doação de equipamentos de TI. Foram entregues 6 servidores e 7 suítes de rede para a ampliação do sistema de informatização da instituição. A presidente da Fundação Hospital Centenário, Lilian Silva; o vice-presidente Administrativo Financeiro, Antônio Benigni, e o diretor de TI do Hospital, Henrique Schönardie, receberam os equipamentos do Diretor de Recursos Humanos, Infraestrutura, Saúde, Segurança e Meio Ambiente da STIHL, Diego Pereira e do Gerente de TI da STIHL, Ricardo Nizoli.
                </p>
                <p>
                  A parceria da STIHL com a instituição vem desde o início da pandemia, quando a empresa doou computadores para a Área Covid, além de EPIs para os profissionais da linha de frente.
                </p>
                <p>...</p>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title is-size-4">Hospital Centenário cria banco de dados de pacientes sem identificação</p>
            <p className="subtitle is-size-7">9 de junho de 2021, CFHC</p>
            <div className="content">
              <p>
                A Fundação Hospital Centenário, de São Leopoldo, disponibiliza no site da instituição www.hospitalcentenario.rs.gov.br um banco de dados com informações de pacientes internados e sem identificação. O banco é um facilitador para o reconhecimento do paciente por familiares e comunidade. Em média, cerca de quatro pessoas não identificadas são internadas semestralmente na instituição. 
              </p>
              <p>...</p>
            </div>
          </article>
        </div>
        <div className="tile is-parent is-8">
          <article className="tile is-child box">
            <p className="title is-size-4">Prefeito Vanazzi visita espaço de ensino do Hospital Centenário</p>
            <p className="subtitle is-size-7">7 de junho de 2021, CFHC</p>
            <div className="content">
              <p>
                O prefeito Ary Vanazzi visitou na manhã dessa segunda-feira, 7, as instalações do espaço de ensino do Hospital Centenário, obra realizada com recursos do Contrato Organizativo de Ação Pública de Ensino-Saúde (Coapes), através da parceria com a Unisinos. “Desde 2017 foram realizadas diversas obras na área da saúde com a chegada da Unisinos no projeto de integrar a saúde com o ensino. Fizemos um planejamento estratégico para criarmos uma estrutura para o hospital escola, isso qualifica o Centenário, a pesquisa, o avanço tecnológico e a assistência em saúde’’, ressaltou o prefeito Ary Vanazzi.
              </p>
              <p>
                Acompanharam o prefeito, a presidente da Fundação Hospital Centenário, Lilian Silva; o secretário municipal da Saúde, Marcel Frison; o coordenador do curso de Medicina da Unisinos, Luciano Diogo e o diretor do Semae e vice-prefeito, Ary Moura. Para Frison, o espaço de ensino é a realização de um projeto bem elaborado. “O tão esperado hospital escola vira realidade a partir deste conjunto de investimentos com a universidade para a qualificação da área”, destacou.
              </p>
              <p>...</p>
            </div>
          </article>
        </div>
      </div>

      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title is-size-4">UTI Covid do Hospital Centenário atinge 100% de ocupação</p>
            <p className="subtitle is-size-7">31 de maio de 2021, CFHC</p>
            <figure className="image is-3by1 news-uti" />
            <div className="content">
              <p>
                Nesta segunda-feira, 31 de maio, a UTI da Área Covid do Hospital Centenário atingiu sua capacidade máxima com todos os 22 leitos ocupados. A média de ocupação na unidade de tratamento intensivo oscilou nos últimos dias entre 85 e 90%. Cerca de 20 dias atrás chegou a 75%. 
              </p>
              <p>
                “O aumento do número de internações é preocupante pois a falta de medicamentos para o kit intubação é recorrente. A gravidade do quadro clínico dos pacientes também nos deixa em alerta e o foco máximo é na recuperação. Enquanto não houver vacina suficiente para imunizar a população e os protocolos não forem seguidos rigorosamente não conseguiremos mudar esse cenário’’, destaca a presidenta da instituição, Lilian Silva. 
              </p>
              <p>
                Do total de pacientes internados na UTI, 15 estão em ventilação mecânica. As idades dos pacientes variam de 28 a 79 anos. Dos 22 pacientes, 13 são mulheres. Já nos 38 leitos de enfermaria da Área Covid estão internados 31 pacientes, 80% da ocupação.
              </p>
              <p>...</p>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}

export default Body;
