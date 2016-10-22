import React from 'react';
import store from '../../store';
import PasswordInput from '../User/PasswordInput';

class Home extends React.Component {

  constructor() {
    super();

    this.state = {
      passwords: []
    }
  }

  componentWillMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        passwords: store.getState().user.passwords
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  savePasswords(e) {
    var passwords = [];
    var mainPush = true;

    this.refs.manager.childNodes.forEach(el => {
      if (el.classList.contains('user-password-item')) {
        if (el.children[0].value != '')
          passwords.push(el.children[0].value);
      }
    });

    // add click
    if (e && e.target.classList.contains('user-password-add-item') && this.refs.inputAddPassword.value != '')
    {
      e.preventDefault();
      var push = true;

      passwords.forEach(el => {
        if (this.refs.inputAddPassword.value == el) {
          push = false;
        }
      });

      if (push) {
        passwords = [...passwords, this.refs.inputAddPassword.value];
        this.refs.inputAddPassword.value = '';
      }
    }
    else // save click
    {
      this.refs.manager.childNodes.forEach(el => {
        if (el.classList.contains('user-password-item')) {
          var siblings = Array
            .from(el.parentElement.children)
            .filter(x => x != el);

          // If siblings have the same value - break
          siblings.forEach(sib => {
            if (el.children[0].value == sib.children[0].value) {
              mainPush = false;
            }
          });
        }
      });
    }


    if (mainPush) {
      this.setState({
        passwords: passwords
      });

      store.dispatch({type: 'SAVE_USER_PASSWORD', payload: passwords});
    }
  }

  removePassword(e) {
    e.preventDefault();

    if (this.state.passwords.length > 1) {
      var newPasswords = [];

      this.state.passwords.forEach(el => {
        if (el != e.target.previousSibling.value) {
          newPasswords.push(el);
        }
      });

      this.setState({
        passwords: newPasswords
      });

      store.dispatch({type: 'SAVE_USER_PASSWORD', payload: newPasswords});
    }
  }

  render() {
    return (
      <div>
        <h1 className="title">Welcome to Password Manager!</h1>
        <div ref="manager">
          {
            this.state.passwords.map((el) => {
              return <PasswordInput removePassword={this.removePassword.bind(this)}
                                    savePasswords={this.savePasswords.bind(this)}
                                    key={Date.now() + Math.random()}
                                    value={el} />;
            })
          }

          <label ref="labelAddPassword" className="user-password-item-add">
            <input ref="inputAddPassword"
                   type="text"
                   placeholder="create new password..." />
            <a href="#" onClick={this.savePasswords.bind(this)} className="user-password-add-item icon-plus"></a>
          </label>
        </div>
        <button onClick={this.savePasswords.bind(this)}>Save all changes</button>
      </div>
    );
  }

}

export default Home;