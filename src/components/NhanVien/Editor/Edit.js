import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import{initObject, renderField, preprocess, setValue, checkRequire, preprocessPost} from '../../../meta';
import * as nhanvienActions from '../../../actions/nhanvienActions';
import * as userActions from '../../../actions/userActions';

@connect(state =>({
  error: state.nhanvien.postError,
  message: state.nhanvien.message,
  item: state.nhanvien.editItem,
  account: state.user.account,
  meta: state.meta.nhanvien
}), {...nhanvienActions, ...userActions})
export default class EditNV extends Component {
  static propTypes = {
    id: PropTypes.string,
    item: PropTypes.object,
    account: PropTypes.object,
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
    id: this.props.id,
    account_init:{
      nhanvienid: this.props.id || '',
      username: '',
      password: '123456'
    },
    createAcc: false
  }
  componentWillMount() {
    if(this.props.id){
      this.props.getItem(this.props.id);
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.item){
      if(nextProps.item.haveaccount && !this.props.account){
        this.props.getAccount(nextProps.item.id);
      }
      this.setState({
        item: nextProps.item,
        id: nextProps.item.id,
        edited: false,
        account_init:{
          nhanvienid: nextProps.item.id,
          username: '',
          password: '123456'
        }
      });
    }
    if(nextProps.account && this.props.item.haveaccount===false){
      let item = this.props.item;
      item.haveaccount = true;
      this.props.postItem(item);
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
  changeUsername(){
    let value = event.target.value;
    let obj = this.state.account_init;
    obj.username = value;
    this.setState({
      account_init: obj
    })
  }
  createAcc(){
    this.setState({createAcc: true})
  }
  showFull(){
    this.setState({showFullField: !this.state.showFullField});
  }
  resetPassWord(){
    this.props.changePass({new_password: '123456'},this.props.account.id);
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
  onSubmitAcc(){
    let obj = this.state.account_init;
    if(obj.username.length >= 6){
      this.props.register(obj);
      this.setState({messNewacc : ''});
    }else{
      let messNewacc = 'Tên đăng nhập phải lớn hơn 6 kí tự';
      this.setState({messNewacc : messNewacc});
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
    const {meta, error, message, account} = this.props;
    const {item, edited, submited, showFullField, id, createAcc, messNewacc, account_init} = this.state;
    const metaPP = preprocess(meta);
    const fieldRender = showFullField && id? renderField(item, metaPP, this, true):renderField(item, metaPP, this);
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <h4>Nhân Viên</h4>
          </div>
          <div className="col-md-8 flex-right">
          {submited ? <p className='help-block required'>
              {checkRequire(metaPP, item)}&nbsp;&nbsp;
            </p>:null}
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6 boder-right">
                {fieldRender}
                {item.haveaccount && account? <div className='form-group' key='username'>
                  <label>
                    <span>
                      {"Tên đăng nhập"}
                    </span>
                    &nbsp;
                     <span className='required'>*</span>
                    <br/>
                  </label>
                  &nbsp;
                  <input className='form-control' type="text"value={account.username} readOnly />
                </div>:null}
              </div>
              <div className="col-md-6">
              <div className="row">
                {id? <div className="col-md-12" style={{"lineHeight":"30px"}}>
                    Hiển thị đầy đủ các thuộc tính
                    <div className="switch">
                      <input type="checkbox" id="showfullfield" name="showfullfield" className="control" checked={showFullField === true ? 'checked' : ''} onChange={::this.showFull}/>
                      <label htmlFor="showfullfield" className="checkboxs"></label>
                    </div>
                  </div>: null}
                  <br />
                  <div className="col-md-12">
                    {(message && !edited)? (message === true?
                      <p className='help-block success'>
                      <span className="fa fa-check"></span>{' Cập nhật thành công!!'}
                      </p>:
                      <p className='help-block required'>
                      <span className="fa fa-close"></span>{" Cập nhật thất bại!"}
                      </p>
                      ):null}

                  </div>
                  <br />
                  {item.haveaccount ? <div className="col-md-12">
                    Reset lại password
                    <button className='btn btn-warning pull-right' onClick={::this.resetPassWord} >Reset Password </button>
                    </div>: !createAcc && item.id ? <div className="col-md-12">
                    Tạo tài khoản cho nhân viên
                    <button className='btn btn-success pull-right' onClick={::this.createAcc} >Tạo</button> </div>:null}
                  {item.id && createAcc?
                    <div className="col-md-12">
                      {"Password sẽ được mặc định là: \'123456\'"}
                      <br />

                      <div className='form-group' key='username'>
                        <label>
                          <span>
                            {"Tên đăng nhập"}
                          </span>
                          &nbsp;
                           <span className='required'>*</span>
                          <br/>
                        </label>
                        &nbsp;
                        <input className='form-control' type="text" onChange={::this.changeUsername} placeholder="Tên đăng nhập" />
                      </div>
                      {messNewacc? <p className='help-block required'>
                        {messNewacc}
                      </p>:null}
                      <button className='btn btn-success  pull-right' onClick={::this.onSubmitAcc} disabled={(account_init.username? '':'disabled')}>{"Tạo mới"}</button>
                    </div>:null}
                </div>
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
              <span className="fa fa-check"></span>{' Cập nhật thành công!!'}
              </p>:
              <p className='help-block required'>
              <span className="fa fa-close"></span>{" Cập nhật thất bại!"}
              </p>
              ):null}&nbsp;&nbsp;
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
