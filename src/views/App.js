import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {createTransitionHook} from '../universalRouter';
import {LeftNavigator, PanelView} from 'components/layout';


class App extends Component {
  static propTypes = {
    params: PropTypes.object,
    user: PropTypes.object,
    openmodal: PropTypes.bool
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
          <LeftNavigator  params={this.props.params} user={this.props.user}>
          </LeftNavigator>
            {this.props.children}
        </div>
          <footer style={{"zIndex":(this.props.openmodal? '20':'22')}}>
            <div className='container'>Build with React and &lt;3</div>
          </footer>
        </div>
      </div>
    );
  }
}
@connect(state =>({
  user: state.user.user,
  openmodal: state.layout.openmodal
}))
export default class AppContainer {
  render() {
    return <App params={this.props.location} user={this.props.user} openmodal={this.props.openmodal}>
      {this.props.children}
    </App>;
  }
}
