import React from 'react';
import { connect } from 'react-redux';
import { authCheckStatus } from '../actions';
import { bindActionCreators } from 'redux';

import config from '../api/config';

class GoogleAuth extends React.Component {
  componentDidMount() {
    // https://developers.google.com/api-client-library/javascript/reference/referencedocs
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: config.clientId,
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.props.authCheckStatus(this.auth);
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.props.authCheckStatus(this.auth);
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

function mapStateToProps({ auth }) {
  return { isSignedIn: auth.isSignedIn };
}

function mapDispathToProps(dispatch) {
  return bindActionCreators({ authCheckStatus }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispathToProps
)(GoogleAuth);
