import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {initObject, ATO, OTA, preprocess, datetime, changeDTI, renderLabel, setValue, checkRequire, preprocessPost} from '../../../meta';
import {THead, TBody} from '../../table/rowForPNH';
import {THeadCTDH, TBodyCTDH} from '../../table/rowForPDH';
import * as pnhActions from '../../../actions/nhacungcap/pnhActions';
import * as giaodichActions from '../../../actions/giaodichActions';

@connect(state =>({
  gdItem: state.phieunhaphang.editItem,
  meta: state.meta.phieunhaphang,
  listNCC: state.giaodich.listNCC,
  listLV: state.giaodich.listLV,
  listK: state.giaodich.listK,
  listPDH: state.giaodich.listPDH,
  user: state.user.user,
  ctk: state.phieunhaphang.ctk
}),{...pnhActions, ...giaodichActions})
export default class EditPNH extends Component {
  static propTypes = {
    giaodichid: PropTypes.string,
    listK: PropTypes.array,
    listLV: PropTypes.array,
    listNCC: PropTypes.array,
    listPDH: PropTypes.array,
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
      doitacid: '',
      ngayhoanthanh: changeDTI(datetime(new Date()))
    },
    giaodichid: this.props.giaodichid,
    ctk:this.props.gdItem && this.props.gdItem.chitietkho || [],
    edited: false,
    editedCTK: false,
    submiting: false,
    ctk_init: {
      giaodichid: this.props.giaodichid || '',
      loaivaiid:'',
      soluong:'',
      gia:'',
      khoid:'',
      loaigiaodich:"pdh"
    },
    newGD: true
  }
  componentWillMount(){
    if(this.props.giaodichid){
      this.props.getItem(this.props.giaodichid);
      this.state.newGD = false;
    }
    this.props.loadNCC();
    this.props.loadLV();
    this.props.loadK();
    this.props.loadPDH();
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.gdItem && this.state.submiting){
      let ctk = this.state.ctk;
      ctk = this.setgiaodichid(ctk,nextProps.gdItem.id);
      this.props.postCTK(this.xulytruoc(ctk));
      this.setState({
        giaodichid: nextProps.gdItem.id,
        gdItem: nextProps.gdItem,
        newGD: false,
        submiting: false,
        edited: false
      });
    }else if(nextProps.gdItem){
      this.setState({
        giaodichid: nextProps.gdItem.id,
        ctk: nextProps.gdItem.chitietkho ||[],
        gdItem: nextProps.gdItem,
        newGD: false,
        edited: false,
        editedCTK: false,
        submiting: false,
        ctk_init: {
          giaodichid: nextProps.gdItem.id || '',
          loaivaiid:'',
          soluong:'',
          gia:'',
          khoid:'',
          loaigiaodich:"pdh"
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
  changeGDID(){
    let value = event.target.value;
    this.setState({
      edited: false,
      giaodichid: value
    });
    this.props.getItem(value);
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
      this.setState({submiting: true});
      if(this.state.edited){
        this.props.postItem(preprocessPost(this.state.gdItem, this.props.meta.giaodich));
      }else{
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
      console.log(befor_ctk, ctk);
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
    return ()=>{
      let ctk = this.state.ctk;
      let addr = event.target.dataset.addr;
      let value = event.target.value;
      ctk[index][addr] = value;
      this.setState({ctk: ctk, editedCTK: true});
    }
  }
  render() {
    const {meta, error, message, listNCC, listLV, listK, listPDH} = this.props;
    const {gdItem, edited, submited, showFullField, giaodichid, ctk, editedCTK} = this.state;
    const metaGD = meta && preprocess(meta.giaodich) || {};
    const metaCTK = meta && preprocess(meta.ctk) || {};
    const metaCTDH = meta && preprocess(meta.ctdh) || {};
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
          { giaodichid? [<div className="col-md-12" key="gdfield">
            <div className="row">
              <div className="col-md-8 boder-right">
                <div className='form-group' key="giaodichid">
                  {renderLabel(metaGD.id)}
                  &nbsp;
                  <select className='form-control   uppercase' data-addr='id'
                  onChange={::this.changeGDID}
                  value={giaodichid || ''}>
                  <option key='id'>-- Giao Dich ID --</option>
                  {listPDH && listPDH.map(b => {
                    return (
                      <option key={b.id} value={b.id}>
                        {b.id}
                      </option>
                    );
                  })}
                  </select>
                </div>
                <div className='form-group' key="khachhang">
                  {renderLabel(metaGD.doitacid)}
                  &nbsp;
                  <select className='form-control' data-addr='doitacid'
                  readOnly
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
                <div className='form-group' key="tinhtrangdonhang">
                  {renderLabel(metaGD.tinhtrangdonhang)}
                  {metaGD && metaGD["tinhtrangdonhang"].$input(gdItem,this)}
                </div>
              </div>
              <div className="col-md-4">
              </div>
            </div>
          </div>,
          <div className="col-md-12" key="view ctdh">
            <br/>
            <strong>Chi tiết đơn hàng:</strong>
            <table id="example" className="table display preline dataTable" cellSpacing="0" width="100%" role="grid" aria-describedby="example_info" style={{"width": "100%"}}>
              <thead>
                <THeadCTDH meta={metaCTDH} ></THeadCTDH>
              </thead>
              <tbody>
                {gdItem.chitietdonhang && gdItem.chitietdonhang.map((item, index)=>{
                  return <TBodyCTDH meta={metaCTDH} listLV={listLV} index={index} item={item}></TBodyCTDH>;
                })}
              </tbody>
            </table>
          </div>,
          <div className="col-md-12" key="ctk">
            <br/>
            <strong>Chi tiết nhập hàng:</strong>
            <table id="example" className="table display nowrap dataTable" role="grid" aria-describedby="example_info" >
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
          ]: <div className="col-md-12">
            <div className="row">
              <div className="col-md-8 boder-right">
                <div className='form-group' key="giaodichid">
                  {renderLabel(metaGD.id)}
                  &nbsp;
                  <select className='form-control  uppercase' data-addr='id'
                  onChange={::this.changeGDID}
                  value={giaodichid || ''}>
                  <option key='id'>-- Giao Dich ID --</option>
                  {listPDH && listPDH.map(b => {
                    return (
                      <option key={b.id} value={b.id}>
                        {b.id}
                      </option>
                    );
                  })}
                  </select>
                </div>
              </div>
            </div>
          </div>}

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
