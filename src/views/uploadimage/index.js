import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as imageActions from '../../actions/imageActions';

class Image extends Component {
  static propTypes = {
    list: PropTypes.array,
    paging: PropTypes.object,
    error: PropTypes.object,
    image_url: PropTypes.string,
    loadList: PropTypes.func.isRequired,
    reloadList: PropTypes.bool,
    postFile: PropTypes.func.isRequired
  }

  state = {
    image: ""
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.reloadList === true){
      this.props.loadList();
    }
    if(nextProps.image_url){
      this.setState({image: nextProps.image_url});
    }
  }
  componentWillMount(){
    this.props.loadList();
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
  selectImage(image){
    this.setState({image:image});
  }

  render() {
    const {list, paging, reloadList} = this.props;
    const {image} = this.state;
    return (<div className='panel-images flex-col flex'>
        <div className='row'>
          <div className='col-md-6'>
            <br/>
            <div className='form-group'>
              <input className='form-control' type='text' value={image || ''}/>
            </div>
            <br/>
            <div className='row'>
              <div className='col-md-6'>
                <button className='btn btn-success form-control' disabled={!image} >
                  <span className='glyphicon glyphicon glyphicon-ok'></span>
                  &nbsp;
                  Select Image
                </button>
              </div>
              <div className='col-md-6'>
                <button className='btn btn-default form-control' onClick={::this.uploadImage}>Upload Image</button>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className=' img' style={{ backgroundImage: 'url(' + (image || '') + ')' }}></div>
          </div>
        </div>
        <br/>
        <div className='flex-panel'>
          <table className='table table-hover table-condensed'>
            <thead>
              <tr>
                <th className='#'>#</th>
                <th>Images</th>
              </tr>
            </thead>
            <tbody>
              {list && list.map((img, i) => {
                return (
                  <tr key={"img" + i} onClick={()=>this.selectImage(img.link)}>
                    <td className='#'>
                      {i + 1}
                    </td>
                    <td>
                      {img.link}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>);
  };
}

@connect (state =>({
  list: state.image.list,
  error: state.image.error,
  paging: state.image.paging,
  reloadList : state.image.reloadList,
  image_url : state.image.image_url
}))
export default class ImagePageContainer{
  static propTypes = {
    list: PropTypes.array,
    paging: PropTypes.object,
    image_url: PropTypes.string,
    error: PropTypes.object,
    reloadList: PropTypes.bool,
    dispatch: PropTypes.func.isRequired
  }

  render(){
    const {list, item, dispatch, paging, reloadList, image_url}= this.props;
    return <Image list={list} item={item} image_url={image_url} dispatch={dispatch} paging={paging} reloadList={reloadList} {...bindActionCreators(imageActions, dispatch)}></Image>
  }
}
