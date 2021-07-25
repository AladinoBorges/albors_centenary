function Hero() {
  return (
    <section className="hero is-large">
      { /* Hero content: o fundo e conteúdo no centro */ }
      <div className="header-image">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title has-text-white-ter has-text-left my-4 pt-6 is-size-2 is-size-4-mobile have-shadows">
              Fundação Hospital Centenário
            </p>
            <p className="subtitle has-text-white-ter has-text-left is-size-4 is-size-6-mobile have-shadows">
              esperança inspira, agir transforma.
            </p>
            {/* <figure className="image is-128x128">
              <img src={ logo } alt="logo hospital centenário" />
            </figure> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
