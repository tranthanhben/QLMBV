import React, {Component, PropTypes} from 'react';

export default class PanelView {
  static propTypes ={
    classTab: PropTypes.string
  }

  render(){
    let classTab = !this.props.classTab ? "": this.props.classTab;
    return (
      <div className={'inner '+classTab}>
        <nav id="nav-header" className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid mbv-nav">
            <div className="row">
              <div className="col-xs-3 visible-xs" ></div>
              <div className="col-xs-6 col-sm-4">
              Logo & Mua ban vai
              </div>
              <div className="col-xs-3 col-sm-8">
                <div className="navbar-content pull-right">Logout</div>
              </div>
            </div>
          </div>
        </nav>
        <div id="body" className="">
        <div className="mbv-grid container-fluid" >
          <div className="row">
            <div className="col-xs-12">
              <div className="mbv-panel">
                <div className="mbv-panel-body">
                  {this.props.children}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

