import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {renderInfo, formatDate, numeral} from '../../../meta';
import {THeadCTDH, TBodyCTDH} from '../../table/rowForPMH';
import {THeadCTK, TBodyCTK} from '../../table/rowForPXH';
import {THeadCTTT, TBodyCTTT} from '../../table/rowForTTKH';

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
          </div>
          <div className="col-md-6 flex-right">
            <button className ='btn btn-warning' onClick={::this.props.edit(item.id)}>Sửa</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button className ='btn btn-default' onClick={()=>this.props.close()}>Đóng</button>
          </div>
        </div>
      </div>);
  }
}

export class ViewPMH extends Component {
  static propTypes = {
    meta: PropTypes.object,
    item: PropTypes.object,
    listLV: PropTypes.array,
    close: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired
  }
  render(){
    const {meta, item, close, listLV} = this.props;
    const metaGD = meta && meta.giaodich || {};
    const metaCTDH = meta && meta.ctdh || {};
    return (
      <div className="info">
        <h3 className="info-header">Thông Tin Phiếu Mua Hàng</h3>
        <hr/>
        <div className="row">
          <div className="col-md-6">
            <div className="info-group" key='giaodichid'>
              <div className="row">
                <div className="col-md-6 align-right">
                  <span>{metaGD["id"].label + ": "}</span>
                </div>
                <div className="col-md-6">
                  <p className={metaGD["id"].up? 'uppercase':''}>{item["id"]}</p>
                </div>
              </div>
            </div>
            <div className="info-group" key='doitacid'>
              <div className="row">
                <div className="col-md-6 align-right">
                  <span>{metaGD["doitacid"].label + ": "}</span>
                </div>
                <div className="col-md-6">
                  <p className={metaGD["doitacid"].up? 'uppercase':''}>{item["doitacid"]}</p>
                </div>
              </div>
            </div>
            <div className="info-group" key='nhanvienid'>
              <div className="row">
                <div className="col-md-6 align-right">
                  <span>{metaGD["nhanvienid"].label + ": "}</span>
                </div>
                <div className="col-md-6">
                  <p className={metaGD["nhanvienid"].up? 'uppercase':''}>{item["nhanvienid"]}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="info-group" key='tongtiendutinh'>
              <div className="row">
                <div className="col-md-6 align-right">
                  <span>{metaGD["tongtiendutinh"].label + ": "}</span>
                </div>
                <div className="col-md-6">
                  <p className={metaGD["tongtiendutinh"].up? 'uppercase':''}>{numeral(item["tongtiendutinh"]).format('0,0')+' VND'}</p>
                </div>
              </div>
            </div>
            <div className="info-group" key='tinhtrangdonhang'>
              <div className="row">
                <div className="col-md-6 align-right">
                  <span>{metaGD["tinhtrangdonhang"].label + ": "}</span>
                </div>
                <div className="col-md-6">
                  <p className={metaGD["tinhtrangdonhang"].up? 'uppercase':''}>{item["tinhtrangdonhang"]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <br/>
            <strong>Chi tiết đơn hàng:</strong>
            <table id="example" className="table display preline dataTable" cellSpacing="0" width="100%" role="grid" aria-describedby="example_info" style={{"width": "100%"}}>
              <thead>
                <THeadCTDH meta={metaCTDH} ></THeadCTDH>
              </thead>
              <tbody>
                {item.chitietdonhang && item.chitietdonhang.map((item, index)=>{
                  return <TBodyCTDH meta={metaCTDH} listLV={listLV} index={index} item={item}></TBodyCTDH>;
                })}
              </tbody>
            </table>
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

export class ViewPXH extends Component {
  static propTypes = {
    meta: PropTypes.object,
    item: PropTypes.object,
    listLV: PropTypes.array,
    close: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired
  }
  render(){
    const {meta, item, close, listLV} = this.props;
    const metaGD = meta && meta.giaodich || {};
    const metaCTDH = meta && meta.ctdh || {};
    const metaCTK = meta && meta.ctk || {};
    return (
      <div className="info">
        <h3 className="info-header">Thông Tin Phiếu Xuat Hàng</h3>
        <hr/>
        <div className="row">
          <div className="col-md-6">
            <div className="info-group" key='giaodichid'>
              <div className="row">
                <div className="col-md-6 align-right">
                  <span>{metaGD["id"].label + ": "}</span>
                </div>
                <div className="col-md-6">
                  <p className={metaGD["id"].up? 'uppercase':''}>{item["id"]}</p>
                </div>
              </div>
            </div>
            <div className="info-group" key='doitacid'>
              <div className="row">
                <div className="col-md-6 align-right">
                  <span>{metaGD["doitacid"].label + ": "}</span>
                </div>
                <div className="col-md-6">
                  <p className={metaGD["doitacid"].up? 'uppercase':''}>{item["doitacid"]}</p>
                </div>
              </div>
            </div>
            <div className="info-group" key='nhanvienid'>
              <div className="row">
                <div className="col-md-6 align-right">
                  <span>{metaGD["nhanvienid"].label + ": "}</span>
                </div>
                <div className="col-md-6">
                  <p className={metaGD["nhanvienid"].up? 'uppercase':''}>{item["nhanvienid"]}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="info-group" key='tongtien'>
              <div className="row">
                <div className="col-md-6 align-right">
                  <span>{metaGD["tongtien"].label + ": "}</span>
                </div>
                <div className="col-md-6">
                  <p className={metaGD["tongtien"].up? 'uppercase':''}>{numeral(item["tongtien"]*-1).format('0,0')+' VND'}</p>
                </div>
              </div>
            </div>
            <div className="info-group" key='tinhtrangkho'>
              <div className="row">
                <div className="col-md-6 align-right">
                  <span>{metaGD["tinhtrangkho"].label + ": "}</span>
                </div>
                <div className="col-md-6">
                  <p className={metaGD["tinhtrangkho"].up? 'uppercase':''}>{item["tinhtrangkho"]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <br/>
            <strong>Chi tiết đơn hàng:</strong>
            <table id="example" className="table display preline dataTable" cellSpacing="0" width="100%" role="grid" aria-describedby="example_info" style={{"width": "100%"}}>
              <thead>
                <THeadCTDH meta={metaCTDH} ></THeadCTDH>
              </thead>
              <tbody>
                {item && item.chitietdonhang && item.chitietdonhang.map((item, index)=>{
                  return <TBodyCTDH key={index} meta={metaCTDH} listLV={listLV} index={index} item={item}></TBodyCTDH>;
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12" key="ctk">
            <br/>
            <strong>Chi tiết nhập hàng:</strong>
            <table id="example" className="table display nowrap dataTable" role="grid" aria-describedby="example_info" >
              <thead>
                <THeadCTK meta={metaCTK} ></THeadCTK>
              </thead>
              <tbody>
                {item && item.chitietkho && item.chitietkho.map((item, index)=>{
                  return <TBodyCTK key={index} meta={metaCTK} listLV={listLV} index={index} item={item}></TBodyCTK>;
                })}
              </tbody>
            </table>
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
export class ViewTTKH extends Component {
  static propTypes = {
    meta: PropTypes.object,
    item: PropTypes.object,
    listLV: PropTypes.array,
    listK: PropTypes.array,
    close: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired
  }
  render(){
    const {meta, item, close, listLV, listK} = this.props;
    const metaGD = meta && meta.giaodich || {};
    const metaCTDH = meta && meta.ctdh || {};
    const metaCTK = meta && meta.ctk || {};
    const metaCTTT = meta && meta.cttt || {};
    return (
      <div className="info">
        <h3 className="info-header">Thông Tin Hoa Don Khac Hang</h3>
        <hr/>
        <div className="row">
          <div className="col-md-6">
            <div className="info-group" key='giaodichid'>
              <div className="row">
                <div className="col-md-6 align-right">
                  <span>{metaGD["id"].label + ": "}</span>
                </div>
                <div className="col-md-6">
                  <p className={metaGD["id"].up? 'uppercase':''}>{item["id"]}</p>
                </div>
              </div>
            </div>
            <div className="info-group" key='doitacid'>
              <div className="row">
                <div className="col-md-6 align-right">
                  <span>{metaGD["doitacid"].label + ": "}</span>
                </div>
                <div className="col-md-6">
                  <p className={metaGD["doitacid"].up? 'uppercase':''}>{item["doitacid"]}</p>
                </div>
              </div>
            </div>
            <div className="info-group" key='nhanvienid'>
              <div className="row">
                <div className="col-md-6 align-right">
                  <span>{metaGD["nhanvienid"].label + ": "}</span>
                </div>
                <div className="col-md-6">
                  <p className={metaGD["nhanvienid"].up? 'uppercase':''}>{item["nhanvienid"]}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="info-group" key='thanhtoan'>
              <div className="row">
                <div className="col-md-6 align-right">
                  <span>{metaGD["thanhtoan"].label + ": "}</span>
                </div>
                <div className="col-md-6">
                  <p className={metaGD["thanhtoan"].up? 'uppercase':''}>{numeral(item["thanhtoan"]).format('0,0')+' VND'}</p>
                </div>
              </div>
            </div>
            <div className="info-group" key='tinhtrangthanhtoan'>
              <div className="row">
                <div className="col-md-6 align-right">
                  <span>{metaGD["tinhtrangthanhtoan"].label + ": "}</span>
                </div>
                <div className="col-md-6">
                  <p className={metaGD["tinhtrangthanhtoan"].up? 'uppercase':''}>{item["tinhtrangthanhtoan"]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <br/>
            <strong>Chi tiết thanh toan:</strong>
            <table id="example" className="table display preline dataTable" cellSpacing="0" width="100%" role="grid" aria-describedby="example_info" style={{"width": "100%"}}>
              <thead>
                <THeadCTTT meta={metaCTTT} ></THeadCTTT>
              </thead>
              <tbody>
                {item.chitietthanhtoan && item.chitietthanhtoan.map((item, index)=>{
                  return <TBodyCTTT key={index} meta={metaCTTT} index={index} item={item}></TBodyCTTT>;
                })}
              </tbody>
            </table>
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


