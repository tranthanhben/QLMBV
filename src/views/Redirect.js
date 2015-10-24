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
    if(!this.props.user){
      window.location = "/login";
    }else{
      if(location.pathname === "/"){
       location.assign("/job");
      }
    }
  }
  render() {

    return (this.props.children || <div></div>);
  }
}
