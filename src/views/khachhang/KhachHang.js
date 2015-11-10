import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as khachhangActions from 'actions/khachhangActions';
import {isLoaded, loadList as loadKH} from 'actions/khachhangActions';
import PanelView from 'components/layout';

@connect(
  state =>({
    listKH: state.khachhang.list,
    error: state.khachhang.error,
    loading: state.khahchang.loading
  }),
  {...khachhangActions})

export default
class KhachHang extends Component{
  static propTypes = {
    listKH: PropTypes.array,
    error: PropTypes.object,
    loading: PropTypes.bool,
    load:PropTypes.func.isRequired
  }
  static fetchDataDeferred(getState, dispatch){
    if(!isLoaded(getState)){
      return dispatch(loadKH());
    }
  }
  render(){
    return (
      <PanelView>
      </PanelView>
    );
  }
}
