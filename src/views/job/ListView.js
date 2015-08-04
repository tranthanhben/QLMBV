import React, {Component, PropTypes} from 'react';
import {endPage} from '../../meta';

export default class ListView extends Component {
  static propTypes = {
    loadOne: PropTypes.func.isRequired
  }

  selectItem(id){
    this.props.loadOne(id);
  }

  render() {
    const {list, paging} = this.props;
    let isEndPage = endPage(paging);
    return (
      <div className='panel-categories flex-col flex'>
        <div>
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
                      {item.id}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div>
            <ul className=' pagination'>
              <li className={paging && paging.page === 0 ? 'disabled' : ''} >
                <span className=' glyphicon glyphicon-chevron-left '></span>
              </li>
              <li className={isEndPage === true ? 'disabled' : ''} >
                <span className=' glyphicon glyphicon-chevron-right'></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
