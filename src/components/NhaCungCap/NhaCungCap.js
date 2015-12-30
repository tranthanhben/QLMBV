import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Modal from '../layout/Modal';
import EditNCC from './Editor/EditNCC';
import EditPDH from './Editor/EditPDH';
import EditPNH from './Editor/EditPNH';
import EditTT from './Editor/EditTTNCC'
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
    isOpenEdit: false,
    isEditPDH: false,
    isEditPNH: false,
    isEditTT: false
  }
  toggleModal() {
    this.props.openModal(!this.state.isOpenEdit);
    this.setState({isOpenEdit: !this.state.isOpenEdit});
  }
  openPDH(){
    this.props.openModal(!this.state.isEditPDH);
    this.setState({isEditPDH: !this.state.isEditPDH});
  }
  openPNH(){
    this.props.openModal(!this.state.isEditPNH);
    this.setState({isEditPNH: !this.state.isEditPNH});
  }
  openTT(){
    this.props.openModal(!this.state.isEditTT);
    this.setState({isEditTT: !this.state.isEditTT});
  }
  render(){
    const {menuparse, openmodal} = this.props;
    return <div className='inner '>
        <nav id="nav-header" className="navbar navbar-default navbar-fixed-top" style={{"zIndex":(openmodal? '-2':'0')}}>
          <div className="container-fluid mbv-nav">
            <div className="row">
              <div className="col-xs-3 visible-xs" ></div>
              <div className="col-xs-6 col-sm-4">
              <h4 style={{"lineHeight": "30px"}}>{menuparse[this.props.location.pathname]}</h4>
              </div>
              <div className="view-tabs col-xs-3 col-sm-8">
                <div className="navbar-content pull-right">
                <ul className="nav-main pull-right">
                  <li onClick={::this.openTT}>
                    <a ><span key="icoen" className={'fa fa-money'}></span>{" Tạo Hóa Đơn"}</a>
                  </li>
                  <li onClick={::this.openPNH}>
                    <a ><span key="icoen" className={'fa fa-truck fa-flip-horizontal'}></span>{" Tạo PNH"}</a>
                  </li>
                  <li onClick={::this.openPDH}>
                    <a ><span key="icoen" className={'fa fa-shopping-cart fa-flip-horizontal'}></span>{" Tạo PDH"}</a>
                  </li>
                  <li onClick={::this.toggleModal}>
                    <a ><span key="icoen" className={'fa fa-user'}></span>{" Tạo NCC"}</a>
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
                {
                  this.state.isOpenEdit?
                  <Modal  modalStyle={Style.content_40}
                  overlayStyle= {Style.overlay}
                  close = {::this.toggleModal}
                  overlayClassName='modaldumb modalOverlay modalOverlay--after-open '
                  modalClassName='dumb modalContent modalContent--after-open '
                  >
                    <EditNCC close={::this.toggleModal}></EditNCC>
                  </Modal> : null
                }
                {
                  this.state.isEditPDH?
                  <Modal  modalStyle={Style.content_80}
                  overlayStyle= {Style.overlay}
                  close = {::this.openPDH}
                  overlayClassName='modaldumb modalOverlay modalOverlay--after-open '
                  modalClassName='dumb modalContent modalContent--after-open '
                  >
                    <EditPDH close={::this.openPDH}></EditPDH>
                  </Modal> : null
                }
                {
                  this.state.isEditPNH?
                  <Modal  modalStyle={Style.content_90}
                  overlayStyle= {Style.overlay}
                  close = {::this.openPNH}
                  overlayClassName='modaldumb modalOverlay modalOverlay--after-open '
                  modalClassName='dumb modalContent modalContent--after-open '
                  >
                    <EditPNH close={::this.openPNH}></EditPNH>
                  </Modal> : null
                }
                {
                  this.state.isEditTT?
                  <Modal  modalStyle={Style.content_80}
                  overlayStyle= {Style.overlay}
                  close = {::this.openTT}
                  overlayClassName='modaldumb modalOverlay modalOverlay--after-open '
                  modalClassName='dumb modalContent modalContent--after-open '
                  >
                    <EditTT close={::this.openTT}></EditTT>
                  </Modal> : null
                }
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
