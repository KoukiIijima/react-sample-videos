import React from "react";
import { Button } from "@material-ui/core";
import { signIn, signOut } from "../actions/index";
import { connect } from "react-redux";

class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "758641263033-obar1scfq78dk59aahla5adt8uogmira.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.onAuthChange(this.auth.isSignedIn.get())
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    console.log(this.props.isSignedIn)
    if (this.props.isSignedIn === null) {
      return <div>I dont know if we are signed in</div>;
    } else if (this.props.isSignedIn) {
      return (
        <Button variant="outlined" onClick={this.onSignOut}>
          Sign out
        </Button>
      );
    } else {
      return (
        <Button variant="outlined" onClick={this.onSignIn}>
          Sign In with Google
        </Button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
