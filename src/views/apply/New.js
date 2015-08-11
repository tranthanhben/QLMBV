import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as applyActions from '../../actions/applyActions';
import PanelView from '../../components/layout/PanelView';
import PanelTabs ,{PanelTabLeft, PanelTabRight}from '../../components/layout/PanelTabs';
import {initObject, preprocess, renderField, setValue, checkRequire, preprocessPost} from '../../meta';

let cmdsRight = [{
    active: false,
    icon: 'pencel',
    label: 'New Apply',
    href: '/apply/new'
}];

let tabsLeft = [{
    name: 'info_apply',
    label: 'Info Apply'
}];
let tabsRight = [{
  label : 'Review',
  name : 'review'
}]

class EditorApplyPage extends Component {
  static propTypes = {
    item: PropTypes.object,
    error: PropTypes.object,
    metaApply: PropTypes.object,
    message: PropTypes.bool,
    postItem: PropTypes.func.isRequired,
    getItem: PropTypes.func.isRequired,
    resetApply: PropTypes.func.isRequired
  }
  state = {
    item: initObject(this.props.metaApply) || {},
    edited: false
  }
  componentWillMount(){
    if(this.props.params && this.props.params.id !== "new"){
      this.props.getItem(this.props.params.id)
    }else if(this.props.params.id === "new"){
      this.props.resetApply();
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log("next", nextProps,"\nold", this.props);
    if (nextProps.params.id === "new" && nextProps.item){
      this.props.resetApply();
    }else if(nextProps.item){
      this.setState({
        item : nextProps.item,
        edited: false
      });
    }else{
      this.setState({
        item: initObject(this.props.metaApply) || {},
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
    this.props.postItem(preprocessPost(this.state.item, this.props.metaApply));
  }
  render(){
    const {item, error, metaApply, message} = this.props;
    let edited = this.state.edited;
    let fieldRender = renderField(this.state.item, metaApply, this)|| [];
    let itemState = this.state.item;
    let resultCheckRequire = checkRequire(metaApply, this.state.item);
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
        </PanelTabRight>
      </PanelTabs>
    </PanelView>;
  }
}

@connect(state =>({
  item: state.apply.editItem,
  error: state.apply.errorPost,
  metaApply: state.apply.metaApply,
  message: state.apply.message
}))
export default class EditorApplyContainer {
  static propTypes = {
    item: PropTypes.object,
    error: PropTypes.object,
    metaApply: PropTypes.object,
    message: PropTypes.bool,
    dispatch: PropTypes.func.isRequired
  }

  render(){
    const {item, error, dispatch, params, metaApply, message}= this.props;
    let metaPreprocess = preprocess(metaApply);
    return <EditorApplyPage item={item} metaApply={metaPreprocess} params={params} message={message} error={error} {...bindActionCreators(applyActions, dispatch)}></EditorApplyPage>
  }
}
