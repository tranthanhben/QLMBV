import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Modal from '../layout/Modal';
import Create from './EditorKH';
import * as layoutActions from '../../actions/layoutActions';

const customStyle = {
  overlay: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    overflowY:'auto'
  },
  content: {
    position: 'absolute',
    width: '60%',
    top: '20px',
    left: '20%',
    // right: '40px',
    bottom: '20px',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '10px 20px'
  }
}

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
    isOpenEdit: false
  }
  toggleModal() {
    this.props.openModal(!this.state.isOpenEdit);
    this.setState({isOpenEdit: !this.state.isOpenEdit})
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
                  <li onClick={::this.toggleModal}>
                  <a >
                  <span key="icoen" className={'glyphicon glyphicon-user'}></span>
                  {" KH Moi"}</a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div id="modal">

        </div>
        <div id="body" className="">
        <div className="mbv-grid container-fluid" >
          <div className="row">
            <div className="col-xs-12">
              <div className="mbv-panel">
                <div className="mbv-panel-body">
                {this.state.isOpenEdit?
                  <Modal  modalStyle={customStyle.content}
                  overlayStyle= {customStyle.overlay}
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
