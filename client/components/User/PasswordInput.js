import React from 'react';

class Password extends React.Component {

  constructor() {
    super();

    this.state = {
      value: null,
      hidden: true
    }
  }

  componentDidMount() {
    this.setState({
      value: this.props.value
    });
  }

  showPassword() {
    this.setState({ hidden: false });
  }

  hidePasswordAndSave() {
    this.setState({ hidden: true });
  }

  handlePassword(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <label className="user-password-item">
        <input ref="input"
               onChange={this.handlePassword.bind(this)}
               onBlur={this.hidePasswordAndSave.bind(this)}
               onClick={this.showPassword.bind(this)}
               type={this.state.hidden ? 'password' : 'text'}
               value={this.state.value} />
        <a href="#" onClick={this.props.removePassword.bind(null)} className="user-password-remove-item icon-cross"></a>
      </label>
    );
  }

}

export default Password;