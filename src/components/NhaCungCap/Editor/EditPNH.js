import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {initObject, ATOLV, OTA, preprocess, datetime, changeDTI, renderLabel, setValue, checkRequire, preprocessPost, parseOptTen, parseOptId} from '../../../meta';
import {THead, TBody} from '../../table/rowForPNH';
import {THeadCTDH, TBodyCTDH} from '../../table/rowForPDH';
import * as pnhActions from '../../../actions/nhacungcap/pnhActions';
import * as giaodichActions from '../../../actions/giaodichActions';
import Modal from '../../layout/Modal';
import {Style} from '../../Style';
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
  gdItem: state.phieunhaphang.editItem,
  meta: state.meta.phieunhaphang,
  listNCC: state.giaodich.listNCC,
  listLV: state.giaodich.listLV,
  listK: state.giaodich.listK,
  listPDH: state.giaodich.listPDH,
  user: state.user.user,
  ctk: state.phieunhaphang.ctk,
  msgPCTK: state.phieunhaphang.msgPCTK
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
    gdItem: {},
    giaodichid: this.props.giaodichid,
    ctk: [],
    edited: false,
    editedCTK: false,
    submiting: false,
    ctk_init: {
      giaodichid: this.props.giaodichid || '',
      loaivaiid:'',
      soluong: 1 , // so luong cay vai
      chieudai: 0,
      gia:'',
      khoid:'',
      ngaytao: new Date(changeDTI(datetime(new Date()))),
      ngaynhap: changeDTI(datetime(new Date())),
      loaigiaodich:"pdh"
    },
    newGD: true,
    openAdd: false
  }
  componentWillMount(){
    if(this.props.giaodichid){
      this.props.getItem(this.props.giaodichid);
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
        submiting: false,
        edited: false
      });
    }else if(nextProps.gdItem){
      this.setState({
        ctk: nextProps.gdItem.chitietcayvai ||[],
        gdItem: nextProps.gdItem,
        edited: false,
        editedCTK: false,
        submiting: false
      });
    }
    if(nextProps.gdItem && this.state.newGD){
      let gdItem = nextProps.gdItem;
      gdItem.nvnh = this.props.user.nhanvienid || 'admin';
      gdItem.tinhtrangkho = 'chuaxuly';
      gdItem.ngayhoanthanh = changeDTI(datetime(new Date()));
      this.setState({
        giaodichid: nextProps.gdItem.id,
        ctk: nextProps.gdItem.chitietcayvai ||[],
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
  renderCTK(options={}){
    return ()=>{
      let ctk = this.state.ctk ||[];
      let soluong = options.soluong || 0;
      let ctk_init = this.state.ctk_init || {};
      // if(soluong<= ctk.length){
      //   this.setState({ctk: ctk, openAdd: false});
      // }else{
      for (let i = 0; i < soluong; i++) {
        let ctk_new = {...ctk_init};
        ctk_new.loaivaiid = options.loaivaiid;
        ctk_new.khoid = options.khoid;
        ctk_new.gia = options.gia;
        ctk_new.cayvaiid = 'cv' + this.state.giaodichid + new Date().getSeconds().toString()+ new Date().getMinutes().toString();
        ctk.push(ctk_new);
      };
      this.setState({ctk: ctk, openAdd: false, editedCTK: true});
      // }
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
    return ()=>{
      let ctk = this.state.ctk;
      let addr = event.target.dataset.addr;
      let value = event.target.value;
      ctk[index][addr] = value;
      this.setState({ctk: ctk, editedCTK: true});
    }
  }
  openAdd() {
    if(this.state.giaodichid){
      this.setState({openAdd: !this.state.openAdd});
    }else{
      alert("Vui long chon id phieu dat hang");
    }
  }
  render() {
    const {meta, error, message, listK} = this.props;
    const {gdItem, edited, submited, showFullField, giaodichid, ctk, editedCTK, openAdd} = this.state;
    const metaGD = meta && preprocess(meta.giaodich) || {};
    const metaCTK = meta && preprocess(meta.ctk) || {};
    const metaCTDH = meta && preprocess(meta.ctdh) || {};
    const listLV = filterLV(gdItem.chitietdonhang || [], this.props.listLV||[]);
    const listNCC = parseOptTen(this.props.listNCC || []);
    const listPDH = parseOptId(this.props.listPDH ||[]);
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <h4>Phiếu Nhập Hàng</h4>
          </div>
          <div className="col-md-8 flex-right">
          </div>
        </div>
        <hr/>
        <div className="row">
          {openAdd? <Add close={::this.openAdd} listLV={listLV} listK={listK} meta={metaCTK} add={::this.renderCTK}></Add>
             : null}
          <div className="col-md-12" key="gdfield">
            <div className="row">
              <div className="col-md-8 boder-right">
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
                    options={listPDH} />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className='form-group' key="khachhang">
                      {renderLabel(metaGD.doitacid)}
                      &nbsp;
                     <Select
                        data-addr='doitacid'
                        placeholder="Chon nha cung cap..."
                        clearable= {false}
                        searchable={true}
                        disabled={true}
                        onChange={::this.changeSelect}
                        value={gdItem.doitacid}
                        options={listNCC} />
                    </div>
                    <div className='form-group' key="tinhtrangkho">
                      {renderLabel(metaGD.tinhtrangkho)}
                      {metaGD && metaGD["tinhtrangkho"].$input(gdItem,this)}
                    </div>
                    <div className='form-group' key="tongtien">
                      {renderLabel(metaGD.tongtien)}
                      {metaGD && metaGD["tongtien"].$input(gdItem,this)}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className='form-group' key="donhang">
                      {renderLabel(metaGD.donhang)}
                      {metaGD && metaGD["donhang"].$input(gdItem,this)}
                    </div>
                    <div className='form-group' key="kho">
                      {renderLabel(metaGD.kho)}
                      {metaGD && metaGD["kho"].$input(gdItem,this)}
                    </div>
                    <div className='form-group' key="ngayhoanthanh">
                      {renderLabel(metaGD.ngayhoanthanh)}
                      {metaGD && metaGD["ngayhoanthanh"].$input(gdItem,this)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
              </div>
            </div>
          </div>
          <div className="col-md-12" key="view ctdh">
            <strong>Chi tiết đơn hàng:</strong>
            <table id="example" className="table display preline dataTable" cellSpacing="0" width="100%" role="grid" aria-describedby="example_info" style={{"width": "100%"}}>
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
            <strong>Chi tiết nhập hàng:</strong>
            <table id="example" className="table display nowrap dataTable" role="grid" aria-describedby="example_info" >
              <thead>
                <THead meta={metaCTK} add={::this.addCTK(0)} addRow={::this.openAdd}></THead>
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
class Add extends Component{
  static propTypes = {
    listLV: PropTypes.array,
    listK: PropTypes.array,
    meta: PropTypes.object,
    close: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired
  }
  state = {
    options:{
      loaivaiid: '',
      khoid: '',
      sodong: 0,
      gia: 0
    },
    kho: {},
    objectK: ATOLV(this.props.listK || [])||{},
    height: 0
  }
  componentWillMount(){
    this.state.objectK = ATOLV(this.props.listK || []);
    this.state.kho = this.state.objectK[this.state.options.khoid]|| {};
  }
  componentWillUnmount(){
    this.setState({
      options:{
      loaivaiid: '',
      khoid: '',
      sodong: 0,
      gia: 0
    },
    kho: {},
    objectK: {},
    height: 0
    })
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.listK){
      let obj = ATOLV(nextProps.listK || [])|| {};
      let kho = obj[this.state.options.khoid] || {};
      this.setState({objectK: obj, kho: kho});
    }
  }
  handleChange(){
    let obj = this.state.options;
    let addr = event.target.dataset.addr;
    let value = event.target.value;
    this.setState({
      options: setValue(obj, addr, value)
    })
  }
  selectLV(val){
    let obj = this.state.options;
    obj.loaivaiid = val;
    this.setState({options: obj});
  }
  selectK(val){
    let obj = this.state.options;
    obj.khoid = val;
    this.setState({options: obj, kho: this.state.objectK[val]});
  }
  changeHeight(filter){
    return ()=>{
      let height = 0;
      if(filter === "kho"){
        height = this.props.listK.length;
      }else{
        height = this.props.listLV.length;
      }
      if(height> 6 ){
        height = 6;
      }
      this.setState({height: height});
    }
  }
  onBlur(){
    this.setState({height: 0});
  }
  render(){
    const {close, close, add} = this.props;
    const {options, kho} = this.state;
    const listLV = parseOptTen(this.props.listLV || []);
    const listK = parseOptTen(this.props.listK || []);
    const height = this.state.height * 34 + 185;
    let content_add = Style.content_add;
    content_add.height = height + "px";
    return(
        <Modal  modalStyle={Style.content_add}
          overlayStyle= {Style.overlay}
          close={close}
          overlayClassName='modaldumb modalOverlay modalOverlay--after-open '
          modalClassName='dumb modalContent modalContent--after-open '
          >
          <div className="col-md-12" key="view ctdh">
            <br/>
            <h4 className="underline">Chi tiết thêm:</h4>
          <table id="example" className="table display nowrap dataTable" role="grid" aria-describedby="example_info" >
          <thead>
            <tr role="row">
              <th key="loaivaiid" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1">
                {"Loại vải"}
              </th>
              <th key="khoid" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1">
                {"Kho"}
              </th>
              <th key="controng" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1">
                {"Còn trống"}
              </th>
              <th key="soluong" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1">
                {"Số cây"}
              </th>
              <th key="gia" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1">
                {"Giá"}
              </th>
              <th key="control" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1">
              </th>
            </tr>
          </thead>
          <tbody>
            <tr role="row">
              <td key="loaivaiid" className=" td-content">
                <Select
                  data-addr='loaivaiid'
                  placeholder="Chon loai vai..."
                  clearable= {false}
                  searchable={true}
                  onChange={::this.selectLV}
                  onFocus={::this.changeHeight("loaivai")}
                  onBlur={::this.onBlur}
                  value={options.loaivaiid}
                  options={listLV} />
              </td>
              <td key="khoid" className=" td-content">
                <Select
                  data-addr='khoid'
                  placeholder="Chon kho"
                  clearable= {false}
                  searchable={true}
                  onChange={::this.selectK}
                  onFocus={::this.changeHeight("kho")}
                  onBlur={::this.onBlur}
                  value={options.khoid}
                  options={listK} />
              </td>
              <td key="controng">
                <input type="number" data-addr='trong' className="form-control" readOnly  value={kho.trong || ''} />
              </td>
              <td key="soluong">
                <input type="number" step='10' min='0' data-addr='soluong'className="form-control dt-body-right" value={options.soluong || ''} onChange={::this.handleChange} />
              </td>
              <td key="gia">
                <input type="number" step='10' min='0' data-addr='gia'className="form-control dt-body-right" value={options.gia || ''} onChange={::this.handleChange} />
              </td>
              <td key="control" className="group-edit">
                < button className = "btn btn-success btn-table btn-in-th btn-in-add"
                    title = "Add"
                    onClick = {add(options)}
                    key = "add" >
                  < i className = 'fa fa-plus' / > Add
                  < /button>
                  < button className = "btn btn-default btn-table btn-in-th"
                    title = "close"
                    onClick = {close}
                    key = "close" >
                  < i className = "fa fa-close" / > Close
                  < /button>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
        </Modal>
    );
  }
}
