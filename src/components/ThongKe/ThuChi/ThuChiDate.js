import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Line, Pie} from 'react-chartjs';
import {changeDTI, datetime, reveserChangeDTI, setValue} from '../../../meta';
import {DataBar,DataPie} from '../../Style';
import * as thongkeActions from '../../../actions/thongkeActions'
function xulydulieudate(datas=[]){
  let thu = 0;
  let chi = 0;
  datas.map((data, index) =>{
    let db = data.reduction || [];
    db.map(d=>{
      if(d.thanhtoan > 0){
        thu += d.thanhtoan;
      }else{
        chi += d.thanhtoan;
      }
    })
  })
  return {thu, chi};
}
@connect(state =>({
  listTC: state.thongke.listTC
}),{...thongkeActions})
export default class TCDate extends Component {
  static propTyeps ={
    listTC: PropTypes.array,
    loadTC: PropTypes.func.isRequired
  }
  state={
    thu: xulydulieudate(this.props.listTC).thu || 0,
    chi: xulydulieudate(this.props.listTC).chi || 0
  }
  componentWillMount(){
    this.props.loadTC();
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.listTC){
      let {thu, chi} = xulydulieudate(nextProps.listTC);
      this.setState({thu:thu, chi:chi});
    }
  }

  render(){
    let {thu, chi, options} = this.state;
    return (
      <div className="mbv-grid container-fluid" style={{"zIndex": "9999983"}}>
        <div className="row">
          <div className="col-xs-12">
            <div id="example_wrapper" className="dataTables_wrapper">
              <TKTCPie thu={thu} chi={chi*(-1)}></TKTCPie>
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
    thu: PropTypes.number,
    chi: PropTypes.number,
  }
  state = {
    dataTC : [{
    value: this.props.thu,
    color: "#F7464A",
    highlight: "#FF5A5E",
    label: "Số Tiền Thu"
  }, {
    value: this.props.chi,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "Số Tiền Chi"
  }]}
  componentWillReceiveProps(nextProps){
    this.setState({
      dataTC : [{
        value: nextProps.thu,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "Số Tiền Thu"
      }, {
        value: nextProps.chi,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Số Tiền Chi"
      }]
    })
  }
  render(){
    const {dataTC} = this.state;
    const {thu, chi} = this.props;
    if(thu === 0 && chi===0){
      return <div className="header-chart" style={{"textAlign": 'center'}}>
                <strong>{"Không có Thu\/Chi theo ngày này!"}</strong>
                </div>
    }
    return <div id="example" className="table display preline dataTable">
              <div className="header-chart" style={{"textAlign": 'center'}}>
              <strong>{"Thống kê Thu\/Chi theo ngày"}</strong>
              </div>
              <br/>
              <Pie  data={dataTC} options={DataPie.chartOptions} width="1000" height="400" ></Pie>
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
