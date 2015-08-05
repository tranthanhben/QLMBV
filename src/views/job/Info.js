import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {formatDate} from '../../meta';

export default class ListView extends Component {
  static propTypes = {
    delItem: PropTypes.func.isRequired
  }

  delItem(id){
    this.props.delItem(id);
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
                  {item && item.id}
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
                <Link to={`/job_editor/${item.id}`}>
                  <button className='btn btn-default'>Edit Bank</button>
                </Link>
                &nbsp;&nbsp;&nbsp;
              </div>
              <div className='col-md-4 text-right' onClick={() => this.delItem(item.id)}>
                <button className='btn btn-danger'>Delete</button>
                &nbsp;
              </div>
            </div>
            <hr/>
            {item.description}
          </div>
        )}
      </div>
    );
  }
}
