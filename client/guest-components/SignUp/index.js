import React from 'react';
import Form from '../../partials/Form';

class SignUp extends React.Component {

  render() {
    return (
      <div>
        <h1 className="title">Sign Up</h1>
        <Form type="USER_SEND_SIGN-UP" />
      </div>
    );
  }

}

export default SignUp;