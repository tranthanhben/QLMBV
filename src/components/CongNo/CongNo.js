import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Modal from '../layout/Modal';
import * as layoutActions from '../../actions/layoutActions';
import {Style} from '../Style';
import ListKH from './ListKH';
import ListNCC from './ListNCC';
import {isLoaded as isLoadKH, loadList as loadKH} from '../../actions/khachhang/khachhangActions';
import {isLoaded as isLoadNCC, loadList as loadNCC} from '../../actions/nhacungcap/nhacungcapActions';
@connect(state =>({
  menuparse: state.layout.menuparse,
  openmodal: state.layout.openmodal
}), {...layoutActions})
export default class CongNo extends Component{
  static propTypes = {
    menuparse : PropTypes.object,
    openmodal : PropTypes.bool,
    openModal: PropTypes.func.isRequired
  }
  state = {
    isOpenEdit: false,
    viewfor: "khachhang"
  }
  static fetchData(store){
    const promises = [];
    if(!isLoadNCC(store.getState)){
     promises.push(store.dispatch(loadNCC()));
    }
    if(!isLoadKH(store.getState)){
     promises.push(store.dispatch(loadKH()));
    }
    return Promise.all(promises);
  }
  toggleModal() {
    this.props.openModal(!this.state.isOpenEdit);
    this.setState({isOpenEdit: !this.state.isOpenEdit})
  }
  changeView(){
    let value = event.target.value;
    this.setState({viewfor: value});
  }
  render(){
    const {menuparse, openmodal} = this.props;
    const {isOpenEdit, viewfor} = this.state;
    return (
      <div className='inner '>
        <nav id="nav-header" className="navbar navbar-default navbar-fixed-top" style={{"zIndex":(openmodal? '-2':'0')}}>
          <div className="container-fluid mbv-nav">
            <div className="row">
              <div className="col-xs-3 visible-xs" ></div>
              <div className="col-xs-9 col-sm-8">
                <div className="row">
                  <div className="col-md-6">
                  <h4 style={{"lineHeight": "30px"}}>{menuparse[viewfor]}</h4>
                  </div>
                  <div className="col-md-6">
                  <label style={{"lineHeight": "30px","display": "flex", "marginTop":"8"}} >Xem theo:
                      <select name="example_length" aria-controls="example" className=" form-control" style={{"width":"55%"}} onChange={::this.changeView} value={viewfor}>
                        <option value="khachhang">Khách Hàng</option>
                        <option value="nhacungcap">Nhà Cung Cấp</option>
                      </select></label>
                  </div>
                </div>
              </div>
              <div className="view-tabs col-xs-3 col-sm-4">
                <ul className="nav-main pull-right">
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
                    {viewfor === "khachhang"? <ListKH></ListKH>:<ListNCC></ListNCC>}
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

