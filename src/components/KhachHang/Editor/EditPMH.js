import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {initObject, ATO, OTA, preprocess, datetime, changeDTI, renderLabel, setValue, checkRequire, preprocessPost, numeral, parseOptTen} from '../../../meta';
import {THead, TBody} from '../../table/rowForPMH';
import * as pmhActions from '../../../actions/khachhang/pmhActions';
import * as giaodichActions from '../../../actions/giaodichActions';
import {markdown} from 'markdown';
import {NotePMH} from '../../markdownNote';
import Select from 'react-select';


@connect(state =>({
  gdItem: state.phieumuahang.editItem,
  meta: state.meta.phieumuahang,
  listKH: state.giaodich.listKH,
  listLV: state.giaodich.listLV,
  user: state.user.user,
  ctdh: state.phieumuahang.ctdh,
  msgPCTDH: state.phieumuahang.msgPCTDH,
}),{...pmhActions, ...giaodichActions})
export default class EditPMH extends Component {
  static propTypes = {
    giaodichid: PropTypes.string,
    gdItem: PropTypes.object,
    meta: PropTypes.object,
    user: PropTypes.object,
    postItem: PropTypes.func.isRequired,
    postCTDH: PropTypes.func.isRequired,
    getItem: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    loadKH: PropTypes.func.isRequired,
    loadLV: PropTypes.func.isRequired,
  }
  state = {
    gdItem: {
      nvdh: this.props.user.nhanvienid || 'admin',
      tinhtrangdonhang: 'dangxuly',
      doitacid: '',
      ngaydat: changeDTI(datetime(new Date()))
    },
    giaodichid: this.props.giaodichid,
    ctdh:this.props.gdItem && this.props.gdItem.chitietdonhang || [],
    edited: false,
    editedDH: false,
    submiting: false,
    ctdh_init: {
      giaodichid: this.props.giaodichid || '',
      loaivaiid:'',
      soluong: 1,
      chieudai: 0,
      gia:'',
      loaigiaodich:"pmh"
    },
    newGD: true
  }
  componentWillMount(){
    if(this.props.giaodichid){
      this.props.getItem(this.props.giaodichid);
    }
    this.props.loadKH();
    this.props.loadLV();
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.gdItem && this.state.submiting){
      let ctdh = this.state.ctdh;
      ctdh = this.setgiaodichid(ctdh,nextProps.gdItem.id);
      this.props.postCTDH(this.xulytruoc(ctdh));
      this.setState({
        giaodichid: nextProps.gdItem.id,
        gdItem: nextProps.gdItem,
        submiting: false,
        edited: false
      });
    }else if(nextProps.gdItem){
      this.setState({
        giaodichid: nextProps.gdItem.id,
        ctdh: nextProps.gdItem.chitietdonhang ||[],
        gdItem: nextProps.gdItem,
        edited: false,
        editedDH: false,
        submiting: false,
        ctdh_init: {
          giaodichid: nextProps.gdItem.id || '',
          loaivaiid:'',
          soluong: 1,
          chieudai: 0,
          gia:'',
          loaigiaodich:"pmh"
        }
      });
    }
    if(nextProps.gdItem && this.state.newGD){
      let gdItem = nextProps.gdItem;
      gdItem.nvdh = gdItem.nvdh? gdItem.nvdh :(this.props.user.nhanvienid || 'admin');
      gdItem.tinhtrangdathang =gdItem.tinhtrangdathang? gdItem.tinhtrangdathang: 'chuaxuly';
      this.setState({
        giaodichid: nextProps.gdItem.id,
        ctdh: nextProps.gdItem.chitietkho ||[],
        gdItem: gdItem,
        newGD: false,
        edited: true,
        ctdh_init: {
          giaodichid: nextProps.gdItem.id || '',
          loaivaiid:'',
          soluong: 1,
          chieudai: 0,
          gia:'',
          loaigiaodich:"pmh"
        }
      });
    }
    if(nextProps.ctdh){
      this.setState({
        ctdh: nextProps.ctdh,
        editedDH: false,
        edited: false
      });
    }
    if(nextProps.msgPCTDH){
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
  checkRq(){
    let mes = '';
    if(checkRequire(this.props.meta.giaodich, this.state.gdItem)) {
      return checkRequire(this.props.meta.giaodich, this.state.gdItem);
    }
    if(this.state.ctdh.length === 0){
      return 'Vui lòng thêm chi tiết đơn hàng';
    }
    return '';
  }
  changeSelect(val) {
    let gdItem = this.state.gdItem;
    if(val && val !== gdItem.doitacid){
      gdItem.doitacid = val;
      this.setState({
        edited: true,
        gdItem:gdItem
      });
    }
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
        this.props.postCTDH(this.xulytruoc(this.state.ctdh));
      }
    }
  }
  xulytruoc(ctdh){
    let ctdhPP = [];
    for (var i = 0; i < ctdh.length; i++) {
      let dh = preprocessPost(ctdh[i], this.props.meta.ctdh);
      if(dh.loaivaiid){
        ctdhPP.push(dh);
      }
    };
    return ctdhPP;
  }
  setgiaodichid(ctdh, giaodichid){
    for(let i = 0; i<ctdh.length; i++){
      ctdh[i].giaodichid = giaodichid;
    }
    return ctdh;
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
  addCTDH(index) {
    return () =>{
      let ctdh = this.state.ctdh || [];
      const init = this.state.ctdh_init || [];
      let befor_ctdh = ctdh.splice(0, index + 1);
      befor_ctdh= [...befor_ctdh, {...init}];
      ctdh = [...befor_ctdh,...ctdh];
      this.setState({ctdh : ctdh});
    }
  }
  delCTDH(index) {
    return () =>{
      let ctdh = this.state.ctdh;
      if(ctdh[index].id) {
        this.props.delCTDH(ctdh[index].id);
      }
      delete ctdh[index];
      ctdh.splice(index, 1);
      this.setState({ctdh: ctdh});
    }
  }
  handleChangeCTDH(index){
    return (event)=>{
      let ctdh = this.state.ctdh;
      let addr = event.target.dataset.addr;
      let value = event.target.value;
      ctdh[index][addr] = value;
      this.setState({ctdh: ctdh, editedDH: true});
    }
  }

  render() {
    const {meta, error, message, listLV} = this.props;
    const {gdItem, edited, submited, showFullField, giaodichid, ctdh, editedDH} = this.state;
    const metaGD = meta && preprocess(meta.giaodich) || {};
    const metaCTDH = meta && preprocess(meta.ctdh) || {};
    const listKH = parseOptTen(this.props.listKH||[]);
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <h4>Phiếu Mua Hàng</h4>
          </div>
          <div className="col-md-8 flex-right">
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-12" key="gdfield">
            <div className="row">
              <div className="col-md-7 boder-right">
                <div className='form-group' key="khachhang">
                  {renderLabel(metaGD.doitacid)}
                  &nbsp;
                  <Select
                    data-addr='doitacid'
                    placeholder="Chon khach hang..."
                    clearable= {true}
                    searchable={true}
                     onChange={::this.changeSelect}
                    value={gdItem.doitacid}
                    options={listKH} />
                </div>
                <div className='form-group' key="tinhtrangdonhang">
                  {renderLabel(metaGD.tinhtrangdonhang)}
                  {metaGD && metaGD["tinhtrangdonhang"].$input(gdItem,this)}
                </div>
                <div className='form-group' key="ngaydat">
                  {renderLabel(metaGD.ngaydat)}
                  {metaGD && metaGD["ngaydat"].$input(gdItem,this)}
                </div>
                <div className='form-group' key="tongtiendutinh">
                  {renderLabel(metaGD.tongtiendutinh)}
                  <input type="text" data-addr='mausac'className="form-control" readOnly value={numeral(gdItem.tongtiendutinh).format('(0,0)') || '0'} />
                </div>
              </div>
              <div className="col-md-5">
                <p dangerouslySetInnerHTML={{ __html: markdown.toHTML(NotePMH || '') }}></p>
              </div>
            </div>
          </div>
          <div className="col-md-12" key="ctdh">
            <br/>
            <strong>Chi tiết đơn hàng:</strong>
            <table id="example" className="table display nowrap dataTable" role="grid" aria-describedby="example_info" >
              <thead>
                <THead meta={metaCTDH} add={::this.addCTDH(-1)}></THead>
              </thead>
              <tbody>
                {ctdh && ctdh.map((dh, index)=>{
                  return <TBody
                    key={index}
                    meta = {metaCTDH}
                    item = {dh}
                    index = {index}
                    listLV = {listLV}
                    edit ={::this.handleChangeCTDH(index)}
                    add = {::this.addCTDH(index)}
                    del = {::this.delCTDH(index)}/>
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
          {giaodichid? <button className='btn btn-warning' onClick={::this.onSubmit} disabled={(edited||editedDH? '':'disabled')}>
          {"Cập Nhật"}
          </button>: <button className='btn btn-success' onClick={::this.onSubmit} disabled={(edited||editedDH? '':'disabled')}>
          {"Tạo mới"}</button>}&nbsp;&nbsp;&nbsp;&nbsp;
            <button className ='btn btn-default' onClick={::this.onClose}>Đóng</button>
          </div>
        </div>
      </div>
    );
  }
}
