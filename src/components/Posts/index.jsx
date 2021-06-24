import { PostCard } from "../PostCard";
import Proptypes from "prop-types";
import "./style.css";

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard
        hey={post.id}
        title={post.title}
        body={post.body}
        id={post.id}
        cover={post.cover}
      />
    ))}
  </div>
);

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: Proptypes.arrayOf(
    Proptypes.shape({
      title: Proptypes.string.isRequired,
      body: Proptypes.string.isRequired,
      id: Proptypes.number.isRequired,
      cover: Proptypes.string.isRequired,
    })
  ),
};
