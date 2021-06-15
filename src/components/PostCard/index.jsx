export const PostCard = ({ title, cover, body, id }) => (
  <div className="post">
    <div key={id} className="post-content">
      <img src={cover} alt={title}></img>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  </div>
);
