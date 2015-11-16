import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {logout} from '../../actions/userActions';
import {bindActionCreators} from 'redux';

class LeftNav extends Component {
  static propTypes = {
    menu: PropTypes.array,
    params: PropTypes.object,
    logout: PropTypes.func.isRequired
  }
  state = {
    openTabs:{}
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
  render (){
    const {menu, params} = this.props;
    let openTabs = this.state.openTabs;
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
      {menu.map((items, index) => {
          return [
            index > 0 ? <div className='space'/> : null,
            <ul style={{"marginBottom":"0"}} key={index} className="items sidebar-nav">
                {items.map((item) => {
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
