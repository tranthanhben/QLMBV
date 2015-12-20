import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Line, Pie} from 'react-chartjs';
import {DataBar,DataPie} from '../Style';
import {isLoaded, loadNX} from '../../actions/thongkeActions';
import {makeQuery,changeDTI, datetime, reveserChangeDTI,getMonth, getYear, setValue} from '../../meta';
import {NXDate} from './NhapXuatDate';
import {NXMonth} from './NhapXuatMonth';
import * as thongkeActions from '../../actions/thongkeActions'
@connect(state =>({
  menuparse: state.layout.menuparse,
  listNX: state.thongke.listNX,
  openmodal: state.layout.openmodal
}),{...thongkeActions})
export default class ThongKe extends Component {
  static propTypes ={
    menuparse: PropTypes.object,
    listNX: PropTypes.array,
    openmodal : PropTypes.bool,
  }
  static fetchData(store){
    if(!isLoaded(store.getState)){
      return store.dispatch(loadNX());
    }
  }
  state = {
    viewfor: "date",
    month: getMonth(changeDTI(datetime(new Date()))),
    year: getYear(changeDTI(datetime(new Date()))),
    optionsdate:{
      start: changeDTI(datetime(new Date())),
      end: changeDTI(datetime(new Date())),
      loai: 'day',
      period: 'day'
    }
  }
  changeView(){
    let value = event.target.value;
    this.setState({viewfor: value});
  }
  changeMonth(){
    let value = event.target.value;
    this.props.loadNX({
      start: value || getMonth(changeDTI(datetime(new Date()))),
      end: value || getMonth(changeDTI(datetime(new Date()))),
      loai: 'month',
      period: 'day'
    })
    this.setState({
      month:value
    });
  }
  changeDate(){
    let obj = this.state.optionsdate;
    let addr = event.target.dataset.addr;
    let value = event.target.value;
    obj = setValue(obj, addr, value);
    this.props.loadNX(obj);
    this.setState({
      optionsdate:obj
    });
  }
  render(){
    const {openmodal} = this.props;
    const { viewfor, month, year, optionsdate} = this.state;
    return (
      <div className='inner '>
        <nav id="nav-header" className="navbar navbar-default navbar-fixed-top" style={{"zIndex":(openmodal? '-2':'0')}}>
          <div className="container-fluid mbv-nav">
            <div className="row">
              <div className="col-xs-3 visible-xs" ></div>
              <div className="col-xs-12">
                <div className="row">
                  <div className="col-md-3">
                  <h4 style={{"lineHeight": "30px"}}>Thống Kê</h4>
                  </div>
                  <div className="col-md-3">
                  <label style={{"lineHeight": "30px","display": "flex", "marginTop":"8"}} >Theo:
                      <select name="example_length" aria-controls="example" className=" form-control" style={{"width":"40%"}} onChange={::this.changeView} value={viewfor}>
                        <option value="date">Ngày</option>
                        <option value="month">Tháng</option>
                        <option value="year">Năm</option>
                      </select></label>
                  </div>
                  {this.state.viewfor === 'month'? <div className="col-md-4"><label style={{"lineHeight": "30px","display": "flex", "marginTop":"8"}} >
                  Chọn tháng
                    <input style={{"width":"65%"}}  type="month" className="form-control" value={month || ''} onChange={::this.changeMonth} data-addr="start"/>
                      </label></div>:null}
                {this.state.viewfor === 'date'? [
                  <div className="col-md-3" key="start">
                    <label style={{"lineHeight": "30px","display": "flex", "marginTop":"8"}} >{'Từ ngày'}
                    <input style={{"width":"65%"}}  type="date" max={optionsdate.end}className="form-control" value={optionsdate.start || ''} onChange={::this.changeDate} data-addr="start"/></label>
                  </div>,
                  <div className="col-md-3" key="end">
                    <label style={{"lineHeight": "30px","display": "flex", "marginTop":"8"}} >{'Đến ngày'}

                        <input style={{"width":"65%"}}  type="date" min={optionsdate.start} max={changeDTI(datetime(new Date()))} className="form-control" value={optionsdate.end || ''} onChange={::this.changeDate} data-addr="end"/>
                      </label>
                  </div>]:null}
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
                  {this.state.viewfor === "date"? <NXDate></NXDate>: this.state.viewfor === "month"?<NXMonth></NXMonth> : null
                  }
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

