import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as pdhActions from '../../actions/nhacungcap/pdhActions';
import {THead, TBody, TFoot} from '../table/row';
import {Pagination, PageShow} from '../table/pagination';
import {isLoaded, loadList as loadPDH} from '../../actions/nhacungcap/pdhActions';

@connect(
  state =>({
    listPDH: state.phieudathang.list,
    paging: state.phieudathang.paging,
    error: state.phieudathang.error,
    loading: state.phieudathang.loading
  }),
  {...pdhActions})

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
    meta:{
      "pdhid":{
        name: "id",
        label: "PDHID",
        sort: true,
        up: true
      },
      "nvid":{
        name: "nvid",
        label: "NVID",
        sort: false
      },
      "ngaytao":{
        name: "ngaytao",
        label: "Ngày Tạo",
        type: "date",
        sort: true
      },
      "tinhtrang":{
        name: "tinhtrang",
        label: "Tình Trạng",
        sort: true
      },
      "ghichu":{
        name: "ghichu",
        label: "Ghi Chú",
        sort: false,
        type:"content"
      }
    }
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
  render(){
    const {listPDH, paging} = this.props;
    const {options, meta} = this.state;
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
                        <TBody item={item} index={index} sort={options.sort} meta={meta} paging={paging} key={index}></TBody>
                      )
                    })}

                  </tbody>
                </table>
                <PageShow paging={paging} length={listPDH.length}></PageShow>
                <Pagination load={::this.paginationLoad} paging={paging}></Pagination>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
