import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from './VideoList'
import "semantic-ui-css/semantic.min.css";
import youtube from "../api/youtube";

export default class App extends Component {
state = {videos: []}

  onTermSubmit = async term => {
    console.log(term);
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
console.log(response)
    this.setState({videos: response.data.items})
  };
  render() {
    return( 
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
