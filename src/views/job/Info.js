import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {formatDate} from '../../meta';
import {markdown} from 'markdown';

export default class ListView extends Component {
  static propTypes = {
    delJob: PropTypes.func.isRequired
  }

  delJob(id){
    let conf = confirm("Sau khi xóa sẽ không phục hồi được!");
    if(conf) {
      this.props.delJob(id);
    }
  }

  render() {
    const {item} = this.props;
    return (
      <div className='panel-content flex flex-col'>
        {!item ? <div className='text-center text-info'>The content display here.</div> : (
          <div>
            <div className='row'>
              <div className='col-md-12'>
                <h4>
                </h4>
                <p className='text-info'></p>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <h4>
                  <b>
                    <span>Job Name: </span>
                  </b>
                  {item && item.title}
                </h4>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <span>Created At: </span>
                {formatDate(item.created_time)}
              </div>
              <div className='col-md-6'>

                <span>Update At: </span>
                {formatDate(item.updated_time)}
              </div>
            </div>
            <br/>
            <div className='row'>
              <div className='col-md-8'>
                <Link to={`/job/${item.id}`}>
                  <button className='btn btn-default'>Edit Job</button>
                </Link>
                &nbsp;&nbsp;&nbsp;
              </div>
              <div className='col-md-4 text-right' onClick={() => this.delJob(item.id)}>
                <button className='btn btn-danger'>Delete</button>
                &nbsp;
              </div>
            </div>
            <hr/>
            <div dangerouslySetInnerHTML={{ __html: markdown.toHTML(item.description)}}>
            </div>
          </div>
        )}
      </div>
    );
  }
}
