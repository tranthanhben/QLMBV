import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Line, Pie, Bar} from 'react-chartjs';
import {changeDTI, datetime, reveserChangeDTI, setValue, getMonth, startMonth, endMonth} from '../../../meta';
import {DataBar,DataPie} from '../../Style';
import * as thongkeActions from '../../../actions/thongkeActions';

function xulydulieumonth (datas=[]) {
  let labels = [];
  let datasets ={
    thu:[],
    chi:[]
  };
  datas.map(data => {
    labels.push(data.group[2] + "/" + data.group[1] + "/" + data.group[0]);
    let {thu, chi} = congtungngay(data.reduction);
    datasets.thu.push(thu);
    datasets.chi.push(chi*-1);
  })
  return {labels, datasets};
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
export default class TCMonth extends Component {
  static propTyeps ={
    listTC: PropTypes.array,
    loadTC: PropTypes.func.isRequired
  }
  state={
    labels: xulydulieumonth(this.props.listTC).labels || [],
    datasets: xulydulieumonth(this.props.listTC).datasets || {},
    options: {
      start: getMonth(changeDTI(datetime(new Date()))),
      end: getMonth(changeDTI(datetime(new Date()))),
      loai: 'month',
      period: 'day'
    }
  }
  componentWillMount(){
    this.props.loadTC(this.state.options || {loai: 'month',period:'day'});
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.listTC){
      let {labels, datasets} = xulydulieumonth(nextProps.listTC);
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
              <TKTCPie labels={labels} datasets={datasets}></TKTCPie>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//Thong Ke Nhap Xuat
export class TKTCPie extends Component{
  static propTypes = {
    labels: PropTypes.array,
    datasets: PropTypes.object,
  }
  state = {
    dataTC: {
      labels: this.props.labels || [],
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
      labels: nextProps.labels || [],
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
    if(this.props.labels.length===0){
      return <div className="header-chart" style={{"textAlign": 'center'}}>
                <strong>{"Không có Thu\/Chi theo tháng này!"}</strong>
                </div>
    }
    return <div id="example" className="display preline thongke">
              <div className="header-chart" style={{"textAlign": 'center'}}>
              <strong>{"Thống kê Thu\/Chi theo tháng"}</strong>
              </div>
              <br/>
              <Bar  data={dataTC} options={DataBar.chartOptions} width="900" height="415" ></Bar>
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
