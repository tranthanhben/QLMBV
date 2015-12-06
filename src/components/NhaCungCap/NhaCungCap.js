import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Modal from '../layout/Modal';
import Create from './Editor/Create';
import * as layoutActions from '../../actions/layoutActions';
import {Style} from '../Style';

@connect(state =>({
  menuparse: state.layout.menuparse,
  openmodal: state.layout.openmodal
}),
{...layoutActions})
export default class NhaCungCap extends Component {
  static propTypes = {
    menuparse : PropTypes.object,
    openmodal : PropTypes.bool,
    openModal: PropTypes.func.isRequired
  }
  state = {
    isOpenEdit: false
  }
  toggleModal() {
    this.props.openModal(!this.state.isOpenEdit);
    this.setState({isOpenEdit: !this.state.isOpenEdit});
  }
  render(){
    const {menuparse, openmodal} = this.props;
    return <div className='inner '>
        <nav id="nav-header" className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid mbv-nav">
            <div className="row">
              <div className="col-xs-3 visible-xs" ></div>
              <div className="col-xs-6 col-sm-4">
              <h4 style={{"lineHeight": "30px"}}>{menuparse[this.props.location.pathname]}</h4>
              </div>
              <div className="view-tabs col-xs-3 col-sm-8">
                <div className="navbar-content pull-right">
                <ul className="nav-main pull-right">
                  <li >
                    <a ><span key="icoen" className={'fa fa-truck fa-flip-horizontal'}></span>{" Tao PNH"}</a>
                  </li>
                  <li >
                    <a ><span key="icoen" className={'fa fa-shopping-cart fa-flip-horizontal'}></span>{" Tao PDH"}</a>
                  </li>
                  <li onClick={::this.toggleModal}>
                    <a ><span key="icoen" className={'fa fa-user'}></span>{" Tao NCC"}</a>
                  </li>
                </ul>
                </div>
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
                {this.state.isOpenEdit?
                  <Modal  modalStyle={Style.content_60}
                  overlayStyle= {Style.overlay}
                  close={::this.toggleModal}
                  overlayClassName='modaldumb modalOverlay modalOverlay--after-open '
                  modalClassName='dumb modalContent modalContent--after-open '
                  >
                    <Create close={::this.toggleModal}></Create>
                  </Modal> : null}
                  {this.props.children}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  }
}
