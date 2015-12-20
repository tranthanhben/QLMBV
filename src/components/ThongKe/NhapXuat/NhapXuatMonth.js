import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Line, Pie, Bar} from 'react-chartjs';
import {changeDTI, datetime, reveserChangeDTI, setValue, getMonth, startMonth, endMonth} from '../../../meta';
import {DataBar,DataPie} from '../../Style';
import * as thongkeActions from '../../../actions/thongkeActions';

function xulydulieumonth (datas=[]) {
  let labels = [];
  let datasets ={
    nhap:[],
    xuat:[]
  };
  datas.map(data => {
    labels.push(data.group[2] + "/" + data.group[1] + "/" + data.group[0]);
    let {nhap, xuat} = congtungngay(data.reduction);
    datasets.nhap.push(nhap);
    datasets.xuat.push(xuat*-1);
  })
  return {labels, datasets};
}
function congtungngay(data=[]){
  let nhap = 0;
  let xuat = 0;
  data.map(db=>{
    if(db.soluong > 0){
      nhap += db.soluong;
    }else{
      xuat += db.soluong;
    }
  });
  return {nhap, xuat};
}
@connect(state =>({
  listNX: state.thongke.listNX
}),{...thongkeActions})
export default class NXMonth extends Component {
  static propTyeps ={
    listNX: PropTypes.array,
    loadNX: PropTypes.func.isRequired
  }
  state={
    labels: xulydulieumonth(this.props.listNX).labels || [],
    datasets: xulydulieumonth(this.props.listNX).datasets || {},
    options: {
      start: getMonth(changeDTI(datetime(new Date()))),
      end: getMonth(changeDTI(datetime(new Date()))),
      loai: 'month',
      period: 'day'
    }
  }
  componentWillMount(){
    this.props.loadNX(this.state.options || {loai: 'month',period:'day'});
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.listNX){
      let {labels, datasets} = xulydulieumonth(nextProps.listNX);
      this.setState({labels, datasets});
    }
  }
  render(){
    let {labels, datasets} = this.state;
    return (
      <div className="mbv-grid container-fluid" style={{"zIndex": "9999983"}}>
        <div className="row">
          <div className="col-xs-12">
            <div id="example_wrapper" className="dataTables_wrapper">
              <TKNXPie labels={labels} datasets={datasets}></TKNXPie>
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
    labels: PropTypes.array,
    datasets: PropTypes.object,
  }
  state = {
    dataNX: {
      labels: this.props.labels || [],
      datasets: [{
        label: "My First dataset",
        fillColor: "rgba(247,70,74,0.5)",
        strokeColor: "rgba(247,70,74,0.8)",
        highlightFill: "rgba(247,70,74,0.75)",
        highlightStroke: "rgba(247,70,74,1)",
        data: this.props.datasets && this.props.datasets.nhap || []
      }, {
        label: "My Second dataset",
        fillColor: "rgba(70,191,189,0.5)",
        strokeColor: "rgba(70,191,189,0.8)",
        highlightFill: "rgba(70,191,189,0.75)",
        highlightStroke: "rgba(70,191,189,1)",
        data: this.props.datasets && this.props.datasets.xuat ||[]
      }]
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({
     dataNX: {
      labels: nextProps.labels || [],
      datasets: [{
        label: "My First dataset",
        fillColor: "rgba(247,70,74,0.5)",
        strokeColor: "rgba(247,70,74,0.8)",
        highlightFill: "rgba(247,70,74,0.75)",
        highlightStroke: "rgba(247,70,74,1)",
        data: nextProps.datasets && nextProps.datasets.nhap || []
      }, {
        label: "My Second dataset",
        fillColor: "rgba(70,191,189,0.5)",
        strokeColor: "rgba(70,191,189,0.8)",
        highlightFill: "rgba(70,191,189,0.75)",
        highlightStroke: "rgba(70,191,189,1)",
        data: nextProps.datasets && nextProps.datasets.xuat ||[]
      }]
    }
    })
  }
  render(){
    const {dataNX} = this.state;
    if(this.props.labels.length===0){
      return <div className="header-chart" style={{"textAlign": 'center'}}>
                <strong>{"Không có nhập xuất theo tháng này!"}</strong>
                </div>
    }
    return <div id="example" className="display preline thongke">
              <div className="header-chart" style={{"textAlign": 'center'}}>
              <strong>{"Thống kê nhập xuất theo tháng"}</strong>
              </div>
              <br/>
              <Bar  data={dataNX} options={DataBar.chartOptions} width="900" height="415" ></Bar>
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
