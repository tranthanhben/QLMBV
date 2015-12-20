import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {isLoaded, loadList as loadLV} from '../../actions/loaivaiActions';
import ListLV from './ListLV';
import Modal from '../layout/Modal';
import * as layoutActions from '../../actions/layoutActions';
import {Style} from '../Style';
import EditLV from './Editor/EditLV';

@connect(state =>({
  menuparse: state.layout.menuparse,
  openmodal: state.layout.openmodal
}), {...layoutActions})
export default class SanPham extends Component{
  static propTypes = {
    menuparse : PropTypes.object,
    openmodal : PropTypes.bool,
    openModal: PropTypes.func.isRequired
  }
  state = {
    viewfor: "loaivai",
    isOpenEdit: false
  }
  static fetchData(store){
    if(!isLoaded(store.getState)){
      return store.dispatch(loadLV());
    }
  }
  changeView(){
    let value = event.target.value;
    this.setState({viewfor: value});
  }
  toggleModal() {
    this.props.openModal(!this.state.isOpenEdit);
    this.setState({isOpenEdit: !this.state.isOpenEdit})
  }
  render(){
    const {menuparse, openmodal} = this.props;
    let {viewfor} = this.state;
    const {isOpenEdit} = this.state;
    return (
      <div className='inner '>
        <nav id="nav-header" className="navbar navbar-default navbar-fixed-top" style={{"zIndex":(openmodal? '-2':'0')}}>
          <div className="container-fluid mbv-nav">
            <div className="row">
              <div className="col-xs-3 visible-xs" ></div>
              <div className="col-xs-6 col-sm-4">
                <div className="row">
                  <div className="col-md-4">
                    <h4 style={{"lineHeight": "30px"}}>{menuparse[viewfor]}</h4>
                  </div>
                </div>
              </div>
              <div className="view-tabs col-xs-3 col-sm-8">
                <ul className="nav-main pull-right">
                  <li onClick={::this.toggleModal}>
                    <a ><span key="icoen" className={'fa fa-user'}></span>{" Loai Vai Moi"}</a>
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
                    <Modal  modalStyle={Style.content_40}
                    overlayStyle= {Style.overlay}
                    close={::this.toggleModal}
                    overlayClassName='modaldumb modalOverlay modalOverlay--after-open '
                    modalClassName='dumb modalContent modalContent--after-open '
                    >
                      <EditLV close={::this.toggleModal}></EditLV>
                    </Modal> : null}
                    <ListLV></ListLV>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
