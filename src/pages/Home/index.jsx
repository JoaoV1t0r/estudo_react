import "./Home.css";
import { Component } from "react";
import { loadPosts } from "../../utils/loadPosts";
import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPerPage: 10,
    searchValue: "",
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postAndPhotos = await loadPosts();
    const { page, postPerPage } = this.state;
    this.setState({
      posts: postAndPhotos.slice(page, postPerPage),
      allPosts: postAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { page, postPerPage, allPosts, posts } = this.state;
    const nextPage = page + postPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { posts, allPosts, searchValue } = this.state;

    const noMorePosts = posts.length >= allPosts.length;

    const filterePosts = !!searchValue
      ? posts.filter((post) => {
          return post.title.toLowerCase().includes(searchValue.toLowerCase());
        })
      : posts;

    return (
      <section className="container">
        <div className="search-container">
          {!!searchValue && <h1>Search: {searchValue}</h1>}
          <TextInput
            handleChange={this.handleChange}
            searchValue={searchValue}
          />
        </div>
        {filterePosts.length > 0 && <Posts posts={filterePosts} />}
        {filterePosts.length === 0 && <p>Não existem postes com esse título</p>}

        <div className="button-container">
          {!searchValue && (
            <Button
              text="Load More Posts"
              quandoClica={() => {
                this.loadMorePosts();
              }}
              disabled={noMorePosts}
            />
          )}
        </div>
      </section>
    );
  }
}

export default Home;
