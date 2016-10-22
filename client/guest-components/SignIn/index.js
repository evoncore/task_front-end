import React from 'react';
import Form from '../../partials/Form';

class SignIn extends React.Component {

  render() {
    return (
      <div>
        <h1 className="title">Sign In</h1>
        <Form type="USER_SEND_SIGN-IN" />
      </div>
    );
  }

}

export default SignIn;