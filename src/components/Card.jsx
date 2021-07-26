import heroPeople from '../images/hero-background.jpg';

const default_content = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel corrupti blanditiis temporibus, quod debitis aut facere explicabo nihil, tenetur aliquid ab magni odio quaerat ullam molestiae quisquam dolor libero excepturi!';

function Card({ image = heroPeople, title = 'Título', subtitle = 'Subtítulo', content = default_content }) {
  return (
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src={ image } alt="Placeholder" />
        </figure>
      </div>
      <div class="card-content has-text-left">
        <div class="media">
          <div class="media-content no-overflow">
            <p class="title is-6">{ title }</p>
            <p class="subtitle is-7">{ subtitle }</p>
          </div>
        </div>

        <div class="content">
          { content }
          <p>...</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
