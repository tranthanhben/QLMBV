import React, {Component, PropTypes} from 'react';

export class Pagination extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    paging: PropTypes.object
  }
  render(){
    const {paging, load} = this.props;
    let numPage = paging? parseInt(paging.total/paging.page_size): 0;
    if(paging.total%paging.page_size > 0){
      numPage +=1;
    }
    let btnPage = [];
    for(let i=0;i<numPage; i++){
      if(i === paging.page){
        btnPage.push(<a className="paginate_button btn btn-outlined btn-success active" aria-controls="example" data-dt-idx={i+1} key={i} tabIndex="0">{i+1}</a>)
      }else{
        btnPage.push(<a className="paginate_button btn btn-outlined btn-success " aria-controls="example" data-dt-idx={i+1}  key={i} tabIndex="0" onClick={load(i)}>{i+1}</a>)
      }
    }
    let preClass = "paginate_button btn btn-outlined btn-success previous" + (paging.page === 0? " disabled":"");
    let nextClass = "paginate_button btn btn-outlined btn-success next" + (paging.page === (numPage-1)? " disabled":"");
    return (
      <div className="dataTables_paginate paging_simple_numbers" id="example_paginate">
        <a className={preClass} aria-controls="example" data-dt-idx="0" tabIndex="0" id="example_previous" onClick={load(paging.page-1)}>Previous</a>
        <span>
        {btnPage}
        </span>
        <a className={nextClass} aria-controls="example" data-dt-idx={numPage+1} tabIndex="0" id="example_next" onClick={load(paging.page+1)}>Next</a>
      </div>
    )
  }
}

