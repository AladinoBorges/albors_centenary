function Loading({ show }) {
  return (
    <div className={ show }>
      Fundação Hospital Centenário
      <button className="button is-ghost is-loading btn-loading" />
    </div>
  );
}

export default Loading;
