import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
class LeftNav extends Component {
  static propTypes = {
    menu: PropTypes.array,
    params: PropTypes.object
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
                  return (
                    <li
                      key={item.label}>
                      <Link to={item.href} activeClassName="active" >
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
    params: PropTypes.object
  }
  render(){
    const {menu, params} = this.props;
    return (<LeftNav menu={menu} params={params}></LeftNav>);
  }
}
