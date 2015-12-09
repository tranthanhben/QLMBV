import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {initObject, ATO, OTA, preprocess, datetime, changeDTI, renderLabel, setValue} from '../../../meta';
import {THead, TBody} from '../../table/rowForPDH';
import * as pdhActions from '../../../actions/nhacungcap/pdhActions';
import * as giaodichActions from '../../../actions/giaodichActions';

@connect(state =>({
  gdItem: state.phieudathang.editItem,
  meta: state.meta.phieudathang,
  listNCC: state.giaodich.listNCC,
  listLV: state.giaodich.listLV,
  user: state.user.user
}),{...pdhActions, ...giaodichActions})
export default class EditPDH extends Component {
  static propTypes = {
    gdid: PropTypes.string,
    gdItem: PropTypes.object,
    meta: PropTypes.object,
    user: PropTypes.object,
    postItem: PropTypes.func.isRequired,
    getItem: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    loadNCC: PropTypes.func.isRequired,
    loadLV: PropTypes.func.isRequired,
  }
  state = {
    gdid: this.props.gdid,
    chitietdonhang:this.props.gdItem &&ATO(this.props.gdItem.chitietdonhang)||{},
    sodonhang: this.props.gdItem && this.props.gdItem.chitietdonhang.length || 0,
    edited: false,
    submiting: false
  }
  componentWillMount(){
    if(this.props.gdid){
      this.props.getGD(gdid);
    }
    this.props.loadNCC();
    this.props.loadLV();
    let gdItem = {
      nvid: this.props.user.nhanvienid || 'admin',
      trangthai: 'chuaxuly',
      doitacid: '',
      ngayhoanthanh: changeDTI(datetime(new Date()))
    };
    this.state.gdItem = gdItem;
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.gdItem && this.state.submiting){
      this.props.postDH();
    }else if(nextProps.gdItem){
      this.setState({
        gdid: nextProps.gdItem.id,
        sodonhang: nextProps.gdItem.chitietdonhang.length,
        chitietdonhang: ATO(nextProps.gdItem.chitietdonhang) || {},
        gdItem: nextProps.gdItem
      })
    }
  }
  handleChange(){
    let obj = this.state.gdItem;
    let addr = event.target.dataset.addr;
    let value = event.target.value;
    this.setState({
      edited: true,
      gdItem: setValue(obj, addr, value)
    })
  }
  onSubmit(){
    if(checkRequire(this.props.meta, this.state.gdItem)){
      this.setState({
        submited: true
      })
    }else {
      this.props.postItem(preprocessPost(this.state.gdItem, this.props.meta));
    }
  }
  onClose(){
    if(this.state.edited){
      let cf = confirm("Bạn chưa lưu thay đổi, bạn có muốn Close không?");
      if(cf) {
        this.props.reset();
        this.props.close();
      }
    }else{
      this.props.reset();
      this.props.close();
    }
  }
  render() {
    const {meta, error, message, listNCC, listLV} = this.props;
    const {gdItem, edited, submited, showFullField, gdid} = this.state;
    const metaGD = meta && preprocess(meta.giaodich) || {};
    const metaCTDH = meta && preprocess(meta.chitietdonhang) || {};
    console.log("state props", this.state.gdItem, listNCC);
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <h4>Phiếu Đặt Hàng</h4>
          </div>
          <div className="col-md-8 flex-right">
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-8 boder-right">
                <div className='form-group' key="khachhang">
                  {renderLabel(metaGD.doitacid)}
                  &nbsp;
                  <select className='form-control' data-addr='doitacid'
                  onChange={::this.handleChange}
                  value={gdItem.doitacid || ''}>
                  <option key='doitacid'>-- Nha Cung Cap --</option>
                  {listNCC && listNCC.map(b => {
                    return (
                      <option key={b.id} value={b.id}>
                        {b.ten}
                      </option>
                    );
                  })}
                  </select>
                </div>
                <div className='form-group' key="trangthai">
                  {renderLabel(metaGD.trangthai)}
                  {metaGD && metaGD["trangthai"].$input(gdItem,this)}
                </div>
              </div>
              <div className="col-md-4">
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <table id="example" className="table display nowrap dataTable" role="grid" aria-describedby="example_info" >
              <thead>
                <THead meta={metaCTDH}></THead>
              </thead>

              <tbody>

              </tbody>
            </table>
          </div>
        </div>
        <br/>
        <hr/>
        <div className="row">
          <div className="col-md-12 flex-right">
          {submited ? <p className='help-block required'>
            </p>:null}&nbsp;&nbsp;
          {gdid? <button className='btn btn-warning' onClick={::this.onSubmit} disabled={(edited? '':'disabled')}>
          {"Cập Nhật"}
          </button>: <button className='btn btn-success' onClick={::this.onSubmit} disabled={(edited? '':'disabled')}>
          {"Tạo mới"}</button>}&nbsp;&nbsp;&nbsp;&nbsp;
            <button className ='btn' onClick={::this.onClose}>Đóng</button>
          </div>
        </div>
      </div>
    );
  }
}
