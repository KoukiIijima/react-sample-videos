import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div key={post.id}>
          <h2>description: {post.title}</h2>
          <p>{post.body}</p>
        </div>
      );
    });
  }

  render() {
    console.log(this.props.posts);
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProp = (state) => {
  return { posts: state.posts.data };
};

export default connect(mapStateToProp, { fetchPosts })(PostList);
