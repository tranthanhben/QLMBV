import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as pdhActions from '../../actions/nhacungcap/pdhActions';
import {THead, TBody, TFoot} from '../table/row';
import {Pagination, PageShow} from '../table/pagination';
import {isLoaded, loadList as loadPDH} from '../../actions/nhacungcap/pdhActions';
import layoutActions from '../../actions/layoutActions';
import Modal from '../layout/Modal';
import EditPDH from './Editor/EditPDH';
import {Style} from '../Style';
import {ViewPDH} from './Editor/ViewFull';

const metaConst = {
  "id": {
    name: "id",
    label: "PDHID",
    sort: true,
    up: true
  },
  "nhanvienid": {
    name: "nhanvienid",
    label: "NVID",
    sort: false,
    up: true
  },
  "ngaytao": {
    name: "ngaytao",
    label: "Ngày Tạo",
    type: "date",
    sort: true
  },
  "tinhtrang": {
    name: "tinhtrang",
    label: "Tình Trạng",
    sort: true
  },
  "ghichu": {
    name: "ghichu",
    label: "Ghi Chú",
    sort: false,
    type: "content"
  }
};

@connect(
  state =>({
    listPDH: state.phieudathang.list,
    paging: state.phieudathang.paging,
    error: state.phieudathang.error,
    loading: state.phieudathang.loading,
    reload: state.phieudathang.reloadList
  }),
  {...pdhActions, ...layoutActions})

export default
class PDH extends Component{
  static propTypes = {
    listPDH: PropTypes.array,
    error: PropTypes.object,
    paging: PropTypes.object,
    loading: PropTypes.bool,
    loadList:PropTypes.func.isRequired
  }

  static fetchData(store){
    if(!isLoaded(store.getState)){
      return store.dispatch(loadPDH());
    }
  }

  state = {
    options :{
      page_size: 10,
      name: '',
      sort: ''
    },
    openView: false,
    openEdit: false,
    itemView: {},
    idEdit: '',
    meta: metaConst
  }
  changePageSize(){
    let value = event.target.value;
    let opt = this.state.options;
    if(value !==this.state.pageSize){
      opt.page_size = value;
      opt.page = 0;
      this.props.loadList(opt);
      this.setState({options: opt});
    }
  }
  sortField(field){
    return ()=>{
      let opt = this.state.options;
      if(field !== opt.sort){
        opt.sort = field;
        this.props.loadList(opt);
        this.setState({options: opt});
      }else{
        opt.sort = "-" +field;
        this.props.loadList(opt);
        this.setState({options: opt});
      }
    }
  }
  searchField(){
    let value = event.target.value;
    let opt = this.state.options;
    if(value !== opt.name){
      opt.name = value;
      opt.page = 0;
      this.props.loadList(opt);
      this.setState({options: opt});
    }
  }
  paginationLoad(page){
    return () =>{
      let opt = this.state.options;
      opt.page = page;
      this.props.loadList(opt);
      this.setState({options: opt});
    }
  }
  viewItemFull(item){
    return ()=>{
      this.props.openModal(true);
      this.setState({itemView: item, openView: true});
    }
  }
  viewModal() {
    this.props.openModal(!this.state.openView);
    this.setState({openView: !this.state.openView})
  }
  editItem(id){
    return ()=>{
      console.log("id", id);
      this.props.openModal(true);
      this.setState({idEdit: id, openEdit: true});
    }
  }
  editModal() {
    this.props.openModal(!this.state.openEdit);
    this.setState({openEdit: !this.state.openEdit, openView: false})
  }
  render(){
    const {listPDH, paging} = this.props;
    const {options, meta, itemView, openView, openEdit, idEdit} = this.state;
    return (
        <div className="mbv-grid container-fluid" style={{"zIndex": "9999983"}}>
          <div className="row">
            <div className="col-xs-12">
              <div id="example_wrapper" className="dataTables_wrapper">
                <div className="dataTables_length" id="example_length" style={{"display": "inline-flex"}}>
                  <label className="line-height" style={{"display": "flex"}}>Show
                    <select name="example_length" aria-controls="example" className=" form-control" onChange={::this.changePageSize} value={this.state.options.page_size}>
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select> entries</label>
                </div>
                <div id="example_filter" className="dataTables_filter" style={{"display": "inline-flex", "float":"right"}}>
                  <label className="line-height" style={{"display": "flex"}}>Search:
                    <input type="search" className="form-control " placeholder="Search Name" onChange={::this.searchField} aria-controls="example" />
                  </label>
                </div>
                <table id="example" className="table display preline dataTable" cellSpacing="0" width="100%" role="grid" aria-describedby="example_info" style={{"width": "100%"}}>
                  <thead>
                    <THead meta={meta} sort={options.sort} sortFunc={::this.sortField} ></THead>
                  </thead>
                  <tfoot>
                    <TFoot meta={meta} ></TFoot>
                  </tfoot>
                  <tbody>
                    {listPDH && listPDH.map((item, index) =>{
                      return(
                        <TBody item={item} index={index} sort={options.sort} meta={meta} paging={paging} key={index}view={::this.viewItemFull} edit={::this.editItem} />
                      );
                    })}
                  </tbody>
                </table>
                {openView?
                  <Modal  modalStyle={Style.content_60}
                  overlayStyle= {Style.overlay}
                  close={::this.viewModal}
                  overlayClassName='modaldumb modalOverlay modalOverlay--after-open '
                  modalClassName='dumb modalContent modalContent--after-open '
                  >
                    <ViewNCC meta={meta} item={itemView} close={::this.viewModal} edit={::this.editItem}></ViewNCC>
                  </Modal> : null}
                  {openEdit?
                  <Modal  modalStyle={Style.content_60}
                  overlayStyle= {Style.overlay}
                  close={::this.editModal}
                  overlayClassName='modaldumb modalOverlay modalOverlay--after-open '
                  modalClassName='dumb modalContent modalContent--after-open '
                  >
                    <EditPDH meta={meta} id={idEdit} close={::this.editModal} ></EditPDH>
                  </Modal> : null}
                <PageShow paging={paging} length={listPDH.length}></PageShow>
                <Pagination load={::this.paginationLoad} paging={paging}></Pagination>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
