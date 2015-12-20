import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Line, Pie} from 'react-chartjs';
import {makeQuery,changeDTI, datetime, reveserChangeDTI} from '../../meta';
import {DataBar,DataPie} from '../Style';

function xulydulieudate(data){
  let nhap = 0;
  let xuat = 0;
  let db =data[0] && data[0].reduction || [];
  db.map(d=>{
    if(d.soluong > 0){
      nhap += d.soluong;
    }else{
      xuat += d.soluong;
    }
  })
  return {nhap, xuat};
}
export class NXDate extends Component {
  static propTyeps ={
    listNX: PropTypes.array,
  }
  state={
    nhap: xulydulieudate(this.props.listNX).nhap || 0,
    xuat: xulydulieudate(this.props.listNX).xuat || 0
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.listNX){
      let {nhap, xuat} = xulydulieudate(nextProps.listNX);
      this.setState({nhap:nhap, xuat:xuat});
    }
  }
  render(){
    const {nhap, xuat} = this.state;
    return (
      <div className="mbv-grid container-fluid" style={{"zIndex": "9999983"}}>
        <div className="row">
          <div className="col-xs-12">
            <div id="example_wrapper" className="dataTables_wrapper">
              <div className="dataTables_length" id="example_length" style={{"display": "inline-flex"}}>
                <label className="line-height" style={{"display": "inline-flex"}}>
                <span style={{"display": "inline-table"}}>{"Thong ke nhap xuat theo ngay"}</span>
                </label>
              </div>
              <div id="example_filter" className="dataTables_filter" style={{"display": "inline-flex", "float":"right"}}>
                <label className="line-height" style={{"display": "flex"}}>
                </label>
              </div>
              <div id="example" className="table display preline dataTable">
                <TKNXPie nhap={nhap} xuat={xuat*(-1)}></TKNXPie>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//Thong Ke Nhap Xuat
export class TKNXPie extends Component{
  static propTypes = {
    nhap: PropTypes.number,
    xuat: PropTypes.number,
  }
  state = {
    dataNX : [{
    value: this.props.nhap,
    color: "#F7464A",
    highlight: "#FF5A5E",
    label: "Số Lượng Nhập"
  }, {
    value: this.props.xuat,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "Số Lượng Xuất"
  }]}
  render(){
    const {dataNX} = this.state;
    const {nhap, xuat} = this.props;
    if(nhap === 0 && xuat===0){
      return <p>Không có giao dịch trong ngày!</p>
    }
    return <Pie  data={dataNX} options={DataPie.chartOptions} width="1000" height="450" ></Pie>;
  }
}
