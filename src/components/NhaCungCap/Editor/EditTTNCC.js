import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {initObject, ATO, OTA, preprocess, datetime, changeDTI, renderLabel, setValue, checkRequire, numeral, preprocessPost, parseOptId, parseOptTen} from '../../../meta';
import {THead, TBody} from '../../table/rowForTTNCC';
import * as ttnccActions from '../../../actions/nhacungcap/ttnccActions';
import * as giaodichActions from '../../../actions/giaodichActions';
import Select from 'react-select';

@connect(state =>({
  gdItem: state.thanhtoanNCC.editItem,
  meta: state.meta.thanhtoanNCC,
  listNCC: state.giaodich.listNCC,
  listLV: state.giaodich.listLV,
  listK: state.giaodich.listK,
  listPNH: state.giaodich.listPNH,
  user: state.user.user,
  cttt: state.thanhtoanNCC.cttt,
  msgPCTTT: state.thanhtoanNCC.msgPCTTT
}),{...ttnccActions, ...giaodichActions})
export default class EditPNH extends Component {
  static propTypes = {
    giaodichid: PropTypes.string,
    listK: PropTypes.array,
    listLV: PropTypes.array,
    listNCC: PropTypes.array,
    listPNH: PropTypes.array,
    gdItem: PropTypes.object,
    meta: PropTypes.object,
    user: PropTypes.object,
    cttt: PropTypes.array,
    postItem: PropTypes.func.isRequired,
    postCTTT: PropTypes.func.isRequired,
    getItem: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    loadNCC: PropTypes.func.isRequired,
    loadLV: PropTypes.func.isRequired,
    loadK: PropTypes.func.isRequired
  }
  state = {
    gdItem: {
      nvtt: this.props.user.nvtt || 'admin',
      tinhtrangthanhtoan: 'chuaxuly',
      doitacid: '',
      ngayhoanthanh: changeDTI(datetime(new Date()))
    },
    giaodichid: this.props.giaodichid,
    cttt:this.props.gdItem && this.props.gdItem.chitietthanhtoan || [],
    edited: false,
    editedCTTT: false,
    submiting: false,
    cttt_init: {
      giaodichid: this.props.giaodichid || '',
      thanhtoan:0,
      phuongthuc: 'tienmat',
      ngaythanhtoan: changeDTI(datetime(new Date())),
      ngaytao: new Date(changeDTI(datetime(new Date()))),
      loaigiaodich:"pdh"
    },
    newGD: true
  }
  componentWillMount(){
    if(this.props.giaodichid){
      this.props.getItem(this.props.giaodichid);
    }
    this.props.loadNCC();
    this.props.loadLV();
    this.props.loadK();
    this.props.loadPNH();
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.gdItem && this.state.submiting){
      let cttt = this.state.cttt;
      cttt = this.setgiaodichid(cttt,nextProps.gdItem.id);
      this.props.postCTTT(this.xulytruoc(cttt));
      this.setState({
        giaodichid: nextProps.gdItem.id,
        gdItem: nextProps.gdItem,
        submiting: false,
        edited: false
      });
    }else if(nextProps.gdItem){
      this.setState({
        giaodichid: nextProps.gdItem.id,
        cttt: nextProps.gdItem.chitietthanhtoan ||[],
        gdItem: nextProps.gdItem,
        edited: false,
        editedCTTT: false,
        submiting: false,
        cttt_init: {
          giaodichid: nextProps.gdItem.id || '',
          thanhtoan: 0,
          phuongthuc: 'tienmat',
          ngaythanhtoan: changeDTI(datetime(new Date())),
          ngaytao: new Date(changeDTI(datetime(new Date()))),
          loaigiaodich:"pdh"
        }
      });
    }
    if(nextProps.gdItem && this.state.newGD){
      let gdItem = nextProps.gdItem;
      gdItem.nvtt = gdItem.nvtt? gdItem.nvtt :(this.props.user.nhanvienid || 'admin');
      gdItem.tinhtrangthanhtoan = gdItem.tinhtrangthanhtoan? gdItem.tinhtrangthanhtoan : 'chuaxuly';
      gdItem.newtt = gdItem.newtt? gdItem.newtt :true;
      this.setState({
        giaodichid: nextProps.gdItem.id,
        cttt: nextProps.gdItem.chitietthanhtoan ||[],
        gdItem: gdItem,
        newGD: false,
        edited: true,
        cttt_init: {
          giaodichid: nextProps.gdItem.id || '',
          thanhtoan: 0,
          phuongthuc: 'tienmat',
          ngaythanhtoan: changeDTI(datetime(new Date())),
          ngaytao: new Date(changeDTI(datetime(new Date()))),
          loaigiaodich:"pdh"
        }
      });
    }
    if(nextProps.cttt){
      this.setState({
        cttt: nextProps.cttt || [],
        editedCTTT: false,
        edited: false
      });
    }
    if(nextProps.msgPCTTT){
      this.props.getItem(this.state.giaodichid);
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
  changeGDID(val){
    this.setState({
      edited: false,
      giaodichid: val
    });
    this.props.getItem(val);
  }
  checkRq(){
    let mes = '';
    if(checkRequire(this.props.meta.giaodich, this.state.gdItem)) {
      return checkRequire(this.props.meta.giaodich, this.state.gdItem);
    }
    if(this.state.cttt.length === 0){
      return 'Vui lòng thêm chi tiết thanh toan';
    }
    return '';
  }
  onSubmit(){
    if(this.checkRq()){
      this.setState({
        submited: true
      });
    }else{
      //kiem tra va parse kieu so va ngya
      if(this.state.edited){
        this.setState({submiting: true});
        this.props.postItem(preprocessPost(this.state.gdItem, this.props.meta.giaodich));
      }else{
        this.setState({submiting: false});
        this.props.postCTTT(this.xulytruoc(this.state.cttt));
      }
    }
  }
  xulytruoc(cttt){
    let ctttPP = [];
    for (var i = 0; i < cttt.length; i++) {
      let dh = preprocessPost(cttt[i], this.props.meta.cttt);
      ctttPP.push(dh);
    };
    return ctttPP;
  }
  setgiaodichid(cttt, giaodichid){
    for(let i = 0; i<cttt.length; i++){
      cttt[i].giaodichid = giaodichid;
    }
    return cttt;
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
  addCTTT(index) {
    return () =>{
      let cttt = this.state.cttt || [];
      const init = this.state.cttt_init || [];
      let befor_cttt = cttt.splice(0, index + 1);
      befor_cttt= [...befor_cttt, {...init}];
      cttt = [...befor_cttt,...cttt];
      this.setState({cttt : cttt});
    }
  }
  delCTTT(index) {
    return () =>{
      let cttt = this.state.cttt;
      if(cttt[index].id) {
        this.props.delCTTT(cttt[index].id);
      }
      delete cttt[index];
      cttt.splice(index, 1);
      this.setState({cttt: cttt});
    }
  }
  handleChangeCTTT(index){
    return ()=>{
      let cttt = this.state.cttt;
      let addr = event.target.dataset.addr;
      let value = event.target.value;
      if(addr === 'thanhtoan'){
        value = parseFloat(value)*-1 || 0;
      }
      cttt[index][addr] = value;
      this.setState({cttt: cttt, editedCTTT: true});
    }
  }
  render() {
    const {meta, error, message, listLV, listK} = this.props;
    const {gdItem, edited, submited, showFullField, giaodichid, cttt, editedCTTT} = this.state;
    const metaGD = meta && preprocess(meta.giaodich) || {};
    const metaCTTT = meta && preprocess(meta.cttt) || {};
    const listPNH = parseOptId(this.props.listPNH ||[]);
    const listNCC = parseOptTen(this.props.listNCC || []);
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <h4>Hóa Đơn Nhà Cung Cấp</h4>
          </div>
          <div className="col-md-8 flex-right">
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-12" key="gdfield">
            <div className="row">
              <div className="col-md-7 boder-right">
                <div className='form-group' key="giaodichid">
                  {renderLabel(metaGD.id)}
                  &nbsp;
                  <Select
                    data-addr='giaodichid'
                    className= "uppercase"
                    placeholder="Chon phieu dat hang..."
                    clearable= {false}
                    searchable={true}
                    onChange={::this.changeGDID}
                    value={giaodichid || ''}
                    options={listPNH} />
                </div>
                <div className='form-group' key="khachhang">
                  {renderLabel(metaGD.doitacid)}
                  &nbsp;
                  <Select
                    data-addr='doitacid'
                    placeholder="Chon nha cung cap..."
                    clearable= {false}
                    searchable={true}
                    disabled={true}
                    value={gdItem.doitacid}
                    options={listNCC} />
                </div>
                <div className='form-group' key="tinhtrangthanhtoan">
                  {renderLabel(metaGD.tinhtrangthanhtoan)}
                  {metaGD && metaGD["tinhtrangthanhtoan"].$input(gdItem,this)}
                </div>
                <div className='form-group' key="tong">
                  {renderLabel(metaGD.tongtien)}
                  <input className='form-control' type="text" readOnly value={numeral(gdItem.tongtien).format('(0,0.00)')}/>
                </div>
                <div className='form-group' key="thanhtoan">
                  {renderLabel(metaGD.thanhtoan)}
                  <input className='form-control' type="text" readOnly value={numeral(gdItem.thanhtoan).format('(0,0.00)')}/>
                </div>
              </div>
              <div className="col-md-5">
              </div>
            </div>
          </div>
          <div className="col-md-12" key="cttt">
            <br/>
            <strong>Chi tiết thanh toán:</strong>
            <table id="example" className="table display nowrap dataTable" role="grid" aria-describedby="example_info" >
              <thead>
                <THead meta={metaCTTT} add={::this.addCTTT(0)}></THead>
              </thead>
              <tbody>
                {cttt && cttt.map((dh, index)=>{
                  return <TBody
                    key={index}
                    meta = {metaCTTT}
                    item = {dh}
                    index = {index}
                    edit ={::this.handleChangeCTTT(index)}
                    add = {::this.addCTTT(index)}
                    del = {::this.delCTTT(index)}/>
                })}
              </tbody>
            </table>
          </div>
        </div>
        <br/>
        <hr/>
        <div className="row">
          <div className="col-md-12 flex-right">
          {submited ? <p className='help-block required'>
              {::this.checkRq()}
            </p>:null}&nbsp;&nbsp;
          {giaodichid? <button className='btn btn-warning' onClick={::this.onSubmit} disabled={(edited||editedCTTT? '':'disabled')}>
          {"Cập Nhật"}
          </button>: <button className='btn btn-success' onClick={::this.onSubmit} disabled={(edited||editedCTTT? '':'disabled')}>
          {"Tạo mới"}</button>}&nbsp;&nbsp;&nbsp;&nbsp;
            <button className ='btn btn-default' onClick={::this.onClose}>Đóng</button>
          </div>
        </div>
      </div>
    );
  }
}
