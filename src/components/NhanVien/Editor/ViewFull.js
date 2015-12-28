import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {renderInfo, formatDate, numeral, ATOLV} from '../../../meta';
@connect(
  state =>({
    listPB: state.nhanvien.listPB,
  }))
export class ViewNV extends Component {
  static propTypes = {
    meta: PropTypes.object,
    item: PropTypes.object,
    listPB: PropTypes.array,
    close: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired
  }
  render(){
    const {meta, item, close, listPB} = this.props;
    const PB = ATOLV(listPB);
    let info = [];
    for(const key in meta){
      const field = meta[key];
      if(field.field === false && field.type === "special"){
        continue;
      }
      let value = item[key] || '';
      if(field.type === "date"){
        value =formatDate(item[key]);
      }
      if(field.type === "number"){
        value = numeral(item[key]).format('(0,0.00)')+(field.unit|| '');
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
    console.log("phongban", item);
    return (
      <div className="info">
        <h3 className="info-header">Thông Tin Nhân Viên</h3>
        <hr/>
        <div className="row">
          <div className="col-md-12">
            {info}
            <div className="info-group" key="phongban">
              <div className="row">
                <div className="col-md-4 align-right">
                  <span>{"Phòng Ban" + ": "}</span>
                </div>
                <div className="col-md-8">
                  <p >{PB[item["phongbanid"]].ten ||''}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-6">
          </div>
          <div className="col-md-6 flex-right">
            <button className ='btn btn-warning' onClick={::this.props.edit(item.id)}>Sửa</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button className ='btn btn-default' onClick={()=>this.props.close()}>Đóng</button>
          </div>
        </div>
      </div>);
  }
}
