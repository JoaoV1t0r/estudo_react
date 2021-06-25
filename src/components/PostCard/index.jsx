import Proptypes from "prop-types";
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

PostCard.propTypes = {
  title: Proptypes.string.isRequired,
  body: Proptypes.string.isRequired,
  id: Proptypes.number.isRequired,
  cover: Proptypes.string.isRequired,
};
