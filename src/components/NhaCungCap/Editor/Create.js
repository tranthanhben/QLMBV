import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as nhacungcapActions from '../../../actions/nhacungcap/nhacungcapActions';
import{initObject, renderField, preprocess, setValue, checkRequire, preprocessPost} from '../../../meta';

@connect(state =>({
  meta: state.meta.nhacungcap,
  error: state.nhacungcap.postError,
  message: state.nhacungcap.message
}),{...nhacungcapActions})
export default
class Create extends Component{
  static propTypes = {
    meta: PropTypes.object,
    error: PropTypes.object,
    message: PropTypes.bool,
    postItem: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired
  }
  state = {
    item: initObject(preprocess(this.props.meta)) || {},
    edited: false
  }
  handleChange(){
    let obj = this.state.item;
    let addr = event.target.dataset.addr;
    let value = event.target.value;
    this.setState({
      item: setValue(obj, addr, value),
      edited: true,
      submited: false
    })
  }
  onSubmit(){
    if(checkRequire(this.props.meta, this.state.item)){
      this.setState({
        submited: true
      })
    }else {
      this.props.postItem(preprocessPost(this.state.item, this.props.meta));
    }
  }
  onClose(){
    if(this.state.edited){
      let cf = confirm("Bạn chưa lưu thay đổi, bạn có muốn Close không?");
      if(cf) {
        this.props.close();
      }
    }else{
      this.props.close();
    }
  }
  render() {
    const {error, meta, message} = this.props;
    const metaPP = preprocess(meta);
    const {item, edited, submited} = this.state;
    const fieldRender = renderField(item, metaPP, this) || [];
    return (
      <div>
        <h4>Nha Cung Cap Moi</h4>
        <hr/>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6 boder-right">
                {fieldRender}
              </div>
              <div className="col-md-6">
                Huong dan
                Note
              </div>
            </div>
          </div>
        </div>
        <br/>
        <hr/>
        <div className="row">
          <div className="col-md-6">
          <button className='btn btn-success' onClick={::this.onSubmit} disabled={(edited? '':'disabled')}>
          {"Tạo mới"}
          </button>
          {(message && !edited)? (message === true?
            <p className='help-block success'>
            {"Submit Success!"}
            </p>:
            <p className='help-block required'>
            {"Submit Fail!"}
            </p>
            ):null}
          {submited ? <p className='help-block required'>
              {checkRequire(metaPP, item)}
            </p>:null}

          </div>
          <div className="col-md-6">
            <button className ='btn  pull-right' onClick={::this.onClose}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

