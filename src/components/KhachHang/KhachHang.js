import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Modal from '../layout/Modal';

const customStyle = {
  overlay: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    overflowY:'auto'
  },
  content: {
    '-webkit-transform': 'scale(1) rotateX(0deg)',
    transition: 'all 150ms ease-in',
    position: 'absolute',
    top: '40px',
    left: '40px',
    right: '40px',
    bottom: '40px',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px'
  }
}

@connect(state =>({
  menuparse: state.layout.menuparse
}))
export default class KhachHang extends Component{
  static propTypes = {
    menuparse : PropTypes.object
  }
  state = {
    isOpenEdit: false
  }
  toggleModal() {
    console.log("this", this);
    this.setState({isOpenEdit: !this.state.isOpenEdit})
  }
  render() {
    const {menuparse} = this.props;
    return <div className='inner '>
        <nav id="nav-header" className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid mbv-nav">
            <div className="row">
              <div className="col-xs-3 visible-xs" ></div>
              <div className="col-xs-6 col-sm-4">
              <h4 style={{"lineHeight": "30px"}}>{menuparse[this.props.location.pathname]}</h4>
              </div>
              <div className="view-tabs col-xs-3 col-sm-8">
                <ul className="nav-main pull-right">
                  <li onClick={::this.toggleModal}>
                  <a >
                  <span key="icoen" className={'glyphicon glyphicon-user'}></span>
                  {" KH Moi"}</a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div id="body" className="">
        <div className="mbv-grid container-fluid" >
          <div className="row">
            <div className="col-xs-12">
              <div className="mbv-panel">
                <div className="mbv-panel-body">
                  {this.state.isOpenEdit?
                  <Modal  modalStyle={customStyle.content}
                  overlayStyle= {{
                    position: 'fixed',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    background: 'rgba(0,0,0,.5)',
                    overflowY:'auto'
                  }}
                  close={::this.toggleModal}
                  overlayClassName='modaldumb modalOverlay modalOverlay--after-open '
                  modalClassName='dumb modalContent modalContent--after-open '
                  >
                    <h4>Add/Edit Group</h4>
                    <div>
                      <hr/>
                      <div className="row">
                        <div className="col-md-6">

                        </div>
                        <div className="col-md-6">
                          <button className ='btn  pull-right' onClick={::this.toggleModal}>Close</button>
                        </div>
                      </div>
                    </div>
                  </Modal> : null}
                  {this.props.children}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  }
}
