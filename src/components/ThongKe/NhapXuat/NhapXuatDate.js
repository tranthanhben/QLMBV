import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Line, Pie} from 'react-chartjs';
import {changeDTI, datetime, reveserChangeDTI, setValue} from '../../../meta';
import {DataBar,DataPie} from '../../Style';
import * as thongkeActions from '../../../actions/thongkeActions'
function xulydulieudate(datas=[]){
  let nhap = 0;
  let xuat = 0;
  datas.map(data =>{
    let db = data.reduction || [];
    db.map(d=>{
      if(d.chieudai > 0){
        nhap += d.chieudai;
      }else{
        xuat += d.chieudai;
      }
    })
  })
  return {nhap, xuat};
}
@connect(state =>({
  listNX: state.thongke.listNX
}),{...thongkeActions})
export default class NXDate extends Component {
  static propTyeps ={
    listNX: PropTypes.array,
    loadNX: PropTypes.func.isRequired
  }
  state={
    nhap: xulydulieudate(this.props.listNX).nhap || 0,
    xuat: xulydulieudate(this.props.listNX).xuat || 0
  }
  componentWillMount(){
    this.props.loadNX();
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.listNX){
      let {nhap, xuat} = xulydulieudate(nextProps.listNX);
      this.setState({nhap:nhap, xuat:xuat});
    }
  }

  render(){
    let {nhap, xuat, options} = this.state;
    return (
      <div className="mbv-grid container-fluid" style={{"zIndex": "9999983"}}>
        <div className="row">
          <div className="col-xs-12">
            <div id="example_wrapper" className="dataTables_wrapper">
              <TKNXPie nhap={nhap} xuat={xuat*(-1)}></TKNXPie>
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
  componentWillReceiveProps(nextProps){
    this.setState({
      dataNX : [{
        value: nextProps.nhap,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "Số Lượng Nhập"
      }, {
        value: nextProps.xuat,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Số Lượng Xuất"
      }]
    })
  }
  render(){
    const {dataNX} = this.state;
    const {nhap, xuat} = this.props;
    if(nhap === 0 && xuat===0){
      return <div className="header-chart" style={{"textAlign": 'center'}}>
                <strong>{"Không có nhập xuất theo ngày này!"}</strong>
                </div>
    }
    return <div id="example" className="table display preline dataTable">
              <div className="header-chart" style={{"textAlign": 'center'}}>
              <strong>{"Thống kê nhập xuất theo ngày"}</strong>
              </div>
              <br/>
              <Pie  data={dataNX} options={DataPie.chartOptions} width="1000" height="400" ></Pie>
              <br/>
              <br/>
              <div className="chuthich_mau" >
                <div className="tungmau" style={{"color":"#F7464A"}}>
                  <span className="mau">■ </span>
                  <span className="chuthich">{"Số Lượng Nhập"}</span>
                </div>
                <div className="tungmau" style={{"color":"#46BFBD"}} >
                  <span className="mau">■ </span>
                  <span className="chuthich">{"Số Lượng Xuất"}</span>
                </div>
              </div>
            </div>;
  }
}
