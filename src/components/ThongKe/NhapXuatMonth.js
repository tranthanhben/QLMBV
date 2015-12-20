import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Line, Pie, Bar} from 'react-chartjs';
import {changeDTI, datetime, reveserChangeDTI, setValue, getMonth, startMonth, endMonth} from '../../meta';
import {DataBar,DataPie} from '../Style';
import * as thongkeActions from '../../actions/thongkeActions';

function xulydulieumonth (datas=[]) {
  let nhap = 0;
  let xuat = 0;
  return {nhap, xuat};
}
@connect(state =>({
  listNX: state.thongke.listNX
}),{...thongkeActions})
export class NXMonth extends Component {
  static propTyeps ={
    listNX: PropTypes.array,
    loadNX: PropTypes.func.isRequired
  }
  state={
    nhap: xulydulieumonth(this.props.listNX).nhap || 0,
    xuat: xulydulieumonth(this.props.listNX).xuat || 0,

  }
  componentWillMount(){
    this.props.loadNX(this.state.options || {loai: 'month',period:'day'});
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.listNX){
      let {nhap, xuat} = xulydulieumonth(nextProps.listNX);
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
              <div className="dataTables_length" id="example_length" style={{"display": "inline-flex"}}>

              </div>
              <div id="example_filter" className="dataTables_filter" style={{"display": "inline-flex", "float":"right"}}>

              </div>
              <TKNXPie nhap={300} xuat={-500*(-1)}></TKNXPie>

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
    dataNX: {
      labels: ["January", "February", "March", "April", "May", "June", "July", '','','','',''],
      datasets: [{
        label: "My First dataset",
        fillColor: "rgba(247,70,74,0.5)",
        strokeColor: "rgba(247,70,74,0.8)",
        highlightFill: "rgba(247,70,74,0.75)",
        highlightStroke: "rgba(247,70,74,1)",
        data: [65, 59, 80, 81, 56, 55, 40]
      }, {
        label: "My Second dataset",
        fillColor: "rgba(70,191,189,0.5)",
        strokeColor: "rgba(70,191,189,0.8)",
        highlightFill: "rgba(70,191,189,0.75)",
        highlightStroke: "rgba(70,191,189,1)",
        data: [28, 48, 40, 19, 86, 27, 90]
      }]
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({

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
              <Bar  data={dataNX} options={DataBar.chartOptions} width="1000" height="450" ></Bar>
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
