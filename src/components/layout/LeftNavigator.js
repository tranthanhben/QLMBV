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
        <div className='brand'/>
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
