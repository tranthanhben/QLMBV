import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import{initObject, renderField, preprocess, setValue, checkRequire, preprocessPost} from '../../../meta';
import * as khachhangActions from '../../../actions/khachhang/khachhangActions';

@connect(state =>({
  error: state.khachhang.postError,
  message: state.khachhang.message,
  item: state.khachhang.editItem,
  meta: state.meta.khachhang
}), {...khachhangActions})
export default class EditKH extends Component {
  static propTypes = {
    id: PropTypes.string,
    item: PropTypes.object,
    meta: PropTypes.object,
    error: PropTypes.object,
    message: PropTypes.bool,
    postItem: PropTypes.func.isRequired,
    getItem: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
  }
  state = {
    item: initObject(this.props.meta) || {},
    edited: false,
    showFullField: false,
    id: this.props.id
  }
  componentWillMount() {
    if(this.props.id){
      this.props.getItem(this.props.id);
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.item){
      this.setState({
        item: nextProps.item,
        id: nextProps.item.id,
        edited: false
      });
    }
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
  showFull(){
    this.setState({showFullField: !this.state.showFullField});
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
        this.props.reset();
        this.props.close();
      }
    }else{
      this.props.reset();
      this.props.close();
    }
  }
  render() {
    const {meta, error, message} = this.props;
    const {item, edited, submited, showFullField, id} = this.state;
    const metaPP = preprocess(meta);
    const fieldRender = showFullField && id? renderField(item, metaPP, this, true):renderField(item, metaPP, this);
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <h4>Khách Hàng</h4>
          </div>
          <div className="col-md-8 flex-right">
          {submited ? <p className='help-block required'>
              {checkRequire(metaPP, item)}&nbsp;&nbsp;
            </p>:null}
            {(message && !edited)? (message === true?
                <p className='help-block success'>
                <span className="fa fa-check"></span>{id? ' Cập nhật thành công!!':' Tạo mới thành công!!' }
                </p>:
                <p className='help-block required'>
                <span className="fa fa-close"></span>{id? ' Cập nhật thất bại!':' Tạo mới thất bại!' }
                </p>
                ):null}
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
            {id? <div className="col-md-12" style={{"lineHeight":"30px"}}>
                Hiển thị đầy đủ các thuộc tính
                <div className="switch">
                  <input type="checkbox" id="showfullfield" name="showfullfield" className="control" checked={showFullField === true ? 'checked' : ''} onChange={::this.showFull}/>
                  <label htmlFor="showfullfield" className="checkboxs"></label>
                </div>
              </div>: null}
              <div className="col-md-12">
                {fieldRender}
              </div>
            </div>
          </div>
        </div>
        <br/>
        <hr/>
        <div className="row">
          <div className="col-md-12 flex-right">
          {submited ? <p className='help-block required'>
              {checkRequire(metaPP, item)}
            </p>:null}
          {(message && !edited)? (message === true?
              <p className='help-block success'>
              <span className="fa fa-check"></span>{id? ' Cập nhật thành công!!':' Tạo mới thành công!!' }
              </p>:
              <p className='help-block required'>
              <span className="fa fa-close"></span>{id? ' Cập nhật thất bại!':' Tạo mới thất bại!' }
              </p>
              ):null}
            &nbsp;&nbsp;
          {id? <button className='btn btn-warning' onClick={::this.onSubmit} disabled={(edited? '':'disabled')}>
          {"Cập Nhật"}
          </button>: <button className='btn btn-success' onClick={::this.onSubmit} disabled={(edited? '':'disabled')}>
          {"Tạo mới"}</button>}&nbsp;&nbsp;&nbsp;&nbsp;
            <button className ='btn btn-default' onClick={::this.onClose}>Đóng</button>
          </div>
        </div>
      </div>
    );
  }
}
