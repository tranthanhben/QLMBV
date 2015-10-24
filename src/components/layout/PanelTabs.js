import React, {Component, PropTypes} from 'react';
import cx from 'classnames';
import {Link} from 'react-router';

export default class PanelTabs extends Component{
  static propTypes ={
    cmds: PropTypes.array,
    tabs: PropTypes.array
  }

  state = {
    active: this.props.tabs[0]
  }

  selectTab = (tab) => {
    this.setState({ active: tab });
  }

  render(){
    const {cmds, tabs} = this.props;
    const elemProps = {...this.state, selectTab:this.selectTab};
    return (
      <div className='view'>
        <div className='view-tabs'>
          <ul className='nav-main pull-right'>
            {cmds && cmds.map((cmd, index) => {
              return (
                <li className={cmd.active ? 'active' : ''} key={index}>
                  <Link from="/" to={cmd.href}>
                    {cmd.icon ? [
                      <span key="icon" className={'glyphicon glyphicon-' + cmd.icon}></span>,
                      ' '
                    ] : null}
                    {cmd.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className='nav-view'>
            {tabs.map(tab => {
              return (
                <li className={cx({ 'active': this.state.active === tab })} key={tab.label} onClick={() => this.selectTab(tab)}>
                  <a>
                    {tab.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className='clearfix'/>
        </div>
          {React.Children.map(this.props.children, child => {
            return React.cloneElement(child, elemProps);
          })}
      </div>
    );
  }
}

export class PanelTabLeft extends Component {
  render(){
    const {tab, active} = this.props;
    const elemProps = {selectTab:this.props.selectTab};
    return (
        <div key={tab.label}
          className={cx({
            'view-content': true,
            'active': active === tab
          })}>
          <div className='panel-categories flex-col flex'>
            <div className='flex-panel'>
              {React.Children.map(this.props.children, child => {
                return React.cloneElement(child, elemProps);
              })}
            </div>
          </div>
        </div>
    );
  }
}

export class PanelTabRight extends Component {
  render(){
    const {tab, active} = this.props;
    return (
        <div key={tab.label}
          className={cx({
            'view-content': true,
            'active': active === tab
          })}>
          <div className='panel-categories flex-col flex'>
            <div className='flex-panel'>
              {this.props.children}
            </div>
          </div>
        </div>
    );
  }
}
