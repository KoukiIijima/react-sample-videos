import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions/index";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    // this.props.fetchPosts();
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div>
          <div key={post.id}>
            <h2>description: {post.title}</h2>
            <p>{post.body}</p>
          </div>
          <UserHeader userId={post.userId} />
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProp = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProp, { fetchPostsAndUsers })(PostList);
