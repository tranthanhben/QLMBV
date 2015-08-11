import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as eventActions from '../../actions/eventActions';
import {isLoaded} from '../../reducers/event';
import {loadList} from '../../actions/eventActions';
import PanelView from '../../components/layout/PanelView';
import PanelTabs ,{PanelTabLeft, PanelTabRight}from '../../components/layout/PanelTabs';
import ListView from './ListView';
import Info from './Info';

let cmdsRight = [{
    active: false,
    icon: 'pencel',
    label: 'New Event',
    href: '/event/new'
}];

let tabsLeft = [{
  label : 'Event List',
  name: 'event_list'
}];

let tabsRight = [{
  label : 'Info',
  name : 'info'
}];
class EventPage extends Component {
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
          <ListView list={list} paging={paging} reloadList={reloadList} {...bindActionCreators(eventActions, dispatch)}></ListView>
        </PanelTabLeft>
      </PanelTabs>
      <PanelTabs cmds={cmdsRight} tabs={tabsRight}>
        <PanelTabRight tab={tabsRight[0]} >
          <Info item={item} {...bindActionCreators(eventActions, dispatch)}></Info>
        </PanelTabRight>
      </PanelTabs>
    </PanelView>
  };
}

@connect (state =>({
  list: state.event.list,
  error: state.event.error,
  item: state.event.item,
  paging: state.event.paging,
  user: state.user.user,
  reloadList : state.event.reloadList
}))
export default class EventPageContainer{
  static propTypes = {
    list: PropTypes.array,
    item: PropTypes.object,
    paging: PropTypes.object,
    error: PropTypes.object,
    user: PropTypes.object,
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
    return <EventPage list={list} item={item} dispatch={dispatch} paging={paging} reloadList={reloadList}></EventPage>
  }
}
