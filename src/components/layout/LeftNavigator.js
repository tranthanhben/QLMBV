import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {logout} from '../../actions/userActions';
import {bindActionCreators} from 'redux';
import Modal from './Modal';
import {Style} from '../Style';
import UserInfo from './userInfo';
// ten khong qua 17 ky tu

class LeftNav extends Component {
  static propTypes = {
    menu: PropTypes.array,
    params: PropTypes.object,
    user: PropTypes.object,
    logout: PropTypes.func.isRequired,
  }
  state = {
    openTabs:{},
    isOpenUser: false
  }
  logout(){
    this.props.logout();
  }
  openTab(name){
    return ()=>{
      event.preventDefault();
      let obj = this.state.openTabs;
      if(!obj[name]){
        obj[name]= true;
      }else{
        obj[name]= !obj[name];
      }
      this.setState({openTabs: obj});
    }
  }
  toggleModal() {
    this.setState({isOpenUser: !this.state.isOpenUser})
  }
  render (){
    const {menu, params, user, openmodal} = this.props;
    let openTabs = this.state.openTabs;
    return (
      <div className='tabs sidebar-nav-container' style={{"zIndex":(this.state.isOpenUser? '23':'22')}}>
      <div id="avatar" >
        <div className="mbv-grid container-fluid" style={{"zIndex":"9999998" }}>
          <div className="row fg-white" onClick={::this.toggleModal}>
            <div className="col-xs-4 col-xs-collapse-right" ><img src={user && user.avatar? user.avatar:"/images/avatar0.png"} width="40" height="40" /></div>
            <div id="avatar-col" className="col-xs-8 col-xs-collapse-left" >
              <div style={{"textAlign":"center","fontSize":"16px","position":"relative"}} >{user.name? user.name:(user.role === 'admin'? 'Admin':'Nhân Viên') }</div>
              <div style={{"textAlign":"center","fontSize":"11px","position":"relative"}} >{user.role=== 'admin'? 'Admin':'Nhân Viên'}</div>
            </div>
          </div>
          {
            this.state.isOpenUser?
            <Modal  modalStyle={Style.content_40}
            overlayStyle= {Style.overlay}
            close={::this.toggleModal}
            overlayClassName='modaldumb modalOverlay modalOverlay--after-open '
            modalClassName='dumb modalContent modalContent--after-open '
            >
              <UserInfo close={::this.toggleModal}></UserInfo>
            </Modal> : null
          }
        </div>
      </div>
      {menu.map((items, index) => {
          return [
            index > 0 ? <div className='space'/> : null,
            <ul style={{"marginBottom":"0"}} key={index} className="items sidebar-nav">
                {items.map((item) => {
                  if(item.role && user.role !=='adim'){
                    return null;
                  }
                  if(item.sub){
                    let liClass = openTabs && openTabs[item.name]? "open":"";
                    let regex = new RegExp(item.href);
                    liClass = regex.test(params.pathname)? "open":liClass;
                    return (
                      <li name="" className={liClass} tabIndex="-1" key={item.label} >
                      <a tabIndex="-1" onClick={::this.openTab(item.name)}>
                        <span className={"mbv-icon fa fa-folder-"+(liClass? "open-o":"o")}></span>
                        <span className="name">
                          <span >
                            <span >{item.label}</span>
                            <span className="label label-default bg-darkgreen45 fg-white">{item.children.length}</span>
                          </span>
                        </span>
                        <span className={"mbv-icon fontello toggle-button fa fa-chevron-left "+liClass}></span>
                      </a>
                      <ul className="sidebar-nav">
                        {item.children.map((sub,index)=>{
                          return (
                            <li name={sub.label} key={sub.label} className={sub.href === params.pathname? "active":""} tabIndex="-1" >
                              <Link tabIndex="-1" to={sub.href}>
                                <span className={"mbv-icon fa fa-"+ sub.icon}>
                            </span>
                                <span className="name">{sub.label}</span>
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </li>
                    )
                  }
                  if(item.href === "/logout"){
                    return <li name={item.label} key={item.label} className={item.href === params.pathname? "active":""} tabIndex="-1" >
                      <Link tabIndex="-1" to={item.href}onClick={::this.logout} >
                        <span className={"mbv-icon glyphicon glyphicon-"+item.icon}>
                        </span>
                        <span className="name">{item.label}</span>
                      </Link>
                    </li>
                  }
                  return (
                    <li name={item.label} key={item.label} className={item.href === params.pathname? "active":""} tabIndex="-1" >
                      <Link tabIndex="-1" to={item.href}>
                        <span className={"mbv-icon fa fa-"+item.icon}>
                        </span>
                        <span className="name">{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
          ];
        })}
      </div>
    )
  }
}

@connect(state => ({
  menu: state.layout.menu,
  user: state.user.user
}))

export default class LeftNavContainer {
  static propTypes = {
    menu : PropTypes.array,
    params: PropTypes.object,
    user: PropTypes.object,
    dispatch: PropTypes.func.isRequired
  }
  render(){
    const {menu, params, user, dispatch} = this.props;
    return (<LeftNav menu={menu} user={user} params={params} {...bindActionCreators({logout}, dispatch)}></LeftNav>);
  }
}
