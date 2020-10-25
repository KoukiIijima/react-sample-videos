import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

export default class SearchBar extends Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <Form>
          <Form.Field>
            <label>Video Search</label>
            <input
              placeholder="videos name"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </Form.Field>
          <Button onClick={this.onFormSubmit}>Submit</Button>
        </Form>
      </div>
    );
  }
}
