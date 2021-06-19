import "./Home.css";
import { useCallback, useEffect, useState } from "react";
import { loadPosts } from "../../utils/loadPosts";
import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";

export const Home = () => {
  const [postPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleLoadPosts = useCallback(async (page, postPerPage) => {
    const postAndPhotos = await loadPosts();

    setPosts(postAndPhotos.slice(page, postPerPage));
    setAllPosts(postAndPhotos);
  }, []);

  const loadMorePosts = () => {
    const nextPage = page + postPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  useEffect(() => {
    handleLoadPosts(0, postPerPage);
  }, [handleLoadPosts, postPerPage]);

  const noMorePosts = posts.length >= allPosts.length;

  const filterePosts = !!searchValue
    ? allPosts.filter((allPosts) => {
        return allPosts.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;

  return (
    <section className="container">
      <div className="search-container">
        {!!searchValue && <h1>Search: {searchValue}</h1>}
        <TextInput handleChange={handleChange} searchValue={searchValue} />
      </div>
      {filterePosts.length > 0 && <Posts posts={filterePosts} />}
      {filterePosts.length === 0 && <p>Não existem postes com esse título</p>}

      <div className="button-container">
        {!searchValue && (
          <Button
            text="Load More Posts"
            quandoClica={() => {
              loadMorePosts();
            }}
            disabled={noMorePosts}
          />
        )}
      </div>
    </section>
  );
};

// class Home2 extends Component {
//   state = {
//     posts: [],
//     allPosts: [],
//     page: 0,
//     postPerPage: 10,
//     searchValue: "",
//   };

//   async componentDidMount() {
//     await this.loadPosts();
//   }

//   loadPosts = async () => {
//     const postAndPhotos = await loadPosts();
//     const { page, postPerPage } = this.state;
//     this.setState({
//       posts: postAndPhotos.slice(page, postPerPage),
//       allPosts: postAndPhotos,
//     });
//   };

//   loadMorePosts = () => {
//     const { page, postPerPage, allPosts, posts } = this.state;
//     const nextPage = page + postPerPage;
//     const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage);
//     posts.push(...nextPosts);

//     this.setState({ posts, page: nextPage });
//   };

//   handleChange = (e) => {
//     const { value } = e.target;
//     this.setState({ searchValue: value });
//   };

//   render() {
//     const { posts, allPosts, searchValue } = this.state;

//     const noMorePosts = posts.length >= allPosts.length;

//     const filterePosts = !!searchValue
//       ? posts.filter((post) => {
//           return post.title.toLowerCase().includes(searchValue.toLowerCase());
//         })
//       : posts;

//     return (
//       <section className="container">
//         <div className="search-container">
//           {!!searchValue && <h1>Search: {searchValue}</h1>}
//           <TextInput
//             handleChange={this.handleChange}
//             searchValue={searchValue}
//           />
//         </div>
//         {filterePosts.length > 0 && <Posts posts={filterePosts} />}
//         {filterePosts.length === 0 && <p>Não existem postes com esse título</p>}

//         <div className="button-container">
//           {!searchValue && (
//             <Button
//               text="Load More Posts"
//               quandoClica={() => {
//                 this.loadMorePosts();
//               }}
//               disabled={noMorePosts}
//             />
//           )}
//         </div>
//       </section>
//     );
//   }
// }

export default Home;
