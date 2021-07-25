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
                <p className="title">Blobo pequeno</p>
                <p className="subtitle">Subtítulo</p>
                <div className="content">
                  <p>
                    Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                  </p>
                </div>
              </article>
              <article className="tile is-child box">
                <p className="title">Outro bloco pequeno</p>
                <p className="subtitle">Subtítulo</p>
                <div className="content">
                  <p>
                    Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                  </p>
                </div>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                <p className="title">Bloco médio com imagem</p>
                <p className="subtitle">Subtítulo</p>
                <figure className="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/640x480.png" alt="content text"/>
                </figure>
                <div className="content">
                  <p>
                    Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                  </p>
                </div>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="title">Bloco largo</p>
              <p className="subtitle">Subtítulo</p>
              <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <div className="content">
              <p className="title">Bloco alto</p>
              <p className="subtitle">Subtítulo</p>
              <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
                <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
                <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
                <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title">Bloco pequeno</p>
            <p className="subtitle">Subtítulo</p>
            <div className="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
            </div>
          </article>
        </div>
        <div className="tile is-parent is-8">
          <article className="tile is-child box">
            <p className="title">Bloco largo</p>
            <p className="subtitle">Subtítulo</p>
            <div className="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
            </div>
          </article>
        </div>
      </div>

      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title">Bloco extra largo</p>
            <p className="subtitle">Subtítulo</p>
            <div className="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
              <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}

export default Body;
