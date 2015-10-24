import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as jobActions from '../../actions/jobActions';
import {isLoaded} from '../../reducers/job';
import {loadList} from '../../actions/jobActions';
import PanelView from '../../components/layout/PanelView';
import PanelTabs ,{PanelTabLeft, PanelTabRight}from '../../components/layout/PanelTabs';
import ListView from './ListView';
import Info from './Info';

let cmdsRight = [{
    active: false,
    icon: 'pencel',
    label: 'New Job',
    href: '/job/new'
}];

let tabsLeft = [{
  label : 'Job List',
  name: 'job_list'
}];

let tabsRight = [{
  label : 'Info',
  name : 'value'
}];
class JobPage extends Component {
  static propTypes = {
    list: PropTypes.array,
    item: PropTypes.object,
    paging: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
    reloadList: PropTypes.bool
  }

  render() {
    const {list, item, dispatch, paging, reloadList} = this.props;
    return <PanelView>
      <PanelTabs tabs={tabsLeft}>
        <PanelTabLeft tab={tabsLeft[0]}>
          <ListView list={list} paging={paging} reloadList={reloadList} {...bindActionCreators(jobActions, dispatch)}></ListView>
        </PanelTabLeft>
      </PanelTabs>
      <PanelTabs cmds={cmdsRight} tabs={tabsRight}>
        <PanelTabRight tab={tabsRight[0]} >
          <Info item={item} {...bindActionCreators(jobActions, dispatch)}></Info>
        </PanelTabRight>
      </PanelTabs>
    </PanelView>
  };
}

@connect (state =>({
  list: state.job.list,
  error: state.job.error,
  item: state.job.item,
  paging: state.job.paging,
  reloadList : state.job.reloadList
}))
export default class JobPageContainer{
  static propTypes = {
    list: PropTypes.array,
    item: PropTypes.object,
    paging: PropTypes.object,
    error: PropTypes.object,
    reloadList: PropTypes.bool,
    dispatch: PropTypes.func.isRequired
  }

  static fetchData(store){
    if(!isLoaded(store.getState())){
      return store.dispatch(loadList());
    }
  }
  render(){
    const {list, item, dispatch, paging, reloadList} = this.props;
    console.log(this.props.reloadList);
    return <JobPage list={list} item={item} dispatch={dispatch} paging={paging} reloadList={reloadList}></JobPage>
  }
}
