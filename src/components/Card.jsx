import heroPeople from '../images/hero-background.jpg';

const default_content = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel corrupti blanditiis temporibus, quod debitis aut facere explicabo nihil, tenetur aliquid ab magni odio quaerat ullam molestiae quisquam dolor libero excepturi!';

function Card({ image = heroPeople, title = 'Título', subtitle = 'Subtítulo', content = default_content }) {
  return (
    <div className="card mouse-over">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={ image } alt="Placeholder" />
        </figure>
      </div>
      <div className="card-content has-text-left">
        <div className="media">
          <div className="media-content no-overflow">
            <p className="title is-6">{ title }</p>
            <p className="subtitle is-7">{ subtitle }</p>
          </div>
        </div>

        <div className="content">
          { content }
          <p>...</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
