import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {renderInfo, formatDate, numeral} from '../../../meta';

export class ViewLV extends Component {
  static propTypes = {
    meta: PropTypes.object,
    item: PropTypes.object,
    close: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired
  }
  render(){
    const {meta, item, close} = this.props;
    return (
      <div className="info">
        <h3 className="info-header">Thông Tin Loại Vải</h3>
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
            <div className="info-group" key="mamau">
              <div className="row">
                <div className="col-md-4 align-right">
                  <span>{meta["mamau"].label + ": "}</span>
                </div>
                <div className="col-md-8">
                  <p className={meta["mamau"].up? 'uppercase':''}>{item["mamau"]}</p>
                </div>
              </div>
            </div>
            <div className="info-group" key="giamua">
              <div className="row">
                <div className="col-md-4 align-right">
                  <span>{meta["giamua"].label + ": "}</span>
                </div>
                <div className="col-md-8">
                  <p className={meta["giamua"].up? 'uppercase':''}>{item["giamua"] === -1? 'Chưa cập nhật': numeral(item["giamua"]).format('(0,0)')+(" VND")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="info-group" key="mausac">
              <div className="row">
                <div className="col-md-4 align-right">
                  <span>{meta["mausac"].label + ": "}</span>
                </div>
                <div className="col-md-8">
                  <p className={meta["mausac"].up? 'uppercase':''}>{item["mausac"]}</p>
                </div>
              </div>
            </div>
            <div className="info-group" key="chatlieu">
              <div className="row">
                <div className="col-md-4 align-right">
                  <span>{meta["chatlieu"].label + ": "}</span>
                </div>
                <div className="col-md-8">
                  <p className={meta["chatlieu"].up? 'uppercase':''}>{item["chatlieu"]}</p>
                </div>
              </div>
            </div>
            <div className="info-group" key="ngaytao">
              <div className="row">
                <div className="col-md-4 align-right">
                  <span>{meta["ngaytao"].label + ": "}</span>
                </div>
                <div className="col-md-8">
                  <p className={meta["ngaytao"].up? 'uppercase':''}>{item["ngaytao"]}</p>
                </div>
              </div>
            </div>
            <div className="info-group" key="giaban">
              <div className="row">
                <div className="col-md-4 align-right">
                  <span>{meta["giaban"].label + ": "}</span>
                </div>
                <div className="col-md-8">
                  <p className={meta["giaban"].up? 'uppercase':''}>{item["giaban"] === -1? 'Chưa cập nhật': numeral(item["giaban"]).format('(0,0)')+(" VND")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4">
                <div className="info-group" key="tongnhap">
                  <div className="row">
                    <div className="col-md-4 align-right">
                      <span>{meta["tongnhap"].label + ": "}</span>
                    </div>
                    <div className="col-md-8">
                      <p className={meta["tongnhap"].up? 'uppercase':''}>{numeral(item["tongnhap"]).format('(0,0)')+ " mét"}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="info-group" key="tongxuat">
                  <div className="row">
                    <div className="col-md-4 align-right">
                      <span>{meta["tongxuat"].label + ": "}</span>
                    </div>
                    <div className="col-md-8">
                      <p className={meta["tongxuat"].up? 'uppercase':''}>{numeral(item["tongxuat"]).format('(0,0)')+ " mét"}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="info-group" key="conlai">
                  <div className="row">
                    <div className="col-md-4 align-right">
                      <span>{meta["conlai"].label + ": "}</span>
                    </div>
                    <div className="col-md-8">
                      <p className={meta["conlai"].up? 'uppercase':''}>{numeral(item["conlai"]).format('(0,0)')+ " mét"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <h4><strong>Chi tiết cây vải:</strong></h4>
            <table id="example" className="table display preline dataTable" cellSpacing="0" width="100%" role="grid" aria-describedby="example_info" style={{"width": "100%"}}>
              <thead>
                <tr role="row">
                  <th key="stt" tabIndex="0" aria-controls="example" >#</th>
                  <th key="cayvaiid" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1">
                    {"CAYVAIID"}
                  </th>
                  <th key="khoid" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1">
                    {"KHOID"}
                  </th>
                  <th className=" dt-body-right" key="mua" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1">
                    {"Số mét nhập(mét)"}
                  </th>
                  <th className=" dt-body-right"key="ban" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1">
                    {"Số mét xuất(mét)"}
                  </th>
                  <th className=" dt-body-right" key="con" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1">
                    {"Còn lại(mét)"}
                  </th>
                  <th className=" dt-body-right" key="gianhap" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1">
                    {"Giá nhập(vnd/mét)"}
                  </th>
                  <th key="ngaynhap" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1">
                    {"Ngày nhập"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {item.chitietcayvai && item.chitietcayvai.map((item, index)=>{
                  return (
                    <tr role="row" className={index%2===1 ? "even":"odd"}>
                      <td>{index+1}</td>
                      <td className=" uppercase"key="cayvaiid" >{item["cayvaiid"]}</td>
                      <td className=" uppercase" key="khoid" >{item["khoid"]}</td>
                      <td className=" dt-body-right" key="mua" >{numeral(item["mua"]).format('(0,0)')}</td>
                      <td className=" dt-body-right" key="ban" >{numeral(item["ban"]).format('(0,0)')}</td>
                      <td className=" dt-body-right" key="con" >{numeral(item["con"]).format('(0,0)')}</td>
                      <td className=" dt-body-right" key="gianhap" >{numeral(item["gianhap"]).format('(0,0)')}</td>
                      <td className="" key="ngaynhap" >{formatDate(item["ngaynhap"])}</td>
                    </tr>
                  );
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
