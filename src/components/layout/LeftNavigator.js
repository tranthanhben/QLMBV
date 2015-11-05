import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {logout} from '../../actions/userActions';
import {resetJob} from '../../actions/jobActions';
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
      <div className='tabs'>
      <div id="avatar" >
        <div className="mbv-grid container-fluid" style={{"zIndex":"9999998" }}>
          <div className="row fg-white" >
            <div className="col-xs-4 col-xs-collapse-right" ><img src="/images/avatar0.png" width="40" height="40" /></div>
            <div id="avatar-col" className="col-xs-8 col-xs-collapse-left" >
              <div style={{"top":"15px","font-size":"16px","line-height":"1","position":"relative"}} >Anna Sanchez</div>
              <div style={{"top":"31px", "font-size":"12px","line-height":"1","position":"relative"}} >Nhan Vien</div>
            </div>
          </div>
        </div>
      </div>
        {menu.map((items, index) => {
          return [
            index > 0 ? <div className='space'/> : null,
            <ul className='items'>
                {items.map((item) => {
                  if(item.href === "/logout"){
                    return <li
                      key={item.label} >
                      <Link to={item.href} activeClassName="active" onClick={::this.logout}>
                        <span className={'glyphicon glyphicon-' + item.icon}/>
                        {item.label}
                      </Link>
                    </li>
                  }
                  return (
                    <li
                      key={item.label}>
                      <Link to={item.href} activeClassName="active" onClick={()=>this.handleReset(item)}>
                        <span className={'glyphicon glyphicon-' + item.icon}/>
                        {item.label}
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
    return (<LeftNav menu={menu} params={params} {...bindActionCreators({logout, resetJob}, dispatch)}></LeftNav>);
  }
}
