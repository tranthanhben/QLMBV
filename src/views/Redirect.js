import React, {Component, PropTypes} from 'react';
import {loadMe} from '../actions/userActions';
import {isLoaded} from '../reducers/user';
import {connect} from 'react-redux';

@connect (state =>({
  user: state.user.user
}))
export default class Redirect extends Component {
  static propTypes = {
    user: PropTypes.object
  }
  static fetchData(store){
    if(!isLoaded(store.getState())){
      return store.dispatch(loadMe());
    }
  }
  componentDidMount(){
    if(this.props.user){
      console.log("job redirect");
    }else{
      window.location = "/job";
      console.log("login redirect");
    }
  }
  render() {
    return (
      <div>
      </div>
    );
  }
}
