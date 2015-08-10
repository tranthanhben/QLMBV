import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as jobActions from '../../actions/jobActions';
import PanelView from '../../components/layout/PanelView';
import PanelTabs ,{PanelTabLeft, PanelTabRight}from '../../components/layout/PanelTabs';
import {initObject, preprocess, renderField, setValue, checkRequire, preprocessPost} from '../../meta';

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
    postItem: PropTypes.func.isRequired,
    getItem: PropTypes.func.isRequired,
    resetData: PropTypes.func.isRequired
  }
  state = {
    item: initObject(this.props.metaJob) || {},
    edited: false
  }
  componentWillMount(){
    if(this.props.params && this.props.params.id !== "new"){
      this.props.getItem(this.props.params.id)
    }else if(this.props.params.id === "new"){
      this.props.resetData();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.params.id === "new" && nextProps.item){
      this.props.resetData();
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
    this.props.postItem(preprocessPost(this.state.item, this.props.metaJob));
  }
  render(){
    const {item, error, metaJob, message} = this.props;
    let edited = this.state.edited;
    let fieldRender = renderField(this.state.item, metaJob, this)|| [];
    let itemState = this.state.item;
    let resultCheckRequire = checkRequire(metaJob, this.state.item);
    return <PanelView>
      <PanelTabs tabs={tabsLeft}>
        <PanelTabLeft tab={tabsLeft[0]}>
          <div className='panel-info'>
            <div className='card'>

              <div className='row'>
                <div className='col-md-12'>
                  {fieldRender}
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
      <PanelTabs cmds={cmdsRight} tabs={tabsRight}>
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
            {itemState && itemState.description}
          </div>
          <div className="content">
            <h2>Yêu cầu công việc</h2>
            {itemState && itemState.qualification}
          </div>
          <div className="content">
            <h2>Giới thiệu công ty</h2>
            <h4>{itemState && itemState.employer_profile && itemState.employer_profile.name}</h4>
            <p>
              {itemState && itemState.employer_profile && itemState.employer_profile.description}
            </p>
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
