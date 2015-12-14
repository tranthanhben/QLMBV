import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as userActions from '../../actions/userActions';
import * as imageActions from '../../actions/imageActions';

@connect(state=>({
  user: state.user.user,
  loading: state.user.loading,
  meta: state.meta.user
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
    userEdit: this.props.user || {}
  }
  editUser(){
    this.props.loadMe();
    this.setState({
      update: true
    })
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.user){
      this.setState({
        userEdit: nextProps.user
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
        input.postFile(file);
      }else if(!(/png|jpg/.test(file.type))){
        alert("Định dạng file không đúng?")
      }
    };
    input.click();
  }
  render() {
    const {} = this.props;
    const {userEdit} = this.state;
    return (
      <div id="main" className="content-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="account">
                <div className="profilecover">
                    <div className="col-md-4 ">
                      <div className="profilecover-group">
                        <img className="avatar-profile-cover" src={'/images/avatar0.png'}  />
                        <button className="btn btn-default update-img-cover" >CẬP NHẬT</button>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="info_profile_group">
                        <div className="name_profile">Admin</div>
                        <div className="job_profile">admin</div>
                      </div>
                    </div>
                </div>
                <div className="from-group-profile">
                  <div className="label-profile">Họ tên</div>
                  <input className="form-control title-profile" ref="name" placeholder="Họ tên" />
                </div>
                <div className="from-group-profile">
                  <div className="label-profile">Email</div>
                  <input className="form-control title-profile" ref="email" type="text" />
                </div>
                <div className="from-group-profile">
                  <div className="label-profile">Điện thoại</div>
                  <input className="form-control title-profile" ref="phone" type="text" />
                </div>
                <div className="from-group-profile">
                  <div className="label-profile">Địa chỉ</div>
                  <input className="form-control title-profile" ref="address" type="text" />
                </div>
                <div className="from-group-profile">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="label-profile">Tỉnh &#47; Thành phố</div>
                      <input className="form-control title-profile" ref="city" type="text" />
                    </div>
                    <div className="col-md-6">
                      <div className="label-profile">Quốc gia</div>
                      <input className="form-control title-profile" ref="country" type="text" />
                    </div>
                  </div>
                </div>
                <div className="from-profile-btn">
                  <button className="btn btn-block profile-btn" >CẬP NHẬT THÔNG TIN</button>

                </div>
              </div>
            </div>
          </div>
        </div>
        <button className ='btn-close fa fa-times ' onClick={()=>this.props.close()}></button>
      </div>
    );
  }
}
