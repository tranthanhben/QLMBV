import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Line, Pie} from 'react-chartjs';
import {DataBar,DataPie} from '../Style';
import {isLoaded, loadNX} from '../../actions/thongkeActions';
import {makeQuery,changeDTI, datetime, reveserChangeDTI} from '../../meta';
import {NXDate} from './NhapXuat';

@connect(state =>({
  menuparse: state.layout.menuparse,
  listNX: state.thongke.listNX
}))
export default class ThongKe extends Component {
  static propTypes ={
    menuparse: PropTypes.object,
    listNX: PropTypes.array
  }
  static fetchData(store){
    if(!isLoaded(store.getState)){
      return store.dispatch(loadNX());
    }
  }
  state = {
    options:{
      start: changeDTI(datetime(new Date())),
      end: changeDTI(datetime(new Date())),
      period: 'day'
    }
  }
  render(){
    return (
      <div className='inner '>
        <nav id="nav-header" className="navbar navbar-default navbar-fixed-top" >
          <div className="container-fluid mbv-nav">
            <div className="row">
              <div className="col-xs-3 visible-xs" ></div>
              <div className="col-xs-9 col-sm-8">
                <div className="row">
                  <div className="col-md-6">
                  <h4 style={{"lineHeight": "30px"}}>Thống Kê</h4>
                  </div>
                  <div className="col-md-6">
                  <label style={{"lineHeight": "30px","display": "flex", "marginTop":"8"}} ></label>
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
                    <NXDate listNX={this.props.listNX}></NXDate>
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

