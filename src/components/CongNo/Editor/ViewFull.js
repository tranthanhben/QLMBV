import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {renderInfo, formatDate, numeral} from '../../../meta';
import {THeadCTK, TBodyCTK} from '../../table/rowForPXH';
import {THeadCTTT, TBodyCTTT} from '../../table/rowForTTNCC';

export class ViewK extends Component {
  static propTypes = {
    meta: PropTypes.object,
    item: PropTypes.object,
    close: PropTypes.func.isRequired
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
        value = numeral(item[key]).format('(0,0)')+(field.unit|| '');
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
        <h3 className="info-header">Thông Tin Kho</h3>
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
export class ViewKH extends Component {
  static propTypes = {
    meta: PropTypes.object,
    item: PropTypes.object,
    close: PropTypes.func.isRequired
  }
  render(){
    const {meta,metaTTKH, item, close} = this.props;
    const metaCTTT = metaTTKH && metaTTKH.cttt || {};
    return (
      <div className="info">
        <h3 className="info-header">Thông Tin Khách Hàng</h3>
        <hr/>
        <div className="row">
          <div className="col-md-6">
            <div className="info-group" key="id">
              <div className="row">
                <div className="col-md-4 align-right">
                  <span>{meta["id"].label + ": "}</span>
                </div>
                <div className="col-md-8">
                  <p className={meta["id"].up? 'uppercase':''}>{item["id"]}</p>
                </div>
              </div>
            </div>
            <div className="info-group" key="ten">
              <div className="row">
                <div className="col-md-4 align-right">
                  <span>{meta["ten"].label + ": "}</span>
                </div>
                <div className="col-md-8">
                  <p className={meta["ten"].up? 'uppercase':''}>{item["ten"]}</p>
                </div>
              </div>
            </div>
            <div className="info-group" key="sdt">
              <div className="row">
                <div className="col-md-4 align-right">
                  <span>{meta["sdt"].label + ": "}</span>
                </div>
                <div className="col-md-8">
                  <p className={meta["sdt"].up? 'uppercase':''}>{item["sdt"]}</p>
                </div>
              </div>
            </div>
            <div className="info-group" key="email">
              <div className="row">
                <div className="col-md-4 align-right">
                  <span>{meta["email"].label + ": "}</span>
                </div>
                <div className="col-md-8">
                  <p className={meta["email"].up? 'uppercase':''}>{item["email"]}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="info-group" key="diachi">
              <div className="row">
                <div className="col-md-4 align-right">
                  <span>{meta["diachi"].label + ": "}</span>
                </div>
                <div className="col-md-8">
                  <p className={meta["diachi"].up? 'uppercase':''}>{item["diachi"]}</p>
                </div>
              </div>
            </div>
            <div className="info-group" key="tennh">
              <div className="row">
                <div className="col-md-4 align-right">
                  <span>{meta["tennh"].label + ": "}</span>
                </div>
                <div className="col-md-8">
                  <p className={meta["tennh"].up? 'uppercase':''}>{item["tennh"]}</p>
                </div>
              </div>
            </div>
            <div className="info-group" key="sotk">
              <div className="row">
                <div className="col-md-4 align-right">
                  <span>{meta["sotk"].label + ": "}</span>
                </div>
                <div className="col-md-8">
                  <p className={meta["sotk"].up? 'uppercase':''}>{item["sotk"]}</p>
                </div>
              </div>
            </div>
            <div className="info-group" key="ngaytao">
              <div className="row">
                <div className="col-md-4 align-right">
                  <span>{meta["ngaytao"].label + ": "}</span>
                </div>
                <div className="col-md-8">
                  <p className={meta["ngaytao"].up? 'uppercase':''}>{formatDate(item["ngaytao"])}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4">
                <div className="info-group" key="tongtien">
                  <div className="row">
                    <div className="col-md-6 align-right">
                      <span>{meta["tongtien"].label + ": "}</span>
                    </div>
                    <div className="col-md-6">
                      <p className={meta["tongtien"].up? 'uppercase':''}>{numeral(item["tongtien"]).format('(0,0)')+ " VND"}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="info-group" key="thanhtoan">
                  <div className="row">
                    <div className="col-md-6 align-right">
                      <span>{meta["thanhtoan"].label + ": "}</span>
                    </div>
                    <div className="col-md-6">
                      <p className={meta["thanhtoan"].up? 'uppercase':''}>{numeral(item["thanhtoan"]).format('(0,0)')+ " VND"}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="info-group" key="congno">
                  <div className="row">
                    <div className="col-md-6 align-right">
                      <span>{meta["congno"].label + ": "}</span>
                    </div>
                    <div className="col-md-6">
                      <p className={meta["congno"].up? 'uppercase':''}>{numeral(item["congno"]).format('(0,0)')+ " VND"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="col-md-12" key="ctk">
              <br/>
              <strong>Chi tiết thanh toán:</strong>
              <table id="example" className="table display nowrap dataTable" role="grid" aria-describedby="example_info" >
                <thead>
                  <THeadCTTT meta={metaCTTT} />
                </thead>
                <tbody>
                  {item && item.chitietthanhtoan && item.chitietthanhtoan.map((item, index)=>{
                    return <TBodyCTTT key={index} meta={metaCTTT} index={index} item={item} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-6">
          </div>
          <div className="col-md-6">
            <button className ='btn  pull-right' onClick={()=>this.props.close()}>Đóng</button>
          </div>
        </div>
      </div>);
  }
}
export class ViewNCC extends Component {
  static propTypes = {
    meta: PropTypes.object,
    item: PropTypes.object,
    close: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired
  }
  render(){
    const {meta, item, close, metaTTNCC} = this.props;
    const metaCTTT = metaTTNCC && metaTTNCC.cttt || {};

    return (
      <div className="info">
        <h3 className="info-header">Thông Tin Nhà Cung Cấp</h3>
        <hr/>
        <div className="row">
          <div className="col-md-6">
            <div className="info-group" key="id">
              <div className="row">
                <div className="col-md-4 align-right">
                  <span>{meta["id"].label + ": "}</span>
                </div>
                <div className="col-md-8">
                  <p className={meta["id"].up? 'uppercase':''}>{item["id"]}</p>
                </div>
              </div>
            </div>
            <div className="info-group" key="ten">
              <div className="row">
                <div className="col-md-4 align-right">
                  <span>{meta["ten"].label + ": "}</span>
                </div>
                <div className="col-md-8">
                  <p className={meta["ten"].up? 'uppercase':''}>{item["ten"]}</p>
                </div>
              </div>
            </div>
            <div className="info-group" key="sdt">
              <div className="row">
                <div className="col-md-4 align-right">
                  <span>{meta["sdt"].label + ": "}</span>
                </div>
                <div className="col-md-8">
                  <p className={meta["sdt"].up? 'uppercase':''}>{item["sdt"]}</p>
                </div>
              </div>
            </div>
            <div className="info-group" key="email">
              <div className="row">
                <div className="col-md-4 align-right">
                  <span>{meta["email"].label + ": "}</span>
                </div>
                <div className="col-md-8">
                  <p className={meta["email"].up? 'uppercase':''}>{item["email"]}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="info-group" key="diachi">
              <div className="row">
                <div className="col-md-4 align-right">
                  <span>{meta["diachi"].label + ": "}</span>
                </div>
                <div className="col-md-8">
                  <p className={meta["diachi"].up? 'uppercase':''}>{item["diachi"]}</p>
                </div>
              </div>
            </div>
            <div className="info-group" key="tennh">
              <div className="row">
                <div className="col-md-4 align-right">
                  <span>{meta["tennh"].label + ": "}</span>
                </div>
                <div className="col-md-8">
                  <p className={meta["tennh"].up? 'uppercase':''}>{item["tennh"]}</p>
                </div>
              </div>
            </div>
            <div className="info-group" key="sotk">
              <div className="row">
                <div className="col-md-4 align-right">
                  <span>{meta["sotk"].label + ": "}</span>
                </div>
                <div className="col-md-8">
                  <p className={meta["sotk"].up? 'uppercase':''}>{item["sotk"]}</p>
                </div>
              </div>
            </div>
            <div className="info-group" key="ngaytao">
              <div className="row">
                <div className="col-md-4 align-right">
                  <span>{meta["ngaytao"].label + ": "}</span>
                </div>
                <div className="col-md-8">
                  <p className={meta["ngaytao"].up? 'uppercase':''}>{formatDate(item["ngaytao"])}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4">
                <div className="info-group" key="tongtien">
                  <div className="row">
                    <div className="col-md-6 align-right">
                      <span>{meta["tongtien"].label + ": "}</span>
                    </div>
                    <div className="col-md-6">
                      <p className={meta["tongtien"].up? 'uppercase':''}>{numeral(item["tongtien"]).format('(0,0)')+ " VND"}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="info-group" key="thanhtoan">
                  <div className="row">
                    <div className="col-md-6 align-right">
                      <span>{meta["thanhtoan"].label + ": "}</span>
                    </div>
                    <div className="col-md-6">
                      <p className={meta["thanhtoan"].up? 'uppercase':''}>{numeral(item["thanhtoan"]).format('(0,0)')+ " VND"}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="info-group" key="congno">
                  <div className="row">
                    <div className="col-md-6 align-right">
                      <span>{meta["congno"].label + ": "}</span>
                    </div>
                    <div className="col-md-6">
                      <p className={meta["congno"].up? 'uppercase':''}>{numeral(item["congno"]).format('(0,0)')+ " VND"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="col-md-12" key="ctk">
              <br/>
              <strong>Chi tiết thanh toán:</strong>
              <table id="example" className="table display nowrap dataTable" role="grid" aria-describedby="example_info" >
                <thead>
                  <THeadCTTT meta={metaCTTT} />
                </thead>
                <tbody>
                  {item && item.chitietthanhtoan && item.chitietthanhtoan.map((item, index)=>{
                    return <TBodyCTTT key={index} meta={metaCTTT} index={index} item={item} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
            <hr/>
        <div className="row">
          <div className="col-md-6">
          </div>
          <div className="col-md-6">
            <button className ='btn btn-default pull-right' onClick={()=>this.props.close()}>Đóng</button>
          </div>
        </div>
      </div>);
  }
}
