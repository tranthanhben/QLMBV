import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {initObject, ATO, OTA,ATOLV,  preprocess, datetime, changeDTI, renderLabel, setValue, checkRequire, preprocessPost, numeral, parseOptTen, parseOptId} from '../../../meta';
import {THead, TBody} from '../../table/rowForPXH';
import {THeadCTDH, TBodyCTDH} from '../../table/rowForPMH';
import * as pxhActions from '../../../actions/khachhang/pxhActions';
import * as giaodichActions from '../../../actions/giaodichActions';
import Select from 'react-select';
function filterLV(ctdh, list){
  let listLV =[];
  let obj = ATOLV(list);
  ctdh.map(dh =>{
    listLV.push(obj[dh.loaivaiid]);
  });
  return [...listLV];
}
@connect(state =>({
  gdItem: state.phieuxuathang.editItem,
  meta: state.meta.phieuxuathang,
  listKH: state.giaodich.listKH,
  listLV: state.giaodich.listLV,
  listK: state.giaodich.listK,
  listPMH: state.giaodich.listPMH,
  user: state.user.user,
  ctk: state.phieuxuathang.ctk
}),{...pxhActions, ...giaodichActions})
export default class EditPXH extends Component {
  static propTypes = {
    giaodichid: PropTypes.string,
    listK: PropTypes.array,
    listLV: PropTypes.array,
    listKH: PropTypes.array,
    listPMH: PropTypes.array,
    gdItem: PropTypes.object,
    meta: PropTypes.object,
    user: PropTypes.object,
    ctk: PropTypes.array,
    postItem: PropTypes.func.isRequired,
    postCTK: PropTypes.func.isRequired,
    getItem: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    loadNCC: PropTypes.func.isRequired,
    loadLV: PropTypes.func.isRequired,
    loadK: PropTypes.func.isRequired
  }
  state = {
    gdItem: {
      nhanvienid: this.props.user.nhanvienid || 'admin',
      tinhtrangkho: 'chuaxuly',
      doitacid: ''
    },
    giaodichid: this.props.giaodichid,
    ctk:this.props.gdItem && this.props.gdItem.chitietkho || [],
    edited: false,
    editedCTK: false,
    submiting: false,
    ctk_init: {
      giaodichid: this.props.giaodichid || '',
      loaivaiid:'',
      soluong: 1,
      chieudai: 0,
      gia:'',
      khoid:'',
      ngaytao: new Date(changeDTI(datetime(new Date()))),
      ngaynhap: changeDTI(datetime(new Date())),
      loaigiaodich:"pmh"
    },
    newGD: true
  }
  componentWillMount(){
    if(this.props.giaodichid){
      this.props.getItem(this.props.giaodichid);
      this.state.newGD = false;
    }
    this.props.loadKH();
    this.props.loadLV();
    this.props.loadK();
    this.props.loadPMH();
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.gdItem && this.state.submiting){
      let ctk = this.state.ctk;
      ctk = this.setgiaodichid(ctk,nextProps.gdItem.id);
      this.props.postCTK(this.xulytruoc(ctk));
      this.setState({
        giaodichid: nextProps.gdItem.id,
        gdItem: nextProps.gdItem,
        submiting: false,
        edited: false
      });
    }else if(nextProps.gdItem){
      this.setState({
        giaodichid: nextProps.gdItem.id,
        ctk: nextProps.gdItem.chitietkho ||[],
        gdItem: nextProps.gdItem,
        edited: false,
        editedCTK: false,
        submiting: false,
        ctk_init: {
          giaodichid: nextProps.gdItem.id || '',
          loaivaiid:'',
          soluong: 1,
          chieudai: 0,
          gia:'',
          khoid:'',
          ngaytao: new Date(changeDTI(datetime(new Date()))),
          ngaynhap: changeDTI(datetime(new Date())),
          loaigiaodich:"pmh"
        }
      });
    }
    if(nextProps.gdItem && this.state.newGD){
      let gdItem = nextProps.gdItem;
      gdItem.nvnh = gdItem.nvnh? gdItem.nvnh :( this.props.user.nhanvienid || 'admin');
      gdItem.newpnh = gdItem.newpnh ? gdItem.newpnh: true;
      gdItem.tinhtrangkho = gdItem.tinhtrangkho? gdItem.tinhtrangkho: 'chuaxuly';
      gdItem.ngayhoanthanh =gdItem.ngayhoanthanh? gdItem.ngayhoanthanh:changeDTI(datetime(new Date()));
      this.setState({
        giaodichid: nextProps.gdItem.id,
        ctk: nextProps.gdItem.chitietkho ||[],
        gdItem: gdItem,
        newGD: false,
        edited: true,
        ctk_init: {
          giaodichid: nextProps.gdItem.id || '',
          loaivaiid:'',
          soluong: 1,
          chieudai: 0,
          gia:'',
          ngaytao: new Date(changeDTI(datetime(new Date()))),
          ngaynhap: changeDTI(datetime(new Date())),
          loaigiaodich:"pmh"
        }
      });
    }
    if(nextProps.ctk){
      this.setState({
        ctk: nextProps.ctk || [],
        editedCTK: false,
        edited: false
      });
    }
    if(nextProps.msgPCTK){
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
    if(this.state.ctk.length === 0){
      return 'Vui lòng thêm chi tiết kho';
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
        this.props.postCTK(this.xulytruoc(this.state.ctk));
      }
    }
  }
  xulytruoc(ctk){
    let ctkPP = [];
    for (var i = 0; i < ctk.length; i++) {
      let dh = preprocessPost(ctk[i], this.props.meta.ctk);
      if(dh.loaivaiid){
        ctkPP.push(dh);
      }
    };
    return ctkPP;
  }
  setgiaodichid(ctk, giaodichid){
    for(let i = 0; i<ctk.length; i++){
      ctk[i].giaodichid = giaodichid;
    }
    return ctk;
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
  addCTK(index) {
    return () =>{
      let ctk = this.state.ctk || [];
      const init = this.state.ctk_init || [];
      let befor_ctk = ctk.splice(0, index + 1);
      befor_ctk= [...befor_ctk, {...init}];
      ctk = [...befor_ctk,...ctk];
      this.setState({ctk : ctk});
    }
  }
  delCTK(index) {
    return () =>{
      let ctk = this.state.ctk;
      if(ctk[index].id) {
        this.props.delCTK(ctk[index].id);
      }
      delete ctk[index];
      ctk.splice(index, 1);
      this.setState({ctk: ctk});
    }
  }
  handleChangeCTK(index){
    return (event)=>{
      let ctk = this.state.ctk;
      let addr = event.target.dataset.addr;
      let value = event.target.value;
      if(addr === 'chieudai'){
        value = parseFloat(value)*-1 || 0;
      }
      ctk[index][addr] = value;
      this.setState({ctk: ctk, editedCTK: true});
    }
  }
  render() {
    const {meta, error, message, listK} = this.props;
    const {gdItem, edited, submited, showFullField, giaodichid, ctk, editedCTK} = this.state;
    const metaGD = meta && preprocess(meta.giaodich) || {};
    const metaCTK = meta && preprocess(meta.ctk) || {};
    const metaCTDH = meta && preprocess(meta.ctdh) || {};
    const listLV = filterLV(gdItem.chitietdonhang || [], this.props.listLV||[]);
    const listKH = parseOptTen(this.props.listKH || []);
    const listPMH = parseOptId(this.props.listPMH ||[]);
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <h4>Phiếu Xuất Hàng</h4>
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
                    placeholder="Chon don dat hang..."
                    clearable= {false}
                    searchable={true}
                    onChange={::this.changeGDID}
                    value={giaodichid || ''}
                    options={listPMH} />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className='form-group' key="khachhang">
                      {renderLabel(metaGD.doitacid)}
                      &nbsp;
                      <Select
                        data-addr='doitacid'
                        placeholder="Chon khach hang..."
                        clearable= {false}
                        searchable={true}
                        disabled={true}
                        value={gdItem.doitacid}
                        options={listKH} />
                    </div>
                    <div className='form-group' key="tinhtrangkho">
                      {renderLabel(metaGD.tinhtrangkho)}
                      {metaGD && metaGD["tinhtrangkho"].$input(gdItem,this)}
                    </div>
                    <div className='form-group' key="tongtien">
                      {renderLabel(metaGD.tongtien)}
                      <input type="text" data-addr='tongtien'className="form-control" readOnly value={numeral(gdItem.tongtien).format('(0,0)') || '0'} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className='form-group' key="donhang">
                      {renderLabel(metaGD.donhang)}
                      <input type="text" data-addr='donhang'className="form-control" readOnly value={numeral(gdItem.donhang).format('(0,0)') || '0'} />
                    </div>
                    <div className='form-group' key="kho">
                      {renderLabel(metaGD.kho)}
                      <input type="text" data-addr='kho'className="form-control" readOnly value={numeral(gdItem.kho).format('(0,0)') || '0'} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
              </div>
            </div>
          </div>
          <div className="col-md-12" key="view ctdh">
            <br/>
            <strong>Chi tiết đơn hàng:</strong>
            <table id="example" className="table display preline dataTable" cellSpacing="0" width="100%" role="grid" aria-describedby="example_info" style={{"maxWidth": "100%"}}>
              <thead>
                <THeadCTDH meta={metaCTDH} ></THeadCTDH>
              </thead>
              <tbody>
                {gdItem.chitietdonhang && gdItem.chitietdonhang.map((item, index)=>{
                  return <TBodyCTDH key={index} meta={metaCTDH} listLV={listLV} index={index} item={item}></TBodyCTDH>;
                })}
              </tbody>
            </table>
          </div>
          <div className="col-md-12" key="ctk">
            <br/>
            <strong>Chi tiết nhập hàng:</strong>
            <table id="example" className="table display nowrap dataTable" role="grid" aria-describedby="example_info" style={{"maxWidth": "100%"}}>
              <thead>
                <THead meta={metaCTK} add={::this.addCTK(0)}></THead>
              </thead>
              <tbody>
                {ctk && ctk.map((dh, index)=>{
                  return <TBody
                    key={index}
                    meta = {metaCTK}
                    item = {dh}
                    index = {index}
                    listLV = {listLV}
                    listK = {listK}
                    edit ={::this.handleChangeCTK(index)}
                    add = {::this.addCTK(index)}
                    del = {::this.delCTK(index)}/>
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
          {giaodichid? <button className='btn btn-warning' onClick={::this.onSubmit} disabled={(edited||editedCTK? '':'disabled')}>
          {"Cập Nhật"}
          </button>: <button className='btn btn-success' onClick={::this.onSubmit} disabled={(edited||editedCTK? '':'disabled')}>
          {"Tạo mới"}</button>}&nbsp;&nbsp;&nbsp;&nbsp;
            <button className ='btn btn-default' onClick={::this.onClose}>Đóng</button>
          </div>
        </div>
      </div>
    );
  }
}
