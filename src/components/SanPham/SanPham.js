import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {isLoaded, loadList as loadLH} from '../../actions/lohangActions';
import ListLH from './ListLH';
import ListLV from './ListLV';
@connect(state =>({
  menuparse: state.layout.menuparse
}))
export default class SanPham extends Component{
  static propTypes = {
    menuparse : PropTypes.object
  }
  state = {
    viewfor: "lohang"
  }
  static fetchData(store){
    if(!isLoaded(store.getState)){
      return store.dispatch(loadLH());
    }
  }
  changeView(){
    let value = event.target.value;
    this.setState({viewfor: value});
  }
  render(){
    const {menuparse} = this.props;
    let {viewfor} = this.state;
    return <div className='inner '>
        <nav id="nav-header" className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid mbv-nav">
            <div className="row">
              <div className="col-xs-3 visible-xs" ></div>
              <div className="col-xs-6 col-sm-4">
              <div className="row">
                <div className="col-md-4">
                <h4 style={{"lineHeight": "30px"}}>{menuparse[viewfor]}</h4>
                </div>
                <div className="col-md-8">
                <label style={{"lineHeight": "30px","display": "flex", "marginTop":"8"}} >Xem theo:
                    <select name="example_length" aria-controls="example" className=" form-control" style={{"width":"55%"}} onChange={::this.changeView} value={viewfor}>
                      <option value="lohang">Lô Hàng</option>
                      <option value="loaivai">Loại Vải</option>
                    </select></label>
                </div>
              </div>
              </div>
              <div className="col-xs-3 col-sm-8">
                <div className="navbar-content pull-right">Logout</div>
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
                  {viewfor === "lohang"? <ListLH></ListLH>:<ListLV></ListLV>}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  }
}
