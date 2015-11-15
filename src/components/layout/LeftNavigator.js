import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {logout} from '../../actions/userActions';
import {bindActionCreators} from 'redux';

class LeftNav extends Component {
  static propTypes = {
    menu: PropTypes.array,
    params: PropTypes.object,
    logout: PropTypes.func.isRequired,
    resetJob: PropTypes.func.isRequired
  }

  logout(){
    this.props.logout();
  }

  handleReset(item){
    if(item.href === "/job"){
      this.props.resetJob();
    }
  }
  render (){
    const {menu, params} = this.props;
    return (
      <div className='tabs sidebar-nav-container'>
      <div id="avatar" >
        <div className="mbv-grid container-fluid" style={{"zIndex":"9999998" }}>
          <div className="row fg-white" >
            <div className="col-xs-4 col-xs-collapse-right" ><img src="/images/avatar0.png" width="40" height="40" /></div>
            <div id="avatar-col" className="col-xs-8 col-xs-collapse-left" >
              <div style={{"textAlign":"center","fontSize":"16px","position":"relative"}} >Anna Sanchez</div>
              <div style={{"textAlign":"center","fontSize":"12px","position":"relative"}} >Nhan Vien</div>
            </div>
          </div>
        </div>
      </div>

        <ul style={{"margin-bottom":"0"}} className="items sidebar-nav">
          <li name="Dashboard" tabIndex="-1" href="/app/dashboard">
            <a tabIndex="-1" href="/app/dashboard">
              <span className="mbv-icon icon-fontello-gauge">
              </span>
              <span className="name">Dashboard</span>
            </a>
          </li>
          <li name="" className="open" tabIndex="-1">
            <a tabIndex="-1"  href="">
              <span className="mbv-icon fa fa-folder-open-o"></span>
              <span className="name">
                <span >
                  <span >Mailbox </span>
                  <span className="label label-default bg-darkgreen45 fg-white">3</span>
                </span>
              </span>
              <span className="mbv-icon fontello toggle-button fa fa-chevron-left open"></span>
            </a>
            <ul className="sidebar-nav">
              <li name="Inbox" className="active" tabIndex="-1" href="/app/mailbox/inbox">
                <a tabIndex="-1" href="/app/mailbox/inbox">
                  <span className="mbv-icon fa fa-file-o">
              </span>
                  <span className="name">Inbox</span>
                </a>
              </li>
              <li name="Mail" tabIndex="-1" href="/app/mailbox/mail">
                <a tabIndex="-1" href="/app/mailbox/mail">
                  <span className="mbv-icon fa fa-file-o"></span>
                  <span className="name">Mail</span>
                </a>
              </li>
              <li name="Compose" tabIndex="-1" href="/app/mailbox/compose">
                <a tabIndex="-1" href="/app/mailbox/compose">
                  <span className="mbv-icon fa fa-file-o">
              </span>
                  <span className="name">Compose</span>
                </a>
              </li>
            </ul>
          </li>
          <li name="Gallery" tabIndex="-1" href="/app/gallery">
            <a tabIndex="-1" href="/app/gallery">
              <span className="mbv-icon fa fa-folder-o"></span>
              <span className="name">Gallery</span>
            </a>
          </li>
        </ul>
        <div className='space'/>
        <ul style={{"margin-bottom":"0"}} className="items sidebar-nav">
          <li name="Social" tabIndex="-1" href="/app/social">
            <a tabIndex="-1" href="/app/social">
              <span className="mbv-icon fa fa-folder-o"></span>
              <span className="name">Social</span>
            </a>
          </li>
          <li name="" tabIndex="-1">
            <a tabIndex="-1" href="">
              <span className="mbv-icon fa fa-folder-o"></span>
              <span className="name">
                <span >
                  <span >Blog </span>
                  <span className="label label-default bg-darkcyan fg-white">2</span>
                </span>
              </span>
              <span className="mbv-icon fontello toggle-button fa fa-chevron-left"></span>
            </a>
            <ul className="sidebar-nav">
              <li name="Posts" tabIndex="-1" href="/app/blog/posts">
                <a tabIndex="-1" href="/app/blog/posts">
                  <span className="mbv-icon icon-feather-layout"></span>
                  <span className="name">Posts</span>
                </a>
              </li>
              <li name="Single Post" tabIndex="-1" href="/app/blog/post">
                <a tabIndex="-1" href="/app/blog/post">
                  <span className="mbv-icon icon-feather-paper"></span>
                  <span className="name">Single Post</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}

@connect(state => ({
  menu: state.layout.menu
}))

export default class LeftNavContainer {
  static propTypes = {
    menu : PropTypes.array,
    params: PropTypes.object,
    dispatch: PropTypes.func.isRequired
  }
  render(){
    const {menu, params, dispatch} = this.props;
    return (<LeftNav menu={menu} params={params} {...bindActionCreators({logout}, dispatch)}></LeftNav>);
  }
}
