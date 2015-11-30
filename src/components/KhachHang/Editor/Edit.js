import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import{initObject, renderField, preprocess, setValue, checkRequire, preprocessPost} from '../../../meta';
@connect(state =>({
  meta: state.meta.khachhang,
  error: state.khachhang.postError,
  message: state.khachhang.message
}))
export default class Edit extends Component {
  static propTypes = {
    item: PropTypes.object,
    meta: PropTypes.object,
    error: PropTypes.object,
    message: PropTypes.bool,
    postItem: PropTypes.func.isRequired,
    getItem: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired
  }
  state = {
    item: initObject(this.props.meta) || {},
    edited: false
  }
  componentWillMount() {
    if(this.props.id){
      this.props.getItem(this.props.id);
    }else{
      this.props.reset();
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.item){
      this.setState({
        item: nextProps.item,
        edited: false
      })
    }else{
      this.setState({
        item: initObject(this.props.meta) || {},
        edited: false
      })
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
    return (
      <div></div>
    );
  }
}
