import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as blogActions from '../../actions/blogActions';
import {isLoaded} from '../../reducers/blog';
import {loadList} from '../../actions/blogActions';
import PanelView from '../../components/layout/PanelView';
import PanelTabs ,{PanelTabLeft, PanelTabRight}from '../../components/layout/PanelTabs';
import ListView from './ListView';
import Info from './Info';

let cmdsRight = [{
    active: false,
    icon: 'pencel',
    label: 'New Blog',
    href: '/blog/new'
}];

let tabsLeft = [{
  label : 'Blog List',
  name: 'blog_list'
}];

let tabsRight = [{
  label : 'Info',
  name : 'info'
}];
class BlogPage extends Component {
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
          <ListView list={list} paging={paging} reloadList={reloadList} {...bindActionCreators(blogActions, dispatch)}></ListView>
        </PanelTabLeft>
      </PanelTabs>
      <PanelTabs cmds={cmdsRight} tabs={tabsRight}>
        <PanelTabRight tab={tabsRight[0]} >
          <Info item={item} {...bindActionCreators(blogActions, dispatch)}></Info>
        </PanelTabRight>
      </PanelTabs>
    </PanelView>
  };
}

@connect (state =>({
  list: state.blog.list,
  error: state.blog.error,
  item: state.blog.item,
  paging: state.blog.paging,
  reloadList : state.blog.reloadList
}))
export default class BlogPageContainer{
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
    return <BlogPage list={list} item={item} dispatch={dispatch} paging={paging} reloadList={reloadList}></BlogPage>
  }
}
