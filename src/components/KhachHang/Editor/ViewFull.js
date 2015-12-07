import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {renderInfo, formatDate, numeral} from '../../../meta';

export class ViewKH extends Component {
  static propTypes = {
    meta: PropTypes.object,
    item: PropTypes.object,
    close: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired
  }
  render(){
    const {meta, item, close} = this.props;
    let info = [];
    for(const key in meta){
      const field = meta[key];
      let value = item[key] || '';
      if(field.type === "date"){
        value =formatDate(item[key]);
      }
      if(field.type === "number"){
        value = numeral(item[key]).format('0,0')+(field.unit|| '');
      }
      info.push(
        <div className="info-group" key={key}>
          <div className="row">
            <div className="col-md-4 align-right">
              <span>{field.label + ": "}</span>
            </div>
            <div className="col-md-8">
              <p className={field.up? 'uppercase':''}>{value}</p>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="info">
        <h3 className="info-header">Thông Tin Khách Hàng</h3>
        <hr/>
        <div className="row">
          <div className="col-md-12">
           {info}
          </div>
        </div>
            <hr/>
        <div className="row">
          <div className="col-md-6">
          <button className ='btn btn-warning' onClick={::this.props.edit(item.id)}>Sửa</button>
          </div>
          <div className="col-md-6">
            <button className ='btn  pull-right' onClick={()=>this.props.close()}>Đóng</button>
          </div>
        </div>
      </div>);
  }
}

export class ViewPMH extends Component {
  static propTypes = {
    meta: PropTypes.object,
    item: PropTypes.object,
    close: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired
  }
  render(){
    const {meta, item, close} = this.props;
    let info = renderInfo(item, meta) || [];
    return (
      <div className="info">
        <h3 className="info-header">Thông Tin Phieu Mua Hang</h3>
        <hr/>
        <div className="row">
          <div className="col-md-12">
           {info}
          </div>
        </div>
            <hr/>
        <div className="row">
          <div className="col-md-6">
          <button className ='btn btn-warning' onClick={()=>this.props.edit(item.id)}>Edit</button>
          </div>
          <div className="col-md-6">
            <button className ='btn  pull-right' onClick={()=>this.props.close()}>Close</button>
          </div>
        </div>
      </div>);
  }
}

export class ViewPXH extends Component {
  static propTypes = {
    meta: PropTypes.object,
    item: PropTypes.object,
    close: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired
  }
  render(){
    const {meta, item, close} = this.props;
    let info = renderInfo(item, meta) || [];
    return (
      <div className="info">
        <h3 className="info-header">Thông Tin Phieu Xuat Hang </h3>
        <hr/>
        <div className="row">
          <div className="col-md-12">
           {info}
          </div>
        </div>
            <hr/>
        <div className="row">
          <div className="col-md-6">
          <button className ='btn btn-warning' onClick={()=>this.props.edit(item.id)}>Edit</button>
          </div>
          <div className="col-md-6">
            <button className ='btn  pull-right' onClick={()=>this.props.close()}>Close</button>
          </div>
        </div>
      </div>);
  }
}

export default
class View extends Component {
  static propTypes = {
    meta: PropTypes.object,
    item: PropTypes.object,
    type: PropTypes.string,
    close: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired
  }
  render() {

    switch(type){
      case "khachhang":
        return <ViewKH {...this.props}></ViewKH>;
      case "pmh":
        return <ViewPMH {...this.props}></ViewPMH>;
      default:
        return (<div></div>);
    }
  }
}
