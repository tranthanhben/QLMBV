import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userActions from '../actions/userActions';
import {setValueLogin, validateEmail, parseError} from '../meta';


function checkRequire(user){
  user = user || {};
  if(!user.username){
    return "Vui lòng nhập Username!"
  }
  if(!user.password){
    return "Vui lòng nhập Password!"
  }
  return '';
}
class LoginPage extends Component {
  static propTypes = {
    error: PropTypes.object,
    login: PropTypes.func.isRequired
  }

  state = {
    user: {
      username:"",
      password:""
    },
    message:"",
    submiting: false,
    submited: false
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.error){
      this.setState({
        submiting: false,
        message: parseError(nextProps.error.code)
      });
    }
  }
  onSubmit(){
    event.preventDefault();
    this.setState({submiting: true, submited: true});
    let user = {};
    let refs = this.refs
    user.username = refs.username.getDOMNode().value.trim();
    user.password = refs.password.getDOMNode().value.trim();
    if(checkRequire(user)){
      this.setState({message: checkRequire(user), submiting: false});
    }else{
      this.props.login(user);
    }
  }

  handleRequireEmail(){
    let mes = '';
    let user = this.state.user;
    if(!user.username){
      mes = "Vui lòng nhập Username!"
    }
    this.setState({message: mes});
  }

  handleRequirePassword(){
    let mes = '';
    let user = this.state.user;
    if(!user.password){
      mes = "Vui lòng nhập password!"
    }
    this.setState({message: mes});
  }

  handleChange(event) {
    this.setState({ user: setValueLogin(event, this.state.user), submited: false });
  }

  render(){
    const {user, message, submited, submiting}= this.state;
    let flag = checkRequire(user);
    return (
      <div className='page login'>
        <form onSubmit={::this.onSubmit}>
        <div className="logo"></div>
        <div className="login-block">
            <h1>Đăng Nhập</h1>
            <input id="username" type="username" data-addr='username' ref="username" placeholder='Username'
                  onChange={::this.handleChange} onBlur={::this.handleRequireEmail} />
            <input id="password" data-addr='password' ref="password" placeholder='Password'
                  type='password'
                  onChange={::this.handleChange} onBlur={::this.handleRequirePassword} />
            <button className='btn btn-success form-control' type='submit'  value='Login' disabled={flag || submited ? 'disabled' : ''}>{submiting? <span className="fa fa-spinner fa-pulse"></span>:'Đăng nhập'}</button>
            {message && submited && !submiting? <p className='help-block required'>
              {message}
            </p>:null}
        </div>
        </form>
      </div>
    )
  }
}
@connect (state =>({
  error: state.user.errorLogin
}))
export default class LoginPageContainer {
  static propTypes = {
    error: PropTypes.object,
    dispatch: PropTypes.func.isRequired
  }

  render(){
    const {error, dispatch} = this.props;
    return <LoginPage error={error} {...bindActionCreators(userActions, dispatch)}></LoginPage>
  }
}
