import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as userActions from '../../actions/userActions';
import * as imageActions from '../../actions/imageActions';
import {setValue, checkRequire} from '../../meta';
function chgPwdErr(dataCh) {
  if (!dataCh.old_password)
    return 'Vui long nhap Mat Khau Cu';
  if (!dataCh.new_password)
    return 'Vui long nhap Mat Khau Moi';
  if (dataCh.cfm_password !== dataCh.new_password)
    return 'Mat Khau Moi khong trung khop!';
  return '';
}
@connect(state=>({
  user: state.user.user,
  loading: state.user.loading,
  meta: state.meta.user,
  image_url: state.image.image_url
}),{...userActions, ...imageActions})
export default class InfoUser extends Component {
  static propTypes = {
    user: PropTypes.object,
    meta: PropTypes.object,
    image_url: PropTypes.string,
    postFile: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,
    loadMe: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired
  }
  state = {
    update: false,
    edited: false,
    updatePW: false,
    editedPW: false,
    userEdit: this.props.user || {},
    activeTab: 'info',
    dataCh:{
      old_password:'',
      new_password:'',
      cfm_password:''
    }
  }
  activeTab(tab){
    this.setState({activeTab: tab});
  }
  editUser(){
    this.props.loadMe();
    this.setState({
      update: true
    })
  }
  handleChange(){
    let obj = this.state.userEdit;
    let addr = event.target.dataset.addr;
    let value = event.target.value;
    this.setState({
      userEdit: setValue(obj, addr, value),
      edited: true,
      submited: false
    })
  }
  handleChangePW(){
    let obj = this.state.dataCh;
    let addr = event.target.dataset.addr;
    let value = event.target.value;
    this.setState({
      dataCh: setValue(obj, addr, value),
      editedPW: true,
      submitedPW: false
    })
  }
  onSubmit(){
    if(checkRequire(this.props.meta, this.state.userEdit)){
      this.setState({
        submited: true
      })
    }else {
      this.props.updateUser(this.state.userEdit);
    }
  }
  onSubmitPW(){
    if(chgPwdErr(this.state.dataCh)){
      this.setState({
        submitedPW: true
      })
    }else {
      let data = {
        old_password: this.state.dataCh.old_password.trim(),
        new_password: this.state.dataCh.new_password.trim()
      }
      this.props.changePass(data, this.state.userEdit.id);
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
  componentWillReceiveProps(nextProps){
    if(nextProps.user){
      this.setState({
        userEdit: nextProps.user,
        edited: false,
        submited: false
      });
    }
    if(nextProps.image_url){
      let userEdit = this.state.userEdit;
      if(userEdit.avatar !== nextProps.image_url){
        userEdit.avatar = nextProps.image_url;
        this.props.updateUser(userEdit);
      }
      this.setState({userEdit : userEdit});
    }
  }
  uploadImage(){
    let input = document.createElement('input');
    input.type = 'file';
    input.postFile = this.props.postFile;
    input.onchange = function () {
      let file = input.files[0];
      if(/png|jpeg/.test(file.type)){
        console.log("postFile");
        input.postFile(file);
      }else if(!(/png|jpg/.test(file.type))){
        alert("Định dạng file không đúng?")
      }
    };
    input.click();
  }
  render() {
    const {} = this.props;
    const {userEdit, submited, edited, submitedPW, editedPW, activeTab, dataCh} = this.state;
    console.log("user", userEdit, dataCh);
    return (
      <div id="main" className="content-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="account">
                <div className="profilecover">
                    <div className="col-md-4 ">
                      <div className="profilecover-group">
                        <img className="avatar-profile-cover" src={userEdit && userEdit.avatar? userEdit.avatar:'/images/avatar0.png'}  />
                        <button className="btn btn-default update-img-cover" onClick={::this.uploadImage}>CẬP NHẬT</button>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="info_profile_group">
                        <div className="name_profile">{userEdit.name? userEdit.name:(userEdit.role === 'admin'? 'Admin':'Nhân Viên') }</div>
                        <div className="job_profile">{userEdit.role=== 'nhanvien'? 'Nhân Viên':'Admin'}</div>
                      </div>
                    </div>
                </div>
                <ul className="nav navbar-nav nav-profile nav-signup">
                  <li className={activeTab == "info" ? "active":""} onClick={()=>this.activeTab("info")}><a >Thay Đổi Thông Tin</a></li>
                  <li className={activeTab == "changepass" ? "active":""} onClick={()=>this.activeTab("changepass")}><a >Thay Đổi Mật Khẩu</a></li>
                </ul>
                <hr/>
                {
                  activeTab === 'info'?
                  [<div className="from-group-profile">
                  <div className="label-profile">Avatar</div>
                  <input className="form-control title-profile" data-addr="avatar" ref="avatar" placeholder="avatar" value={userEdit.avatar || ''} readOnly/>
                </div>,
                <div className="from-group-profile">
                  <div className="label-profile">User Name</div>
                  <input className="form-control title-profile" data-addr="username" readOnly placeholder="User Name" value={userEdit.username || ''} />
                </div>,
                <div className="from-group-profile">
                  <div className="label-profile">Tên</div>
                  <input className="form-control title-profile" data-addr="name" ref="name" type="text" value={userEdit.name || ''}  onChange={::this.handleChange}/>
                </div>,
                <div className="from-profile-btn">
                  {submited ? <p className='help-block required'>
                    {checkRequire(metaPP, userEdit)}
                  </p>:null}
                  <button className="btn btn-block profile-btn" onClick={::this.onSubmit} disabled={(edited? '':'disabled')}>CẬP NHẬT THÔNG TIN</button>

                </div>
                ]:[
                <div className="from-group-profile">
                  <div className="label-profile">Mật Khẩu Cũ</div>
                  <input className="form-control title-profile" type="password" data-addr="old_password" ref="old_password" placeholder="Mật Khẩu Cũ" value={dataCh.old_password || ''} onChange={::this.handleChangePW}/>
                </div>,
                <div className="from-group-profile">
                  <div className="label-profile">Mật Khẩu Mới</div>
                  <input className="form-control title-profile" type="password" data-addr="new_password" placeholder="Mật Khẩu Mới" value={dataCh.new_password || ''} onChange={::this.handleChangePW}/>
                </div>,
                <div className="from-group-profile">
                  <div className="label-profile">Nhập Lại Mật Khẩu Mới</div>
                  <input className="form-control title-profile" data-addr="cfm_password" ref="cfm_password" type="password" placeholder="Nhập Lại Mật Khẩu Mới" value={dataCh.cfm_password || ''}  onChange={::this.handleChangePW}/>
                </div>,
                <div className="from-profile-btn">
                  {submitedPW ? <p className='help-block required'>
                    {chgPwdErr(dataCh)}
                  </p>:null}
                  <button className="btn btn-block profile-btn" onClick={::this.onSubmitPW} disabled={(editedPW? '':'disabled')}>CẬP NHẬT MAT KHAU</button>

                </div>
                ]}
              </div>
            </div>
          </div>
        </div>
        <button className ='btn-close fa fa-times ' onClick={()=>this.props.close()}></button>
      </div>
    );
  }
}
