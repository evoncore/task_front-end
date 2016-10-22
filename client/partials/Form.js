import React from 'react';
import store from '../store';

class Form extends React.Component {

  constructor() {
    super();

    this.state = {
      login: '',
      password: ''
    }
  }

  handleLogin(e) {
    this.refs.loginInput.classList.remove('error-input');
    this.setState({
      login: e.target.value
    });
  }

  handlePassword(e) {
    this.refs.passwordInput.classList.remove('error-input');
    this.setState({
      password: e.target.value
    });
  }

  validate(callback) {
    if (
      this.state.login != '' &&
      this.state.password != '' &&
      this.state.login.length >= 3
    ) {
      callback();
    } else {
      if (this.state.login == '' || this.state.login.length < 3)
        this.refs.loginInput.classList.add('error-input');
      if (this.state.password == '')
        this.refs.passwordInput.classList.add('error-input');
    }
  }

  submit() {
    this.validate(() => {
      return store.dispatch({type: this.props.type, payload: this.state});
    });
  }

  componentWillMount() {
    var showError = true;

    this.unsubscribe = store.subscribe(() => {
      if (typeof store.getState().user == 'string' && showError) {
        showError = false;
        console.info(store.getState().user);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render () {
    return (
      <div className="form">

        <input ref="loginInput"
               onChange={this.handleLogin.bind(this)}
               type="text"
               placeholder="login"
               value={this.state.login} />

        <input ref="passwordInput"
               onChange={this.handlePassword.bind(this)}
               type="password"
               placeholder="password"
               value={this.state.password} />

        <button onClick={this.submit.bind(this)}>Send</button>
      </div>
    );
  }
}

export default Form;