function NewsletterForm() {
  return (
    <div class="container newsletter">
      <h3 class="subtitle is-5">Cadastre-se e receba as nossas novidades por email.</h3>
      <div className="field is-grouped notification is-link">
        <p className="control is-expanded">
          <input className="input" type="text" placeholder="Digite o seu nome completo" />
        </p>
        <p className="control is-expanded">
          <input className="input" type="text" placeholder="Digite o seu email" />
        </p>
        <p className="control">
          <button className="button is-light is-rounded">
            { '>' }
          </button>
        </p>
      </div>
    </div>
  );
}

export default NewsletterForm;
