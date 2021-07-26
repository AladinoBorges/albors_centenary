function Message({ header, content }) {
  return (
    <article className="message is-link is-medium">
      <div className="message-header info-btn">
        <p>{ header }</p>
      </div>
    </article>
  );
}

export default Message;
