import React, {Component, PropTypes} from 'react';
import {endPage} from '../../meta';

export default class ListView extends Component {
  static propTypes = {
    list: PropTypes.array,
    paging: PropTypes.object,
    reloadList: PropTypes.bool,
    loadOne: PropTypes.func.isRequired,
    loadList: PropTypes.func.isRequired
  }

  state = {
    titleSearch : ''
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.reloadList === true){
      this.props.loadList({
        title: this.state.titleSearch
      })
    }
  }

  selectItem(id){
    this.props.loadOne(id);
  }

  nextPage(){
    if(!endPage(this.props.paging)){
      this.props.loadList({
        page: this.props.paging.page +1,
        title: this.state.titleSearch
      })
    }
  }

  prevPage(){
    if(this.props.paging.page !==0){
      this.props.loadList({
        page: this.props.paging.page - 1,
        title: this.state.titleSearch
      })
    }
  }

  searchJob(){
    this.props.loadList({
      title: this.state.titleSearch
    })
  }
  changeTitle(){
    this.setState({
      titleSearch: event.target.value
    })
  }
  render() {
    const {list, paging} = this.props;
    let isEndPage = endPage(paging);
    return (
      <div className='panel-categories flex-col flex'>
        <div className='row'>
          <div className='col-md-12'>
            <input className='form-control' placeholder='Quick search' type='text'
              onChange={::this.changeTitle}
              onKeyUp={::this.searchJob}
              value={this.state.titleSearch || ""}/>
          </div>
        </div>
        <br/>
        <div className='flex-panel'>
          <table className='table table-hover table-condensed'>
            <thead>
              <tr>
                <th className='#'>#</th>
                <th>Jobs</th>
              </tr>
            </thead>
            <tbody>
              {list && list.map((item, index) => {
                return (
                  <tr key={item.id + index} onClick={()=>this.selectItem(item.id)}>
                    <td className='#'>
                      {paging.page * paging.page_size + index + 1}
                    </td>
                    <td className>
                      {item.title}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div>
            <ul className=' pagination'>
              <li className={paging && paging.page === 0 ? 'disabled' : ''} onClick={::this.prevPage}>
                <span className=' glyphicon glyphicon-chevron-left '></span>
              </li>
              <li className={isEndPage === true ? 'disabled' : ''} onClick={::this.nextPage} >
                <span className=' glyphicon glyphicon-chevron-right'></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
