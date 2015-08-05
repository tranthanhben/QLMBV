import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {createTransitionHook} from '../universalRouter';
import LeftNavigator from '../components/layout/LeftNavigator';

class App extends Component {
  static propTypes = {
    params: PropTypes.object,
    user: PropTypes.object
  }
  static contextTypes = {
    router: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  }

  componentWillMount() {
    const {router, store} = this.context;
    router.addTransitionHook(createTransitionHook(store));
  }
  render() {
    if(!this.props.user){
      return (
        <div className="wrapper">
        {this.props.children}
        </div>
      );
    }
    return (
      <div className="wrapper">
        <div className='page'>
          <div className='outer'>
          <LeftNavigator params={this.props.params}>
          </LeftNavigator>
          {this.props.children}
        </div>
          <footer>
            <div className='container'>Build with React and &lt;3</div>
          </footer>
        </div>
      </div>
    );
  }
}
@connect(state =>({
  user: state.user.user
}))
export default class AppContainer {
  render() {
    return <App params={this.props.params} user={this.props.user}>
      {this.props.children}
    </App>;
  }
}
