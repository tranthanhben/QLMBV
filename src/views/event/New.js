import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as eventActions from '../../actions/eventActions';
import {postFile} from '../../actions/imageActions';
import PanelView from '../../components/layout/PanelView';
import PanelTabs ,{PanelTabLeft, PanelTabRight}from '../../components/layout/PanelTabs';
import UploadImage from '../uploadimage';
import {defaultimg, initObject, preprocess, renderField, setValue, checkRequire, preprocessPost} from '../../meta';
import markdown from 'markdown';
let md = markdown.markdown;

let cmdsRight = [{
    active: false,
    icon: 'pencel',
    label: 'New Event',
    href: '/event/new'
}];

let tabsLeft = [{
    name: 'info_event',
    label: 'Info Event'
},{
    name: 'upload_image',
    label: "Images"
  }];
let tabsRight = [{
  label : 'Review',
  name : 'review'
}]

class EditorEventPage extends Component {
  static propTypes = {
    item: PropTypes.object,
    error: PropTypes.object,
    metaEvent: PropTypes.object,
    image_url: PropTypes.string,
    message: PropTypes.bool,
    postItem: PropTypes.func.isRequired,
    getItem: PropTypes.func.isRequired,
    postFile: PropTypes.func.isRequired,
    resetEvent: PropTypes.func.isRequired
  }
  state = {
    item: initObject(this.props.metaEvent) || {},
    edited: false
  }
  componentWillMount(){
    if(this.props.params && this.props.params.id !== "new"){
      this.props.getItem(this.props.params.id)
    }else if(this.props.params.id === "new"){
      this.props.resetEvent();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.params.id === "new" && nextProps.item){
      this.props.resetEvent();
    }else if(nextProps.item){
      this.setState({
        item : nextProps.item,
        edited: false
      });
    }else if(nextProps.image_url){
      let itemState = this.state.item;
        itemState.avatar = nextProps.image_url;
      this.setState({item : itemState});
    }else{
      this.setState({
        item: initObject(this.props.metaEvent) || {},
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
      edited: true
    });
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
        alert("Định dạng file không đúng!");
      }else {
        alert("File không đúng!");
      }
    };
    input.click();
  }
  onSubmit(){
    this.props.postItem(preprocessPost(this.state.item, this.props.metaEvent));
  }
  render(){
    const {item, error, metaEvent, message} = this.props;
    let edited = this.state.edited;
    let itemState = this.state.item;
    let resultCheckRequire = checkRequire(metaEvent, this.state.item);
    return <PanelView>
      <PanelTabs tabs={tabsLeft}>
        <PanelTabLeft tab={tabsLeft[0]}>
          <div className='panel-info'>
            <div className='card'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='form-group' key="title">
                    <label>
                      <span>
                        {metaEvent["title"].label}
                      </span>
                      &nbsp;
                      {metaEvent["title"].required ? <span className='required'>*</span> : null}
                      <br/>
                      <span className='label-small'>
                        {metaEvent["title"].label_vi}
                      </span>
                      <span className='unit'>
                        {metaEvent["title"].unit}
                      </span>
                    </label>
                    &nbsp;
                    {metaEvent["title"].$input(this.state.item, this)}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className='form-group' key="location">
                    <label>
                      <span>
                        {metaEvent["location"].label}
                      </span>
                      &nbsp;
                      {metaEvent["location"].required ? <span className='required'>*</span> : null}
                      <br/>
                      <span className='label-small'>
                        {metaEvent["location"].label_vi}
                      </span>
                      <span className='unit'>
                        {metaEvent["location"].unit}
                      </span>
                    </label>
                    &nbsp;
                    {metaEvent["location"].$input(this.state.item, this)}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className='form-group' key="time">
                    <label>
                      <span>
                        {metaEvent["time"].label}
                      </span>
                      &nbsp;
                      {metaEvent["time"].required ? <span className='required'>*</span> : null}
                      <br/>
                      <span className='label-small'>
                        {metaEvent["time"].label_vi}
                      </span>
                      <span className='unit'>
                        {metaEvent["time"].unit}
                      </span>
                    </label>
                    &nbsp;
                    {metaEvent["time"].$input(this.state.item, this)}
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='form-group' key="description">
                    <label>
                      <span>
                        {metaEvent["description"].label}
                      </span>
                      &nbsp;
                      {metaEvent["description"].required ? <span className='required'>*</span> : null}
                      <br/>
                      <span className='label-small'>
                        {metaEvent["description"].label_vi}
                      </span>
                      <span className='unit'>
                        {metaEvent["description"].unit}
                      </span>
                    </label>
                    &nbsp;
                    {metaEvent["description"].$input(this.state.item, this)}
                  </div>
                  <div className='form-group' key="content">
                    <label>
                      <span>
                        {metaEvent["content"].label}
                      </span>
                      &nbsp;
                      {metaEvent["content"].required ? <span className='required'>*</span> : null}
                      <br/>
                      <span className='label-small'>
                        {metaEvent["content"].label_vi}
                      </span>
                      <span className='unit'>
                        {metaEvent["content"].unit}
                      </span>
                    </label>
                    &nbsp;
                    {metaEvent["content"].$input(this.state.item, this)}
                  </div>
                  <div className='form-group' key="avatar">
                    <label>
                      <span>
                        {metaEvent["avatar"].label}
                      </span>
                      &nbsp;
                      {metaEvent["avatar"].required ? <span className='required'>*</span> : null}
                      <br/>
                      <span className='label-small'>
                        {metaEvent["avatar"].label_vi}
                      </span>
                      <span className='unit'>
                        {metaEvent["avatar"].unit}
                      </span>
                    </label>
                    &nbsp;
                    {metaEvent["avatar"].$input(this.state.item, this)}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-md-offset-3">
                  <div className='form-group'>
                <br/>
                <div className='image-card' style={{ 'backgroundImage': 'url(' + (itemState.avatar || defaultimg) + ')' }}></div>
                <br/>
                <div className='row text-center'>
                  <button className='btn btn-info' onClick={::this.uploadImage} type='button'>
                    <span className='glyphicon glyphicon-plus-sign'></span>
                    &nbsp;
                    Upload Image
                  </button>
                  &nbsp;
                  <button className='btn btn-default'  type='button'>Select Image</button>
                </div>
              </div>
                </div>
              </div>
              <h3></h3>
              <div className='row'>
                <div className='col-md-6'>
                  {(message && !edited)? (message === true?
                      <p className='help-block success'>
                      {"Submit Success!"}
                      </p>:
                      <p className='help-block required'>
                      {"Submit Fail!"}
                      </p>
                      ):null}
                  <p className='help-block required'>
                    {resultCheckRequire}
                  </p>
                  <button className={'btn ' + (item && item.id ? 'btn-warning' : 'btn-success')} onClick={::this.onSubmit}>
                    {item && item.id? "Update" : "Created"}
                  </button>

                </div>
                <div className='col-md-6 text-right'></div>
              </div>
            </div>
          </div>
        </PanelTabLeft>
        <PanelTabLeft tab={tabsLeft[1]} key="upload_image">
          <UploadImage></UploadImage>
        </PanelTabLeft>
      </PanelTabs>
      <PanelTabs cmds={cmdsRight} tabs={tabsRight}>
        <PanelTabRight tab={tabsRight[0]} >
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="detail-be">
                <div className="back-be">
                  <i className="fa fa-arrow-left arrow-back-be"></i>  SỰ KIỆN
                </div>
                <div className="header-be">
                  <div className="title-be">
                    {itemState && itemState.title || 'Title example'}
                  </div>
                  <div className=".row time-location-info">
                    <div className="col-md-6 time-info"><i className="fa fa-clock-o time-location-icon"></i> {itemState && new Date(itemState.time).toDateString()|| new Date().toDateString()}</div>
                    <div className="col-md-6 location-info"><i className="fa fa-map-marker time-location-icon"></i>  {itemState && itemState.location ||'Location Example'}</div>
                  </div>
                  {itemState && itemState.description ? (<p className="short-content">{itemState.description}</p>) : <p className="short-content">Your brand is your business. The visual system that expresses your personality, communicates your values, and distinguishes you from your competitors. With your close involvement, we gather information and examine your business and industry in order to best visually interpret your company.</p>}
                </div>
              </div>
            </div>
            <div className="col-md-12 avatar-event">
              <img className="img-avatar" src={itemState.avatar||defaultimg} alt="cover" align="middle" />
            </div>
            <div className="col-md-10 col-md-offset-1">
              <div className="content-event">
              {itemState &&  (<p dangerouslySetInnerHTML={{ __html: md.toHTML(itemState.content || '') }}></p>)}
              </div>
            </div>
          </div>
        </PanelTabRight>
      </PanelTabs>
    </PanelView>;
  }
}

@connect(state =>({
  item: state.event.editItem,
  error: state.event.errorPost,
  metaEvent: state.event.metaEvent,
  message: state.event.message,
  image_url : state.image.image_url
}))
export default class EditorEventContainer {
  static propTypes = {
    item: PropTypes.object,
    error: PropTypes.object,
    image_url: PropTypes.string,
    metaEvent: PropTypes.object,
    message: PropTypes.bool,
    dispatch: PropTypes.func.isRequired
  }

  render(){
    const {item, error, dispatch, params, metaEvent, message, image_url}= this.props;
    let metaPreprocess = preprocess(metaEvent);
    return <EditorEventPage item={item} metaEvent={metaPreprocess} params={params} message={message} error={error} image_url={image_url} {...bindActionCreators({...eventActions, postFile: postFile}, dispatch)}></EditorEventPage>
  }
}
