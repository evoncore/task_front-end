import React from 'react';

// Components
import Header from './Header';

// Connect
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as userActions from '../actions/user';

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
  }
}

function mapStateToProps (state) {
  return {
    user: state.user,
  }
}
// end Connect

class App extends React.Component {

  componentWillMount() {
    this.props.userActions.fetchPasswords();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container" id="app">
          {this.props.children}
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);