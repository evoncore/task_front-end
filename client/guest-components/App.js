import React from 'react';

// Components
import Header from './Header';

// Connect
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'
// import * as messagesActions from '../actions/messages';
//
// function mapDispatchToProps(dispatch) {
//   return {
//     messagesActions: bindActionCreators(messagesActions, dispatch),
//   }
// }

function mapStateToProps (state) {
  return {
    user: state.user,
  }
}
// end Connect

class App extends React.Component {

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

export default connect(mapStateToProps)(App);