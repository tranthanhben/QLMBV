import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as jobActions from '../../actions/jobActions';
import PanelView from '../../components/layout/PanelView';
import PanelTabs ,{PanelTabLeft, PanelTabRight}from '../../components/layout/PanelTabs';
import {initObject, preprocess, renderField, setValue, checkRequire, preprocessPost} from '../../meta';
import markdown from 'markdown';
let md = markdown.markdown;

let cmdsRight = [{
    active: false,
    icon: 'pencel',
    label: 'New Job',
    href: '/job/new'
}];

let tabsLeft = [{
    name: 'info_job',
    label: 'Info Job'
  }];
let tabsRight = [{
  label : 'Review',
  name : 'review'
}]

class EditorJobPage extends Component {
  static propTypes = {
    item: PropTypes.object,
    error: PropTypes.object,
    metaJob: PropTypes.object,
    message: PropTypes.bool,
    postJob: PropTypes.func.isRequired,
    getJob: PropTypes.func.isRequired,
    resetJob: PropTypes.func.isRequired
  }
  state = {
    item: initObject(this.props.metaJob) || {},
    edited: false
  }
  componentWillMount(){
    if(this.props.params && this.props.params.id !== "new"){
      this.props.getJob(this.props.params.id)
    }else if(this.props.params.id === "new"){
      this.props.resetJob();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.params.id === "new" && nextProps.item){
      this.props.resetJob();
    }else if(nextProps.item){
      this.setState({
        item : nextProps.item,
        edited: false
      });
    }else{
      this.setState({
        item: initObject(this.props.metaJob) || {},
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
  onSubmit(){
    this.props.postJob(preprocessPost(this.state.item, this.props.metaJob));
  }
  render(){
    const {item, error, metaJob, message} = this.props;
    let edited = this.state.edited;
    let fieldRender = renderField(this.state.item, metaJob, this)|| [];
    let itemState = this.state.item;

    let resultCheckRequire = checkRequire(metaJob, this.state.item);
    let employer_des = (itemState && itemState.employer_profile)? md.toHTML(itemState.employer_profile.introduction || ''):'';
    return <PanelView>
      <PanelTabs tabs={tabsLeft} key="left tabs">
        <PanelTabLeft tab={tabsLeft[0]} key='0'>
          <div className='panel-info'>
            <div className='card'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='form-group' key="title">
                    <label>
                      <span>
                        {metaJob["title"].label}
                      </span>
                      &nbsp;
                      {metaJob["title"].required ? <span className='required'>*</span> : null}
                      <br/>
                      <span className='label-small'>
                        {metaJob["title"].label_vi}
                      </span>
                      <span className='unit'>
                        {metaJob["title"].unit}
                      </span>
                    </label>
                    &nbsp;
                    {metaJob["title"].$input(this.state.item, this)}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className='form-group' key="expired_time">
                    <label>
                      <span>
                        {metaJob["expired_time"].label}
                      </span>
                      &nbsp;
                      {metaJob["expired_time"].required ? <span className='required'>*</span> : null}
                      <br/>
                      <span className='label-small'>
                        {metaJob["expired_time"].label_vi}
                      </span>
                      <span className='unit'>
                        {metaJob["expired_time"].unit}
                      </span>
                    </label>
                    &nbsp;
                    {metaJob["expired_time"].$input(this.state.item, this)}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className='form-group' key="location">
                    <label>
                      <span>
                        {metaJob["location"].label}
                      </span>
                      &nbsp;
                      {metaJob["location"].required ? <span className='required'>*</span> : null}
                      <br/>
                      <span className='label-small'>
                        {metaJob["location"].label_vi}
                      </span>
                      <span className='unit'>
                        {metaJob["location"].unit}
                      </span>
                    </label>
                    &nbsp;
                    {metaJob["location"].$input(this.state.item, this)}
                  </div>
                </div>
              </div>
              <div className="row">
                  <div className="col-md-6">
                    <div className='form-group' key="salary_min">
                      <label>
                        <span>
                          {metaJob["salary_min"].label}
                        </span>
                        &nbsp;
                        {metaJob["salary_min"].required ? <span className='required'>*</span> : null}
                        <br/>
                        <span className='label-small'>
                          {metaJob["salary_min"].label_vi}
                        </span>
                        <span className='unit'>
                          {metaJob["salary_min"].unit}
                        </span>
                      </label>
                      &nbsp;
                      <input className='form-control' step='1' type='number' min="0"
                        data-addr="salary_min"
                        onChange={this.handleChange}
                        placeholder={metaJob["salary_min"].label}
                        value={this.state.item["salary_min"] || ''}/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className='form-group' key="salary_max">
                      <label>
                        <span>
                          {metaJob["salary_max"].label}
                        </span>
                        &nbsp;
                        {metaJob["salary_max"].required ? <span className='required'>*</span> : null}
                        <br/>
                        <span className='label-small'>
                          {metaJob["salary_max"].label_vi}
                        </span>
                        <span className='unit'>
                          {metaJob["salary_max"].unit}
                        </span>
                      </label>
                      &nbsp;
                      <input className='form-control' step='1' type='number' min="0"
                        data-addr="salary_max"
                        onChange={this.handleChange}
                        placeholder={metaJob["salary_max"].label}
                        value={this.state.item["salary_max"] || ''}/>
                    </div>
                  </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='form-group' key="description">
                    <label>
                      <span>
                        {metaJob["description"].label}
                      </span>
                      &nbsp;
                      {metaJob["description"].required ? <span className='required'>*</span> : null}
                      <br/>
                      <span className='label-small'>
                        {metaJob["description"].label_vi}
                      </span>
                      <span className='unit'>
                        {metaJob["description"].unit}
                      </span>
                    </label>
                    &nbsp;
                    {metaJob["description"].$input(this.state.item, this)}
                  </div>
                  <div className='form-group' key="qualification">
                    <label>
                      <span>
                        {metaJob["qualification"].label}
                      </span>
                      &nbsp;
                      {metaJob["qualification"].required ? <span className='required'>*</span> : null}
                      <br/>
                      <span className='label-small'>
                        {metaJob["qualification"].label_vi}
                      </span>
                      <span className='unit'>
                        {metaJob["qualification"].unit}
                      </span>
                    </label>
                    &nbsp;
                    {metaJob["qualification"].$input(this.state.item, this)}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className='form-group' key="category">
                    <label>
                      <span>
                        {metaJob["category"].label}
                      </span>
                      &nbsp;
                      {metaJob["category"].required ? <span className='required'>*</span> : null}
                      <br/>
                      <span className='label-small'>
                        {metaJob["category"].label_vi}
                      </span>
                      <span className='unit'>
                        {metaJob["category"].unit}
                      </span>
                    </label>
                    &nbsp;
                    {metaJob["category"].$input(this.state.item, this)}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className='form-group' key="kind">
                    <label>
                      <span>
                        {metaJob["kind"].label}
                      </span>
                      &nbsp;
                      {metaJob["kind"].required ? <span className='required'>*</span> : null}
                      <br/>
                      <span className='label-small'>
                        {metaJob["kind"].label_vi}
                      </span>
                      <span className='unit'>
                        {metaJob["kind"].unit}
                      </span>
                    </label>
                    &nbsp;
                    {metaJob["kind"].$input(this.state.item, this)}
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
      </PanelTabs>
      <PanelTabs cmds={cmdsRight} tabs={tabsRight} key="right tabs">
        <PanelTabRight tab={tabsRight[0]} >
          <div className="heading">
            <button className="btn pull-right apply-btn">Ứng tuyển ngay</button>
            <h1>{itemState && itemState.title? itemState.title:"Title sample"}</h1>
            <div className="meta">
              <div className="expired"><span className="glyphicon glyphicon-time"></span> Expires on {itemState && new Date(itemState.expired_time).toDateString()}</div>
              <div className="salary"><span className="glyphicon glyphicon-usd"></span> Salary: from {itemState && itemState.salary_min} to {itemState && itemState.salary_max}</div>
              <div className="location"><span className="glyphicon glyphicon-map-marker"></span> Work at: {itemState && itemState.location}</div>
            </div>
          </div>
          <div className="content">
            <h2>Mô tả công việc</h2>
            {itemState &&  (<p dangerouslySetInnerHTML={{ __html: md.toHTML(itemState.description || '') }}></p>)}
          </div>
          <div className="content">
            <h2>Yêu cầu công việc</h2>
            {itemState &&  (<p dangerouslySetInnerHTML={{ __html: md.toHTML(itemState.qualification || '') }}></p>)}
          </div>
          <div className="content" >
            <h2>Giới thiệu công ty</h2>
            <h4>{itemState && itemState.employer_profile && itemState.employer_profile.name}</h4>
              <p dangerouslySetInnerHTML={{ __html: employer_des }}></p>
          </div>
        </PanelTabRight>
      </PanelTabs>
    </PanelView>;
  }
}

@connect(state =>({
  item: state.job.editItem,
  error: state.job.errorPost,
  metaJob: state.job.metaJob,
  message: state.job.message
}))
export default class EditorJobContainer {
  static propTypes = {
    item: PropTypes.object,
    error: PropTypes.object,
    metaJob: PropTypes.object,
    message: PropTypes.bool,
    dispatch: PropTypes.func.isRequired
  }

  render(){
    const {item, error, dispatch, params, metaJob, message}= this.props;
    let metaPreprocess = preprocess(metaJob);
    return <EditorJobPage item={item} metaJob={metaPreprocess} params={params} message={message} error={error} {...bindActionCreators(jobActions, dispatch)}></EditorJobPage>
  }
}
