import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import{initObject, renderField, preprocess, setValue, checkRequire, preprocessPost} from '../../../meta';
import * as nhacungcapActions from '../../../actions/nhacungcap/nhacungcapActions';

@connect(state =>({
  error: state.nhacungcap.postError,
  message: state.nhacungcap.message,
  item: state.nhacungcap.editItem
}), {...nhacungcapActions})
export default class EditNCC extends Component {
  static propTypes = {
    id: PropTypes.string,
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
  componentDidMount() {
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
    console.log("close");
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
    const {item, edited, submited} = this.state;
    const {meta, error, message} = this.props;
    const metaPP = preprocess(meta);
    const fieldRender = renderField(item, metaPP, this) || [];
    console.log(item);
    return (
      <div>
        <h4>Nha Cung Cap</h4>
        <hr/>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6 boder-right">
                {fieldRender}
              </div>
              <div className="col-md-6">
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
          {"Edit"}
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
