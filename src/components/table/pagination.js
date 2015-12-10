import React, {Component, PropTypes} from 'react';

export class Pagination extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    paging: PropTypes.object
  }
  render(){
    const {paging, load} = this.props;
    let numPage = paging? parseInt(paging.total/paging.page_size): 0;
    if(paging && paging.total%paging.page_size > 0){
      numPage +=1;
    }
    let btnPage = [];
    for(let i=0;i<numPage; i++){
      if(paging && i === paging.page){
        btnPage.push(<a className="paginate_button btn btn-outlined btn-success active" aria-controls="example" data-dt-idx={i+1} key={i} tabIndex="0">{i+1}</a>)
      }else{
        btnPage.push(<a className="paginate_button btn btn-outlined btn-success " aria-controls="example" data-dt-idx={i+1}  key={i} tabIndex="0" onClick={load(i)}>{i+1}</a>)
      }
    }
    let preClass = "paginate_button btn btn-outlined btn-success previous" + (paging && paging.page === 0? " disabled":"");
    let nextClass = "paginate_button btn btn-outlined btn-success next" + (paging && paging.page >= (numPage-1)? " disabled":"");
    return (
      <div className="dataTables_paginate paging_simple_numbers" id="example_paginate">
        {paging && <a className={preClass} aria-controls="example" data-dt-idx="0" tabIndex="0" id="example_previous" onClick={load(paging.page-1)}>Trước</a>}
        <span>
        {btnPage}
        </span>
        {paging && <a className={nextClass} aria-controls="example" data-dt-idx={numPage+1} tabIndex="0" id="example_next" onClick={load(paging.page+1)}>Sau</a>}
      </div>
    )
  }
}

export class PageShow extends Component {
  static propTypes ={
    paging: PropTypes.object,
    length: PropTypes.string
  }
  render(){
    const {paging, length} = this.props;
    return (
      <div className="dataTables_info" id="example_info" role="status" aria-live="polite">Hiển thị từ {paging && paging.total? paging.page * paging.page_size+ 1: '0'} đến {paging && paging.page * paging.page_size + length || 0} của {paging && paging.total || 0}  mục.</div>
    );
  }
}
