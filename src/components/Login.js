import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userActions from '../actions/userActions';

class LoginPage extends Component {
  static propTypes = {
    user: PropTypes.object,
    login: PropTypes.func.isRequired
  }

  state = {
    user: {
      email:"",
      password:""
    },
    message:""
  }

  onSubmit(user){
    this.props.login(user);
  }

  handleChange(event) {
    this.setState({ user: setValueUser(event, this.state.user) });
  }

  render(){
    return (
      <div className='page login'>
        <div className='space'></div>
        <div className='box'>
          <form onSubmit={()=>this.onSubmit(this.state.user)}>
            <p className='message'>
              {this.state.message}
              &nbsp;
            </p>
            <div className='form-group'>
              <input className='form-control' data-addr='username' placeholder='Username'
                onChange={::this.handleChange}/>
            </div>
            <div className='form-group'>
              <input className='form-control' data-addr='password' placeholder='Password'
                type='password'
                onChange={::this.handleChange}/>
            </div>
            <input className='btn btn-success form-control' type='submit' value='Login'/>
            <p className='help-block'>
            </p>
          </form>
        </div>
        <div className='space-2'></div>
      </div>
    )
  }
}
@connect (state =>({
  user: state.user.user
}))
export default class LoginPageContainer {
  static propTypes = {
    user: PropTypes.object,
    dispatch: PropTypes.func.isRequired
  }

  render(){
    const {user, dispatch} = this.props;
    return <LoginPage user={user} {...bindActionCreators(userActions, dispatch)}></LoginPage>
  }
}
