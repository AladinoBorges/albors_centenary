function Loading({ show }) {
  return (
    <div className={ show }>
      <h4 class="title is-3 has-text-info-light">Fundação Hospital Centenário</h4>
      <button className="button is-ghost is-loading btn-loading" />
    </div>
  );
}

export default Loading;
