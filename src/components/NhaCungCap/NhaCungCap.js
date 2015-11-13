import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as nhacungcapActions from '../../actions/nhacungcap/nhacungcapActions';
import {isLoaded, loadList as loadNCC} from '../../actions/nhacungcap/nhacungcapActions';
import {PanelView} from 'components/layout';
import {THead, TBody, TFoot} from '../table/row';
import {Pagination} from '../table/pagination';

@connect(
  state =>({
    listNCC: state.nhacungcap.list,
    paging: state.nhacungcap.paging,
    error: state.nhacungcap.error,
    loading: state.nhacungcap.loading
  }),
  {...nhacungcapActions})

export default
class NhaCungCap extends Component{
  static propTypes = {
    listNCC: PropTypes.array,
    error: PropTypes.object,
    paging: PropTypes.object,
    loading: PropTypes.bool,
    loadList:PropTypes.func.isRequired
  }
  static fetchData(store){
    if(!isLoaded(store.getState)){
      return store.dispatch(loadNCC());
    }
  }
  state = {
    options :{
      page_size: 10,
      name: '',
      sort: ''
    },
    meta:{
      "nccid":{
        name: "id",
        label: "NCCID",
        sort: true,
        up: true
      },
      "tenncc":{
        name: "tenncc",
        label: "Tên Nhà Cung Cấp",
        sort: true
      },
      "sdt":{
        name: "sdt",
        label: "SDT",
        sort: false
      },
      "email":{
        name: "email",
        label: "Email",
        sort: false
      },
      "diachi":{
        name: "diachi",
        label: "Địa Chỉ",
        sort: false
      }
    }
  }
  changePageSize(){
    let value = event.target.value;
    let opt = this.state.options;
    if(value !==this.state.pageSize){
      opt.page_size = value;
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
  render(){
    const {listNCC, paging} = this.props;
    const {options, meta} = this.state;
    return (
      <PanelView>
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
                <table id="example" className="table display nowrap dataTable" cellSpacing="0" width="100%" role="grid" aria-describedby="example_info" style={{"width": "100%"}}>
                  <thead>
                    <THead meta={meta} sort={options.sort} sortFunc={::this.sortField} ></THead>
                  </thead>
                  <tfoot>
                    <TFoot meta={meta} ></TFoot>
                  </tfoot>
                  <tbody>
                    {listNCC && listNCC.map((item, index) =>{
                      return(
                        <TBody item={item} index={index} sort={options.sort} meta={meta} key={index}></TBody>
                      )
                    })}

                  </tbody>
                </table>
                <div className="dataTables_info" id="example_info" role="status" aria-live="polite">Showing {paging && paging.page * paging.page_size+ 1} to {paging && paging.page * paging.page_size+ listNCC.length} of {paging && paging.total} entries</div>
                <Pagination load={::this.paginationLoad} paging={paging}></Pagination>
              </div>
            </div>
          </div>
        </div>
      </PanelView>
    );
  }
}
