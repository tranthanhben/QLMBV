import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {isLoaded, loadList as loadK} from '../../actions/khoActions';
import ListK from './List';
import Modal from '../layout/Modal';
import * as layoutActions from '../../actions/layoutActions';
import {Style} from '../Style';
import EditK from './Editor/Edit';

@connect(state =>({
  menuparse: state.layout.menuparse,
  openmodal: state.layout.openmodal
}), {...layoutActions})
export default class Kho extends Component{
  static propTypes = {
    menuparse : PropTypes.object,
    openmodal : PropTypes.bool,
    openModal: PropTypes.func.isRequired
  }
  state = {
    isOpenEdit: false
  }
  static fetchData(store){
    if(!isLoaded(store.getState)){
      return store.dispatch(loadK());
    }
  }
  toggleModal() {
    this.props.openModal(!this.state.isOpenEdit);
    this.setState({isOpenEdit: !this.state.isOpenEdit})
  }
  render(){
    const {menuparse, openmodal} = this.props;
    const {isOpenEdit} = this.state;
    return (
      <div className='inner '>
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
                    <a ><span key="icoen" className={'fa fa-user'}></span>{" Kho Moi"}</a>
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
                      <EditK close={::this.toggleModal}></EditK>
                    </Modal> : null}
                    <ListK></ListK>
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

