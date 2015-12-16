import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Modal from '../layout/Modal';
import EditKH from './Editor/EditKH';
import EditPMH from './Editor/EditPMH';
import EditPXH from './Editor/EditPXH';
import * as layoutActions from '../../actions/layoutActions';
import {Style} from '../Style';

@connect(state =>({
  menuparse: state.layout.menuparse,
  openmodal: state.layout.openmodal
}),
{...layoutActions})
export default class KhachHang extends Component{
  static propTypes = {
    menuparse : PropTypes.object,
    openmodal : PropTypes.bool,
    openModal: PropTypes.func.isRequired
  }
  state = {
    isOpenEdit: false,
    isEditPMH: false,
    isEditPXH: false
  }
  toggleModal() {
    this.props.openModal(!this.state.isOpenEdit);
    this.setState({isOpenEdit: !this.state.isOpenEdit})
  }
  openPMH(){
    this.props.openModal(!this.state.isEditPMH);
    this.setState({isEditPMH: !this.state.isEditPMH});
  }
  openPXH(){
    this.props.openModal(!this.state.isEditPXH);
    this.setState({isEditPXH: !this.state.isEditPXH});
  }
  render() {
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
                <ul className="nav-main pull-right">
                  <li onClick={::this.openPXH}>
                    <a ><span key="icoen" className={'fa fa-truck'}></span>{" Tạo PXH"}</a>
                  </li>
                  <li onClick={::this.openPMH}>
                    <a ><span key="icoen" className={'fa fa-shopping-cart '}></span>{" Tạo PMH"}</a>
                  </li>
                  <li onClick={::this.toggleModal}>
                    <a ><span key="icoen" className={'fa fa-user'}></span>{" Tạo KH"}</a>
                  </li>
                </ul>
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
                    <EditKH close={::this.toggleModal}></EditKH>
                  </Modal> : null}
                  {
                  this.state.isEditPMH?
                  <Modal  modalStyle={Style.content_80}
                  overlayStyle= {Style.overlay}
                  close = {::this.openPMH}
                  overlayClassName='modaldumb modalOverlay modalOverlay--after-open '
                  modalClassName='dumb modalContent modalContent--after-open '
                  >
                    <EditPMH close={::this.openPMH}></EditPMH>
                  </Modal> : null
                }
                {
                  this.state.isEditPXH?
                  <Modal  modalStyle={Style.content_80}
                  overlayStyle= {Style.overlay}
                  close = {::this.openPXH}
                  overlayClassName='modaldumb modalOverlay modalOverlay--after-open '
                  modalClassName='dumb modalContent modalContent--after-open '
                  >
                    <EditPXH close={::this.openPXH}></EditPXH>
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
