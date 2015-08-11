import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as applyActions from '../../actions/applyActions';
import {isLoaded} from '../../reducers/apply';
import {loadList} from '../../actions/applyActions';
import PanelView from '../../components/layout/PanelView';
import PanelTabs ,{PanelTabLeft, PanelTabRight}from '../../components/layout/PanelTabs';
import ListView from './ListView';
import Info from './Info';

let cmdsRight = [{
    active: false,
    icon: 'pencel',
    label: 'New Apply',
    href: '/apply/new'
}];

let tabsLeft = [{
  label : 'Apply List',
  name: 'apply_list'
}];

let tabsRight = [{
  label : 'Info',
  name : 'info'
}];
class ApplyPage extends Component {
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
          <ListView list={list} paging={paging} reloadList={reloadList} {...bindActionCreators(applyActions, dispatch)}></ListView>
        </PanelTabLeft>
      </PanelTabs>
      <PanelTabs cmds={cmdsRight} tabs={tabsRight}>
        <PanelTabRight tab={tabsRight[0]} >
          <Info item={item} {...bindActionCreators(applyActions, dispatch)}></Info>
        </PanelTabRight>
      </PanelTabs>
    </PanelView>
  };
}

@connect (state =>({
  list: state.apply.list,
  error: state.apply.error,
  item: state.apply.item,
  paging: state.apply.paging,
  reloadList : state.apply.reloadList
}))
export default class ApplyPageContainer{
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
    return <ApplyPage list={list} item={item} dispatch={dispatch} paging={paging} reloadList={reloadList}></ApplyPage>
  }
}
