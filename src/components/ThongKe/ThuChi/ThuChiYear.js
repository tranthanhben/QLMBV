import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Line, Pie, Bar} from 'react-chartjs';
import {changeDTI, datetime, reveserChangeDTI, setValue, getYear, startMonth, endMonth} from '../../../meta';
import {DataBar,DataPie} from '../../Style';
import * as thongkeActions from '../../../actions/thongkeActions';

function xulydulieuyear (datas=[]) {
  let labels = ["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"]
  if(datas.length === 0){
    return {
      thu:[],
      chi:[]
    };
  }
  let datasets = {
    thu: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    chi: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }
  datas.map(data => {
    let index = data.group[1] - 1;
    let {thu, chi} = congtungngay(data.reduction);
    datasets.thu[index] = thu;
    datasets.chi[index] = chi*-1;
  })
  return {...datasets};
}
function congtungngay(data=[]){
  let thu = 0;
  let chi = 0;
  data.map(db=>{
    if(db.thanhtoan > 0){
      thu += db.thanhtoan;
    }else{
      chi += db.thanhtoan;
    }
  });
  return {thu, chi};
}
@connect(state =>({
  listTC: state.thongke.listTC
}),{...thongkeActions})
export default class TCYear extends Component {
  static propTyeps ={
    listTC: PropTypes.array,
    loadTC: PropTypes.func.isRequired,
    year: PropTypes.string
  }
  state={
    datasets: xulydulieuyear(this.props.listTC) || {},
    options: {
      start: getYear(changeDTI(datetime(new Date()))),
      end: getYear(changeDTI(datetime(new Date()))),
      loai: 'year',
      period: 'month'
    }
  }
  componentWillMount(){
    this.props.loadTC(this.state.options || {loai: 'year',period:'month'});
  }
  componentWillReceiveProps(nextProps) {
    let datasets = {...xulydulieuyear(nextProps.listTC)};
    this.setState({datasets: datasets});
  }
  render(){
    const {datasets} = this.state;
    return (
      <div className="mbv-grid container-fluid" style={{"zIndex": "9999983"}}>
        <div className="row">
          <div className="col-xs-12">
            <div id="example_wrapper" className="dataTables_wrapper">
              <TKTCBar datasets={datasets} year={this.props.year}></TKTCBar>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//Thong Ke Nhap Xuat
export class TKTCBar extends Component{
  static propTypes = {
    datasets: PropTypes.object,
    year: PropTypes.string
  }
  state = {
    dataTC: {
      labels: ["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"],
      datasets: [{
        label: "My First dataset",
        fillColor: "rgba(247,70,74,0.5)",
        strokeColor: "rgba(247,70,74,0.8)",
        highlightFill: "rgba(247,70,74,0.75)",
        highlightStroke: "rgba(247,70,74,1)",
        data: this.props.datasets && this.props.datasets.thu || []
      }, {
        label: "My Second dataset",
        fillColor: "rgba(70,191,189,0.5)",
        strokeColor: "rgba(70,191,189,0.8)",
        highlightFill: "rgba(70,191,189,0.75)",
        highlightStroke: "rgba(70,191,189,1)",
        data: this.props.datasets && this.props.datasets.chi ||[]
      }]
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({
     dataTC: {
      labels: ["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"],
      datasets: [{
        label: "My First dataset",
        fillColor: "rgba(247,70,74,0.5)",
        strokeColor: "rgba(247,70,74,0.8)",
        highlightFill: "rgba(247,70,74,0.75)",
        highlightStroke: "rgba(247,70,74,1)",
        data: nextProps.datasets && nextProps.datasets.thu || []
      }, {
        label: "My Second dataset",
        fillColor: "rgba(70,191,189,0.5)",
        strokeColor: "rgba(70,191,189,0.8)",
        highlightFill: "rgba(70,191,189,0.75)",
        highlightStroke: "rgba(70,191,189,1)",
        data: nextProps.datasets && nextProps.datasets.chi ||[]
      }]
    }
    })
  }
  render(){
    const {dataTC} = this.state;
    if(this.props.datasets.thu.length === 0){
      return <div className="header-chart" style={{"textAlign": 'center'}}>
                <strong>{"Không có Thu\/Chi theo năm này!"}</strong>
                </div>
    }
    return <div id="example" className="display preline thongke">
              <div className="header-chart" style={{"textAlign": 'center'}}>
              <strong>{"Thống kê Thu\/Chi theo năm " + this.props.year}</strong>
              </div>
              <br/>
              <Bar data={this.state.dataTC} options={DataBar.chartOptions} width="900" height="415" ></Bar>
              <br/>
              <br/>
              <div className="chuthich_mau" >
                <div className="tungmau" style={{"color":"#F7464A"}}>
                  <span className="mau">■ </span>
                  <span className="chuthich">{"Số Tiền Thu"}</span>
                </div>
                <div className="tungmau" style={{"color":"#46BFBD"}} >
                  <span className="mau">■ </span>
                  <span className="chuthich">{"Số Tiền Chi"}</span>
                </div>
              </div>
            </div>;
  }
}
