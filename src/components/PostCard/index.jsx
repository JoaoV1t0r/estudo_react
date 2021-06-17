import "./style.css";

export const PostCard = ({ title, cover, body, id }) => (
  <div key={id} className="post">
    <div className="post-content">
      <img src={cover} alt={title}></img>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  </div>
);
