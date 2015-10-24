import React, {Component, PropTypes} from 'react';

export default class PanelView {
  static propTypes ={
    classTab: PropTypes.string
  }

  render(){
    let classTab = !this.props.classTab ? "": this.props.classTab;
    return (
      <div className={'inner '+classTab}>
        {this.props.children}
      </div>
    )
  }
}

