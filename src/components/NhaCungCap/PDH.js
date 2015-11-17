import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as pdhAtions from '../../actions/nhacungcap/pdhAtions';
import {THead, TBody, TFoot} from '../table/row';
import {Pagination} from '../table/pagination';
import {isLoaded, loadList as loadPDH} from '../../actions/nhacungcap/pdhAtions';

@connect(
  state =>({
    listPDH: state.phieudathang.list,
    paging: state.phieudathang.paging,
    error: state.phieudathang.error,
    loading: state.phieudathang.loading
  }),
  {...pdhAtions})

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
      "pmhid":{
        name: "pmhid",
        label: "PMHID",
        sort: true
      },
      "lhid":{
        name: "lhid",
        label: "LHID",
        sort: false
      },
      "nvid":{
        name: "nvid",
        label: "NVID",
        sort: false
      },
      "khid":{
        name: "khid",
        label: "KHID",
        sort: false
      },
      "ngaytao":{
        name: "ngaytao",
        label: "Ngày Tạo",
        type: "date",
        sort: true
      },
      "soluong":{
        name: "soluong",
        label: "Số Lượng",
        sort: false,
        type: "number"
      },
      "tongtien":{
        name: "tongtien",
        label: "Tổng Tiền",
        sort: true,
        type: "number"
      },
      "tinhtrang":{
        name: "tinhtrang",
        label: "Tình Trạng",
        sort: true
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
                <div className="dataTables_info" id="example_info" role="status" aria-live="polite">Showing {paging && paging.page * paging.page_size+ 1} to {paging && paging.page * paging.page_size+ listPDH.length} of {paging && paging.total} entries</div>
                <Pagination load={::this.paginationLoad} paging={paging}></Pagination>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
